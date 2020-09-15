import React, {useState, useEffect, useLayoutEffect, Component} from 'react'
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import profile from '../../../img/profile.jpeg'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import bannerLogo from '../../../img/logo.png'
import { Avatar} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PopularPosts from '../PopularPosts'
import {store} from '../../../redux/reducers/index'
import BookPdf from './BookPdf'
import {connect} from 'react-redux'
import ReplyCompo from '../../Pages/Answers/Reply/ReplyCompo'
import axios from 'axios'
import '../QnA.css'
 
var globData = [];
;

class QuesCard extends Component {
    constructor(props)
    {
        super(props)
        this.state={data: [], load: true}
    }

    componentDidMount()
    {
        this._getData();
    }

    _getData = ()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));
        
        var raw = "";
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("https://recmonk.herokuapp.com/posts", requestOptions)
        .then(response => {
            if (response.ok) {
                    return response;
            } else {
                let errorMessage = `${response.status(response.statusText)}`
                let error = new Error(errorMessage);
                throw(error);
            }
        })
        .then(response => response.json())
        .then(result =>{
            console.log("result: ", result)
           this.setState({data: result})
            this.setState({load: false})
           //    globData = result;
        // console.log('globData: ', globData);
        
        console.log("postData: ", this.state.data)
        console.log('comment data: ', this.state.data.comments)
    })
    .catch(error => console.log('error from QuesCard: ', error));         
    
}

    render() {
    globData = this.state.data;
        return (
            <div className="mainQuesCard">
            <div>
            {/* {titleCardCompo("manish", "text", "avatar", "likes", "comments")} */}
           
                {this.state.load || !this.state.data ? 
                    <h4 style={{textAlign: 'center'}}>Fetching Posts...</h4> :
                    this.state.data.map((item, index)=>
                        <div key={index} className="QuesCard">
                                <CardHead name={item.name} />
                                <TextCard text={item.text} />
                                <Handles cardId={item._id} />
                                {item.comments.map((item, index)=>
                                item ? <div> <DisplayComment commentId={item._id} CName={item.name} CText={item.text} CId={item._id} CImg={item.avatar} commentON={true}/> </div>: ''
                                )}
                        </div>
                    )
                }
            <BookPdf/>
            {/* {urlCardCompo()} */}
            {/* {titleCardCompo()} */}
            {/* {urlCardCompo()} */}
            </div>
            <div>
            <PopularPosts/>
           
            </div>
        </div>
        )
    }
}

//Header of the card.
function CardHead(props){
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

    
            return(
                
                <div className="topQuesHead">
                <div className="topQues">
                <div>
                    <img src={profile} alt=""/>
                </div>
                <div>
                <div className="topQues1">
                    <p style={{fontWeight: 'bold'}}>{props.name}</p>
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

// text Card.
function TextCard(props){
        return(
            <div className="middleQues">
            <p style={{fontWeight: 'bold'}}>
                {props.text}
            </p>
            <p>
                {props.text}
                {/* <span style={{color: 'rgb(38, 0, 176)'}}>show more</span> */}
            </p>
        </div>
        )

}

// url card.
function UrlCard(){
    return(
        
        <div className="middleQues">
            <p>
                I would like to know the differenc between these two seaches, will I get good profiles
            </p>
            <img src={bannerLogo} alt="thumbnail image"/>
        </div>
    )
}

// handles of the card.
function Handles(props){

    const likeBtn = ()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));


        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(`https://recmonk.herokuapp.com/posts/like/${props.cardId}`, requestOptions)
        .then(response => {
            if (response.ok) {
                    return response;
            } else {
                let errorMessage = `${response.status(response.statusText)}`
                let error = new Error(errorMessage);
                throw(error);
            }
        })
        .then(response => response.json())
        .then(result =>{
            console.log("result like: ", result)
        })
        .catch(error => console.log('error from QuesCard: ', error));       
    }

    const dislikeBtn = ()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));


        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(`https://recmonk.herokuapp.com/posts/unlike/${props.cardId}`, requestOptions)
        .then(response => {
            if (response.ok) {
                    return response;
            } else {
                let errorMessage = `${response.status(response.statusText)}`
                let error = new Error(errorMessage);
                throw(error);
            }
        })
        .then(response => response.json())
        .then(result =>{
            console.log("result like: ", result)
        })
        .catch(error => console.log('error from QuesCard: ', error));       
    }

    const [click, setClick] = useState(false);    
    
        const ShowComment = () =>{
            setClick(true)
        }
    
        const HideComment = ()=>{
            setClick(false)
        }
    
       

    const DeskCardHandles=()=>{

        return(
            <div>
            <div className="deskBtmQeus1 btmQues1" id="deskBtmQeus1">
                                <div className="cardIcons" onClick={click == false ? ShowComment : HideComment}>
                                    <CommentOutlinedIcon fontSize="small" style={{color: '#707070', margin: '0px 5px', cursor: 'pointer'}} />
                                    <p>Answers</p>
                                </div>
                                <div className="cardIcons">
                                    <VisibilityOutlinedIcon fontSize="small" style={{color: '#707070', margin: '0px 10px', cursor: 'pointer'}}/>
                                    <p>Views: 59</p>
                                </div>
                                <div className="cardIcons">
                                    <ShareIcon fontSize="small"  style={{color: '#707070', margin: '0px 10px', cursor: 'pointer'}}/>
                                    <p>Share</p>
                                </div>
                            </div>
                            
                            </div>
        )
    }

    return (
        <div>
        <div className="btmQues">
           
            <div className="mobBtmQeus1 btmQues1" id="mobBtmQeus1">
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
            <DeskCardHandles/>
            <div className="btmQues2">
                    <div onClick={likeBtn}>
                    <ArrowDropUpIcon fontSize="large" style={{color: '#797979', cursor: 'pointer'}}/>
                    </div>
                    <p style={{color: '#B0343C', fontWeight: 'bold'}}>
                        0
                    </p>
                    <div onClick={dislikeBtn}>
                    <ArrowDropDownIcon fontSize="large" style={{color: '#797979', cursor: 'pointer'}}/>
                    </div>
            </div>
        </div>
            {click == true ? <div>
                    <ReplyCompo CName={props.CName} CId={props.CId} CImg={props.CImg} cardId={props.cardId}/> 
                    <DisplayComment cardId={props.cardId} CId={props.CId}/>
                </div>
                : HideComment}
        </div>
    );
}

function DisplayComment(props){
    return(
    <div>
         <div className='commentCont'>
                          {props.commentON == true ? <div className="comments">
                                  <div className="commentAvatar">
                                    <Avatar style={{ width: '35px', height: '35px' }} />
                                  </div>
                                  <div className="commentTexts">
                                    <div className="commentName">
                                      <p style={{fontWeight: 'bold', fontSize: '16px'}}>{props.CName} ·</p>
                                      <p>21 July</p>
                                    </div>
                                    <div className="commetAns">
                                    <p>{props.CText}</p>
                                    </div>
                                  </div>
                                </div> : ''}
                </div>  
             
    </div>
    )
}

// Desktop view Handles of the card

// function QuesCard(props) {

//     const [postData, setPostData] = useState({data: []})

//     // const loadData = ()=>{
//     //     return(
//     //         <Demo/>
//     //     )
//     // }
   
//     var localData = [];

//     const fetchPosts=()=>{
//         var myHeaders = new Headers();
//         myHeaders.append("Authorization", localStorage.getItem('token'));
        
//         var raw = "";
        
//         var requestOptions = {
//           method: 'GET',
//           headers: myHeaders,
//           redirect: 'follow'
//         };

//         fetch("https://recmonk.herokuapp.com/posts", requestOptions)
//         .then(response => {
//             if (response.ok) {
//                     return response;
//             } else {
//                 let errorMessage = `${response.status(response.statusText)}`
//                 let error = new Error(errorMessage);
//                 throw(error);
//             }
//         })
//         .then(response => response.json())
//         .then(result =>{
//             console.log("result: ", result)
//         //    this.setState({data: result})
//             // globData = result
//             localData = result
//             setPostData({data: result})
//            globData = result;
//         // console.log('globData: ', globData);
        
//         console.log("postData from func: ", postData.data)
//         console.log("globData from func: ", globData)
//         console.log("localData from func: ", localData)
//     })
//     .catch(error => console.log('error from QuesCard: ', error));         
    
//     }

//     useEffect(() => {
//         fetchPosts();
//         // loadData();
//         store.subscribe(()=>{
//             console.log('user: ', store.getState().authUser.authUser)
//         })
//         console.log('questCard redux val: ', props.authVal)
//         console.log('questCard redux val: ', localStorage.getItem('token'))
//         console.log('globdata: ', globData);
//         console.log('localData: ', localData);
        
//     }, [])

//     return (
//         <div>

//         </div>
//     )
// }




function mapStateToProps(state){
    return{
        authVal: state.authUser.authUser
    }
}

export default connect(mapStateToProps)(QuesCard)
