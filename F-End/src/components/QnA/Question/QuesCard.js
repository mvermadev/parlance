import React, {useState, useEffect, useLayoutEffect} from 'react'
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import profile from '../../../img/profile.jpeg'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import bannerLogo from '../../../img/logo.png'
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PopularPosts from '../PopularPosts'
import {store} from '../../../redux/reducers/index'
import BookPdf from './BookPdf'
import {connect} from 'react-redux'
import axios from 'axios'
import '../QnA.css'
 
function QuesCard(props) {

    const titleCard = (text)=>{
        return(
            <div className="middleQues">
            <p style={{fontWeight: 'bold'}}>
                How to search profiles on linkedIn, what is the usage of Xray Seach?
            </p>
            <p>
                I would like to know the differenc between these two seaches, will I get...<span style={{color: 'rgb(38, 0, 176)'}}>show more</span>
            </p>
        </div>
        )
    }

    // 3Dots style
    const StyledMenu = withStyles({
        paper: {
          border: '1px solid #d3d4d5',
            
        },
      })((props) => (
        <Menu
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          {...props}
        />
      ));

    const StyledMenuItem = withStyles((theme) => ({
        root: {
          '&:focus': {
            backgroundColor: "#B02911",
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
              color: theme.palette.common.white,
            },
          },
        },
      }))(MenuItem);

      const [anchorEl, setAnchorEl] = React.useState(null);

        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
      
        const handleClose = () => {
          setAnchorEl(null);
        };

        const cardHead=()=>{
            return(
                <div className="topQuesHead">
                <div className="topQues">
                <div>
                    <img src={profile} alt=""/>
                </div>
                <div>
                <div className="topQues1">
                    <p style={{fontWeight: 'bold'}}>Kingsten Jones</p>
                </div>
                <div className="topQues2">
                        <p>Posted: 21 July</p> 
                        <p>In: Sourcing</p> 
                    </div>
                </div>
                </div>
                <div>         
                    <MoreVertIcon
                                aria-controls="customized-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                                style={{color: '#707070', margin: '0px 10px', cursor: 'pointer'}}/>
                
                    <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}>
                                <StyledMenuItem>
                                <ListItemIcon>
                                <BookmarkBorderOutlinedIcon style={{color: '#707070', margin: '0px 10px'}}/>
                                </ListItemIcon>
                                <ListItemText primary="Save post" />
                                </StyledMenuItem>
                                <StyledMenuItem>
                                <ListItemIcon>
                                <ReportOutlinedIcon style={{color: '#707070', margin: '0px 10px'}}/>
                                </ListItemIcon>
                                <ListItemText primary="Report post" />
                                </StyledMenuItem>
                     </StyledMenu>
            
                </div>
            </div>
            )
        }

    const titleCardCompo = (name, text, avatar, likes, comments)=>{
        return (

            <div className="QuesCard">
                {cardHead(name)}
                {titleCard(text)}
            <div className="btmQues">
               
                <div className="mobBtmQeus1 btmQues1" id="mobBtmQeus1">
                    <div className="cardIcons">
                        <CommentOutlinedIcon fontSize="medium" style={{color: '#707070', margin: '0px 5px'}} />
                        <p>{comments}</p>
                    </div>
                    <div className="cardIcons">
                        <VisibilityOutlinedIcon style={{color: '#707070', margin: '0px 10px'}}/>
                        <p>34</p>
                    </div>
                        <ShareIcon style={{color: '#707070', margin: '0px 10px'}}/>
                        
                </div>
                {deskCardHandles()}
                <div className="btmQues2">
                        <ArrowDropUpIcon fontSize="large" style={{color: '#797979', cursor: 'pointer'}}/>
                        <p style={{color: '#B0343C', fontWeight: 'bold'}}>
                            {likes}
                        </p>
                        <ArrowDropDownIcon fontSize="large" style={{color: '#797979', cursor: 'pointer'}}/>
                </div>
            </div>
        </div>
        );
        
    }

    const UrlCard = 
    (
        <div className="middleQues">
            <p>
                I would like to know the differenc between these two seaches, will I get good profiles
            </p>
            <img src={bannerLogo} alt="thumbnail image"/>
        </div>
    );
    const urlCardCompo =()=>{
        
        return(
            <div className="QuesCard">
            {cardHead()}
            {UrlCard}
        <div className="btmQues">
            
            <div className="mobBtmQeus1 btmQues1" id="mobBtmQeus1">
                <div className="cardIcons">
                    <CommentOutlinedIcon fontSize="medium" style={{color: '#707070', margin: '0px 5px', cursor: 'pointer'}} />
                    <p>23</p>
                </div>
                <div className="cardIcons">
                    <VisibilityOutlinedIcon style={{color: '#707070', margin: '0px 10px', cursor: 'pointer'}}/>
                    <p>34</p>
                </div>
                    <ShareIcon style={{color: '#707070', margin: '0px 10px', cursor: 'pointer'}}/>
                   
            </div>
            {deskCardHandles()}
            <div className="btmQues2">
                    <ArrowDropUpIcon fontSize="large" style={{color: '#797979', cursor: 'pointer'}}/>
                    <p style={{color: '#B0343C', fontWeight: 'bold'}}>
                        3
                    </p>
                    <ArrowDropDownIcon fontSize="large" style={{color: '#797979', cursor: 'pointer'}}/>
            </div>
        </div>
    </div>
        )
    }

    const deskCardHandles=()=>{
        return(
            <div className="deskBtmQeus1 btmQues1" id="deskBtmQeus1">
                                <div className="cardIcons">
                                    <CommentOutlinedIcon fontSize="small" style={{color: '#707070', margin: '0px 5px', cursor: 'pointer'}} />
                                    <p>Answers: 23</p>
                                </div>
                                <div className="cardIcons">
                                    <VisibilityOutlinedIcon fontSize="small" style={{color: '#707070', margin: '0px 10px', cursor: 'pointer'}}/>
                                    <p>Views: 59</p>
                                </div>
                                <div className="cardIcons">
                                    <ShareIcon fontSize="small"  style={{color: '#707070', margin: '0px 10px', cursor: 'pointer'}}/>
                                    <p>Share</p>
                                </div>
                                <div className="cardIcons">
                                    <BookmarkBorderIcon fontSize="small"  style={{color: '#707070', margin: '0px 10px', cursor: 'pointer'}}/>
                                    <p>Bookmark</p>
                                </div>
                            </div>
        )
    }

    const [postData, setPostData] = useState({data: {}})

    const fetchPosts = ()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));
        
        var raw = "";
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("https://recmonk.herokuapp.com/posts", requestOptions)
        .then(response => response.json())
        .then(result =>{
            console.log("result: ", result)
            setPostData({data: result})
            console.log("postData: ", postData)
        })
        .catch(error => console.log('error from QuesCard: ', error));         

    }

    useEffect(() => {
        fetchPosts();
        store.subscribe(()=>{
            console.log('user: ', store.getState().authUser.authUser)
        })
        console.log('questCard redux val: ', props.authVal)
        console.log('questCard redux val: ', localStorage.getItem('token'))
    }, [])

    return (
        <div className="mainQuesCard">
            <div>
            {titleCardCompo("manish", "text", "avatar", "likes", "comments")}
            <BookPdf/>
            {urlCardCompo()}
            {titleCardCompo()}
            {urlCardCompo()}
            </div>
            <div>
            <PopularPosts/>
            </div>
        </div>
    )

}

function mapStateToProps(state){
    return{
        authVal: state.authUser.authUser
    }
}

export default connect(mapStateToProps)(QuesCard)
