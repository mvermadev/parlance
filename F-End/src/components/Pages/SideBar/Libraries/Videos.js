import React from 'react'
import Library from './Library'
import UrlCard from '../../card/UrlCard'
import './Library.css'

function Videos() {
    return (
        <div className="LibCards">
            <Library content='Videos'/>
            <div className="Cards">
                <UrlCard title="How to search profiles on linkedIn, what is the usage of Xray Seach?" author="Contributor: Ashfaq" comments="15" views="45" votes="23" />
                <UrlCard title="How to search profiles on linkedIn, what is the usage of Xray Seach?" author="Contributor: Ashfaq" comments="15" views="45" votes="23" />
                <UrlCard title="How to search profiles on linkedIn, what is the usage of Xray Seach?" author="Contributor: Ashfaq" comments="15" views="45" votes="23" />
                <UrlCard title="How to search profiles on linkedIn, what is the usage of Xray Seach?" author="Contributor: Ashfaq" comments="15" views="45" votes="23" />
            </div>
        </div>
    )
}

export default Videos
