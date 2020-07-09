import React from 'react'
import MainHeader from './universal/Header/MainHeader'
import BottomNav from './universal/Footer/BottomNav'
import QuesCard from './QnA/Question/QuesCard'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Sign from './Authentication/GetIn/Sign'

const MainCompo =()=> {
    return(
        <div>
            <QuesCard/>
        </div>
    );
}

function Collector() {
    return (
        <Router>
            <div style={{backgroundColor: '#f0f0f0', height: '100vh' }}>
                <MainHeader/>
                    <Switch>
                        <Route exact path='/' component={MainCompo}/>
                    </Switch>
                <BottomNav/>
            </div>
        </Router>
    )
}

export default Collector
