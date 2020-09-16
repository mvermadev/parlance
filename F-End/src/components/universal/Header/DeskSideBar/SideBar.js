import React from 'react'
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import {useHistory} from 'react-router-dom'
import './DeskSide.css'

function SideBar() {

    const history = useHistory();

    const CloseNav=()=>{
        document.getElementById("mySidenav").style.width = "60px";

    }

    const OpenNav=()=>{
        document.getElementById("mySidenav").style.width = "250px";

    }

    const Logout=()=>{
        localStorage.removeItem('token');
        history.push('/')
    }

    return (
        <div>
            <div id="mySidenav" className="sidenav" onMouseOver={OpenNav} onMouseOut={CloseNav}>
           
            <div className="nav">
            <LiveHelpIcon style={{color: '#b32800'}} fontSize="medium" />
            <p onClick={()=>history.push('')}>Question</p>
            </div>
            <div className="nav">
            <MailIcon style={{color: '#b32800'}} fontSize="medium"/>
            <p onClick={()=>history.push('/fellowmonk')}>FellowMonk - Bot</p>
            </div>
            <div className="nav" >
            <LocalLibraryIcon style={{color: '#b32800'}} fontSize="medium" />
            <p onClick={()=>history.push('/articles')}>Library</p>
            </div>
            {
                localStorage.getItem('token') ? 
                <div className="nav" >
                <ExitToAppIcon style={{color: '#b32800'}} fontSize="medium" />
                <p onClick={Logout}>Logout</p>
                </div>
                :
                ''
            }
            </div>


            {/* <div>
            <MenuIcon fontSize="large" style={{fontSize:'30px',cursor:'pointer', marginLeft: '100px'}} onClick={OpenNav} />
            </div> */}
        </div>
    )
}

export default SideBar
