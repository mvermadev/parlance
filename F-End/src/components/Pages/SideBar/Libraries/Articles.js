import React from 'react'
import UrlCard from '../../card/UrlCard'
import Loader from '../../../universal/Loader'

function Articles(props) {
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
}

export default Articles