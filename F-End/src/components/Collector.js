import React from 'react'
import MainHeader from './universal/Header/MainHeader'
import BottomNav from './universal/Footer/BottomNav'
import QuesCard from './QnA/Question/QuesCard'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Sign from './Authentication/GetIn/Sign'
import Community from './Pages/Community'

const MainCompo =()=> {
    return(
        <div>
            <QuesCard/>
        </div>
    );
}


function Support() {
    return (
        <div>
            <h4>Support</h4>
        </div>
    )
}

function Profile() {
    return (
        <div>
            <h4>Profile</h4>
        </div>
    )
}

function Collector() {
    return (
        <Router>
            <div style={{backgroundColor: '#f0f0f0', height: '100vh' }}>
                <MainHeader/>
                    <Switch>
                        <Route exact path='/' component={MainCompo}/>
                        <Route path='/community' component={Community}/>
                        <Route path='/support' component={Support}/>
                        <Route path='/profile' component={Profile}/>
                    </Switch>
                <BottomNav/>
            </div>
        </Router>
    )
}

export default Collector
