import React from 'react'
import CommentIcon from '@material-ui/icons/Comment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import profile from '../../../img/profile.jpeg'
import '../QnA.css'

function QuesCard() {
    return (
        <div className="QuesCard">
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
            <div className="middleQues">
                <p style={{fontWeight: 'bold'}}>
                    How to search profiles on linkedIn, what is the usage of Xray Seach?
                </p>
                <p>
                    I would like to know the differenc between these two seaches, will I get good profiles
                </p>
            </div>
            <div className="btmQues">
                <div className="btmQues1">
                        <CommentIcon fontSize="medium" style={{color: '#B0343C', margin: '0px 5px'}} />
                        <VisibilityIcon style={{color: '#B0343C', margin: '0px 10px'}}/>
                        <ShareIcon style={{color: '#B0343C', margin: '0px 10px'}}/>
                </div>
                <div className="btmQues2">
                        <ArrowDropUpIcon fontSize="large" style={{color: '#797979'}}/>
                        <p>
                            3
                        </p>
                        <ArrowDropDownIcon fontSize="large" style={{color: '#797979'}}/>
                </div>
            </div>
        </div>
    )
}

export default QuesCard
