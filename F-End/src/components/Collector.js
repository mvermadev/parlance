import React from 'react'
import MainHeader from './universal/Header/MainHeader'
import BottomNav from './universal/Footer/BottomNav'
import QuesCard from './QnA/Question/QuesCard'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Community from './Pages/Community'
import Filter from './universal/Header/Filter'
import Library from './Pages/SideBar/Libraries/Library'
import Articles from './Pages/SideBar/Libraries/Articles'
import Videos from './Pages/SideBar/Libraries/Videos'
import BookPdf from './Pages/SideBar/Libraries/BookPdf'

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
            <div style={{backgroundColor: '#f0f0f0', height: '100%' }}>
                <MainHeader/>
                    <Switch>
                        <Route exact path='/' component={MainCompo}/>
                        <Route path='/community' component={Community}/>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/library' component={Library}/>
                        <Route path='/articles' component={Articles}/>
                        <Route path='/bookpdf' component={BookPdf}/>
                        <Route path='/videos' component={Videos}/>
                    </Switch>
                <BottomNav/>
            </div>
        </Router>
    )
}

export default Collector
