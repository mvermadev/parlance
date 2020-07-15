import React from 'react'
import Library from './Library'
import UrlCard from '../../card/UrlCard'

function Articles(props) {
    return (
        <div>
            <Library content='Articles'/>
            <div>
                <UrlCard title="How to search profiles on linkedIn, what is the usage of Xray Seach?" author="Contributor: Ashfaq" comments="15" views="45" votes="23" />
                <UrlCard title="How to search profiles on linkedIn, what is the usage of Xray Seach?" author="Contributor: Ashfaq" comments="15" views="45" votes="23" />
                <UrlCard title="How to search profiles on linkedIn, what is the usage of Xray Seach?" author="Contributor: Ashfaq" comments="15" views="45" votes="23" />
                <UrlCard title="How to search profiles on linkedIn, what is the usage of Xray Seach?" author="Contributor: Ashfaq" comments="15" views="45" votes="23" />
            </div>
        </div>
    )
}

export default Articles