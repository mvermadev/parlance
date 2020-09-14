import React from 'react'
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import bannerLogo from '../../../img/logo.png'

function UrlCard(props) {
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
                {props.title}
            </p>
            <p style={{marginTop: '0px'}}>
                {props.author}
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
                    <p>{props.comments}</p>
                </div>
                <div className="cardIcons">
                    <VisibilityOutlinedIcon style={{color: '#707070', margin: '0px 10px'}}/>
                    <p>{props.views}</p>
                </div>
                    <ShareIcon style={{color: '#707070', margin: '0px 10px'}}/>
                   
            </div>
            <div className="btmQues2">
                    <ArrowDropUpIcon fontSize="large" style={{color: '#797979'}}/>
                    <p style={{color: '#B0343C', fontWeight: 'bold'}}>
                        {props.views}
                    </p>
                    <ArrowDropDownIcon fontSize="large" style={{color: '#797979'}}/>
            </div>
        </div>
    </div>
            </div>
        </div>
    )
}

export default UrlCard