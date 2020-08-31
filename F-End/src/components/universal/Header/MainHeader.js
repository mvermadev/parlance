import React from 'react'
import TopHeader from './TopHeader'
import BottomHeader from './BottomHeader'
import '../universal.css'

function MainHeader() {
    return (
        <div className="MainHeader">
            <TopHeader/>
            <BottomHeader/>
        </div>
    )
}

export default MainHeader
