import React from 'react'
import MainHeader from './universal/Header/MainHeader'
import BottomNav from './universal/Footer/BottomNav'
import QuesCard from './QnA/Question/QuesCard'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Filter from './universal/Header/Filter'
import Loader from './universal/Loader'
import Library from './Pages/SideBar/Libraries/Library'
import './universal/universal.css'
import DeskFooter from './universal/Footer/DeskFooter'
import AboutUs from './Pages/AppInfo/AboutUs'
import ContactUs from './Pages/AppInfo/ContactUs'
import UserProfile from './Pages/Profile/UserProfile'
import Community from './Pages/Community/Community'
import ReplyDesign from './Pages/Answers/Reply/ReplyDesign'
import Post from './QnPostnPoll/AddComponent'
import InformationGathering from './Pages/InformationGathering/InformationGatheringComponent'
import Fellowmonk from './Pages/SideBar/Bot/Fellowmonk'

const MainCompo =()=> {
    return(
        <div className="MainCompo">
            <Filter/>
            <QuesCard/>
        </div>
    );
}



function Collector() {
    return (
        <Router>
            <div style={{backgroundColor: '#f0f0f0', Height:'100%' }}>
                <MainHeader/>
                    <Switch>
                        <Route exact path='/' component={MainCompo}/>
                        <Route path='/community' component={Community}/>
                        <Route path='/library' component={Library}/>
                        <Route path='/aboutus' component={AboutUs}/>
                        <Route path='/contactus' component={ContactUs}/>
                        <Route path='/profile' component={UserProfile}/>
                        <Route path='/reply' component={ReplyDesign}/>
                        <Route path='/add-post/:data' component={Post}/>
                        <Route path='/info' component={InformationGathering}/>
                        <Route path='/loader' component={Loader}/>
                        <Route exact path='/fellowmonk' component={Fellowmonk}/>
                    </Switch>
                <BottomNav/>
                <DeskFooter/>
            </div>
        </Router>
    )
}

export default Collector
