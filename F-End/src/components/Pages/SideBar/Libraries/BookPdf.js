import React from 'react'
import UrlCard from '../../card/UrlCard'

function BookPdf(props) {
    let arr = []
    props.library.map(data => {
        if (data.category == "BookPdfs")
            arr.push(data)
    })

    return (
        <div className="LibCards">
            <div className="Cards">
                {
                    props.cat == "All" ?
                        arr.map(data => {
                            return (
                                <UrlCard key={data._id} props={data} />
                            );
                        }) :
                        arr.map(data => {
                            return (
                                props.cat == data.sub_category ?
                                    <UrlCard key={data._id} props={data} /> : ''
                            )
                        })
                }
            </div>
        </div>
    )
}

export default BookPdf