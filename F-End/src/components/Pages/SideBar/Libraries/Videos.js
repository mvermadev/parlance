import React from 'react'
import UrlCard from '../../card/UrlCard'
import Loader from '../../../universal/Loader'

function Videos(props) {
    if (!props.library) {
        return (
            <Loader style={{ width: '100vw', height: '100vh' }} />
        )
    }
    else {
        return (
            <div className="LibCards">
                <div className="Cards">
                    {
                        props.cat == "All" ?
                            props.library.map(data => {
                                return (
                                    <UrlCard props={data} />
                                );
                            }) :
                            props.library.map(data => {
                                return (
                                    props.cat == data.sub_category ?
                                        <UrlCard props={data} /> : ''
                                )
                            })
                    }
                </div>
            </div>
        )
    }
}

export default Videos
