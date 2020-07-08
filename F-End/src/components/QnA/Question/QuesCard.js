import React, {useState} from 'react'
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import profile from '../../../img/profile.jpeg'
import bannerLogo from '../../../img/logo.png'
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import '../QnA.css'

function QuesCard() {

    const titleCard =
    ( 
    <div className="middleQues">
        <p style={{fontWeight: 'bold'}}>
            How to search profiles on linkedIn, what is the usage of Xray Seach?
        </p>
        <p>
            I would like to know the differenc between these two seaches, will I get...<span style={{color: 'rgb(38, 0, 176)'}}>show more</span>
        </p>
    </div>
    )

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
                                style={{color: '#707070', margin: '0px 10px'}}/>
                
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

    const titleCardCompo = ()=>{
        return (

            <div className="QuesCard">
                {cardHead()}
                {titleCard}
            <div className="btmQues">
                <div className="btmQues1">
                    <div className="cardIcons">
                        <CommentOutlinedIcon fontSize="medium" style={{color: '#707070', margin: '0px 5px'}} />
                        <p>23</p>
                    </div>
                    <div className="cardIcons">
                        <VisibilityOutlinedIcon style={{color: '#707070', margin: '0px 10px'}}/>
                        <p>34</p>
                    </div>
                        <ShareIcon style={{color: '#707070', margin: '0px 10px'}}/>
                        
                </div>
                <div className="btmQues2">
                        <ArrowDropUpIcon fontSize="large" style={{color: '#797979'}}/>
                        <p style={{color: '#B0343C', fontWeight: 'bold'}}>
                            3
                        </p>
                        <ArrowDropDownIcon fontSize="large" style={{color: '#797979'}}/>
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
            <div className="btmQues1">
                <div className="cardIcons">
                    <CommentOutlinedIcon fontSize="medium" style={{color: '#707070', margin: '0px 5px'}} />
                    <p>23</p>
                </div>
                <div className="cardIcons">
                    <VisibilityOutlinedIcon style={{color: '#707070', margin: '0px 10px'}}/>
                    <p>34</p>
                </div>
                    <ShareIcon style={{color: '#707070', margin: '0px 10px'}}/>
                   
            </div>
            <div className="btmQues2">
                    <ArrowDropUpIcon fontSize="large" style={{color: '#797979'}}/>
                    <p style={{color: '#B0343C', fontWeight: 'bold'}}>
                        3
                    </p>
                    <ArrowDropDownIcon fontSize="large" style={{color: '#797979'}}/>
            </div>
        </div>
    </div>
        )
    }


    return (
        <div>
            {titleCardCompo()}
            {urlCardCompo()}
            {titleCardCompo()}
            {urlCardCompo()}
        </div>
    )

}









export default QuesCard
