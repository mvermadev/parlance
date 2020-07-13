import React from 'react'
import MainHeader from './universal/Header/MainHeader'
import BottomNav from './universal/Footer/BottomNav'
import QuesCard from './QnA/Question/QuesCard'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Community from './Pages/Community'
import Filter from './universal/Header/Filter'
import Library from './Pages/SideBar/Libraries/Library'

const MainCompo =()=> {
    return(
        <div>
            <Filter/>
            <QuesCard/>
        </div>
    );
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
                        <Route path='/profile' component={Profile}/>
                        <Route path='/library' component={Library}/>
                    </Switch>
                <BottomNav/>
            </div>
        </Router>
    )
}

export default Collector
