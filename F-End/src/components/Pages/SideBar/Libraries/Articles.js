import React from 'react'
import UrlCard from '../../card/UrlCard'
import Loader from '../../../universal/Loader'

function Articles(props) {

    let arr = []
    props.library.map(data => {
        if (data.category == "Articles")
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

export default Articles