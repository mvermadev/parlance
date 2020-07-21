import React from 'react'
import Library from './Library'
import UrlCard from '../../card/UrlCard'
import './Library.css'

function Articles(props) {
    return (
        <div>
            <Library content='Articles'/>
            <div className="Cards">
                <UrlCard title="How to search profiles on linkedIn, what is the usage of Xray Seach?" author="Contributor: Ashfaq" comments="15" views="45" votes="23" className="card" />
                <UrlCard title="How to search profiles on linkedIn, what is the usage of Xray Seach?" author="Contributor: Ashfaq" comments="15" views="45" votes="23" className="card"/>
                <UrlCard title="How to search profiles on linkedIn, what is the usage of Xray Seach?" author="Contributor: Ashfaq" comments="15" views="45" votes="23" className="card"/>
                <UrlCard title="How to search profiles on linkedIn, what is the usage of Xray Seach?" author="Contributor: Ashfaq" comments="15" views="45" votes="23" className="card" />
                <UrlCard title="How to search profiles on linkedIn, what is the usage of Xray Seach?" author="Contributor: Ashfaq" comments="15" views="45" votes="23" className="card" />
                <UrlCard title="How to search profiles on linkedIn, what is the usage of Xray Seach?" author="Contributor: Ashfaq" comments="15" views="45" votes="23" className="card" />
                <UrlCard title="How to search profiles on linkedIn, what is the usage of Xray Seach?" author="Contributor: Ashfaq" comments="15" views="45" votes="23" className="card" />
            </div>
        </div>
    )
}

export default Articles