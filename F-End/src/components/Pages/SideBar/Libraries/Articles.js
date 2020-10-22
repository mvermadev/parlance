import React from 'react'
import UrlCard from '../../card/UrlCard'
import Loader from '../../../universal/Loader'

function Articles(props) {

    console.log(props.library)
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
                                    <UrlCard key={data._id}  props={data} />
                                );
                            }) :
                            props.library.map(data => {
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
}

export default Articles