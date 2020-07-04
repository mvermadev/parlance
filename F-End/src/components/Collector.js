import React from 'react'
import MainHeader from './universal/Header/MainHeader'
import BottomNav from './universal/Footer/BottomNav'
import QuesCard from './QnA/Question/QuesCard'

function Collector() {
    return (
        <div style={{backgroundColor: '#f0f0f0', height: '100vh' }}>
            <MainHeader/>
            <BottomNav/>
            <QuesCard/>
        </div>
    )
}

export default Collector
