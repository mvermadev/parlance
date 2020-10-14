import React from 'react'
import UrlCard from '../../card/UrlCard'

function Videos(props) {
    return (
        <div className="LibCards">
            <div className="Cards">
                {
                    props.library.map(data => {
                        return (
                            <UrlCard props={data} />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Videos
