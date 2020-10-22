import React from 'react'
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './profile.css'

function ProfQues(props) {

    const Card = (props) => {
        return (
            <div className="middleQues">
                <p style={{ fontWeight: 'bold' }}>
                    {props.data.name}
                </p>
                <div className="topQues topQues2">
                    <p className="posted">Posted: {props.data.date.slice(8, 10)} {new Date(props.data.date.slice(0, 4), props.data.date.slice(6, 7), props.data.date.slice(8, 10)).toLocaleString('default', { month: 'short' })}</p>
                        {
                            (props.data.category.length > 1) ? <p className="post-cat">In: {props.data.category[1]}</p> : (
                                props.data.category[0] != "" ? <p className="post-cat">In: {props.data.category[0]}</p> : <p></p>
                            )
                        }
                </div>
                <div style={{ color: '#333333', fontSize: '14px', margin: '0px' }}>
                    <p>{props.data.text}</p>
                </div>
            </div>
        );
    }

    return (
        <div key={props.props._id} className="profile">
            <div className="QuesCard">
                <Card data={props.props} />
                <div className="btmQues">
                    <div className="btmQues1">
                        <div className="cardIcons">
                            <CommentOutlinedIcon fontSize="medium" style={{ color: '#707070', margin: '0px 5px' }} />
                            <p>12</p>
                        </div>
                        <div className="cardIcons">
                            <VisibilityOutlinedIcon style={{ color: '#707070', margin: '0px 10px' }} />
                            <p>43</p>
                        </div>
                        <ShareIcon style={{ color: '#707070', margin: '0px 10px' }} />

                    </div>
                    <div className="btmQues2">
                        <ArrowDropUpIcon fontSize="large" style={{ color: '#797979' }} />
                        <p style={{ color: '#B0343C', fontWeight: 'bold' }}>
                            5
                            </p>
                        <ArrowDropDownIcon fontSize="large" style={{ color: '#797979' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfQues