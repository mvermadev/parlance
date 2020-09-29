import React, { useState } from 'react';
import { Avatar, Button, Menu, MenuItem, Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ReplyRoundedIcon from '@material-ui/icons/ReplyRounded';
import ShareIcon from '@material-ui/icons/Share';
import ReplyCompo from './ReplyCompo';
import '../Answers.css';

/* Header for reply */
function ReplyHeader(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="topReplyHead">
            <div className="topReply">
                <div>
                    <Avatar style={{ width: '36px', height: '36px' }} />
                </div>

                <div className="topReply1">
                    <p><b>{props.CName} </b>.<span className="topReply2"> 
                    {/* {props.CDate.slice(8, 10)} {new Date(props.CDate.slice(0, 4), props.CDate.slice(6, 7), props.CDate.slice(8, 10)).toLocaleString('default', { month: 'short' })} */}
                    </span></p>
                </div>

            </div>
            <div>
                <Button aria-controls="reply-menu" aria-haspopup="true" onClick={handleClick}>
                    <MoreHorizIcon />
                </Button>
                <Menu
                    id="reply-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}><ReportOutlinedIcon fontSize="small" /><span style={{ marginLeft: '5px' }}>Report</span></MenuItem>
                </Menu>
            </div>
        </div>
    );
}


/* Footer for reply */
function ReplyFooter() {

    const [dis, setDis] = React.useState('none');

    const handleReply = (event) => {
        setDis('block');
    };

    const [click, setClick] = useState(false);

    const ShowComment = () => {
        setClick(true)
    }

    const HideComment = () => {
        setClick(false)
    }

    return (
        <div>
            <div className="btmReply">
                <div className="btmReply1">
                    <div>
                        <Button onClick={click == false ? ShowComment : HideComment}><ReplyRoundedIcon fontSize="small" style={{ color: '#707070', cursor: 'pointer' }} /><span style={{ marginLeft: '5px' }}>Reply</span></Button>
                    </div>
                    <Button><ShareIcon fontSize="small" style={{ color: '#707070', cursor: 'pointer' }} /><span style={{ marginLeft: '5px' }}>Share</span></Button>
                </div>
                <div className="btmReply2">
                    <ArrowDropUpIcon fontSize="medium" style={{ color: '#797979', cursor: 'pointer' }} />
                    <p style={{ color: '#B0343C', fontWeight: 'bold' }}>5</p>
                    <ArrowDropDownIcon fontSize="medium" style={{ color: '#797979', cursor: 'pointer' }} />
                </div>
            </div>
            {click == true ? <div>
                <ReplyCompo />
            </div>
                : HideComment}

        </div>
    );
}


/* Complete Reply Component */
function ReplyDesign(props) {
    return (
        <div className="ReplyBody-Container">
            <div className="ReplyBody">
                <ReplyHeader CName={props.CName} CDate={props.CDate} />
                <Typography className="ReplyBody-content">
                    {props.CText}
                </Typography>
                <ReplyFooter />
            </div>
        </div>
    );
}

export default ReplyDesign;