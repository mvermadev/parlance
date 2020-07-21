import React from 'react'
import Library from './Library'
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import profile from '../../../../img/profile.jpeg'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import bannerLogo from '../../../../img/logo.png'
import '../../../QnA/QnA.css'

function BookPdfCode() {
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

    const UrlCard = 
    (
        <div className="middleQues">
            <p style={{fontWeight: 'bold'}}>
                How to serch profiles on LinkedIn. what is the usage of Xray search
            </p>
            <p style={{marginTop: '0px'}}>
                Contributor: Ashfaq
            </p>
            <img src={bannerLogo} alt="thumbnail image"/>
        </div>
    );
    return (
        <div>
            <div>
            <div className="QuesCard">
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
            </div>
        </div>
    )
}

function BookPdf(){
    return(
        <div>
            <Library content='BookPdfs'/>
          <div className="Cards">
            <BookPdfCode/>
            <BookPdfCode/>
            <BookPdfCode/>
            <BookPdfCode/>
         </div>
        </div>
    )
}

export default BookPdf



