import React, { useState } from 'react';
import { Avatar, Button, Menu, MenuItem, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ReplyRoundedIcon from '@material-ui/icons/ReplyRounded';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ReplyCompo from './ReplyCompo';
import '../Answers.css'
import '../../../QnA/QnA.css'

/* Header for reply */
function ReplyHeader() {

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
                    <Avatar style={{ width: '48px', height: '48px' }} />
                </div>
                <div>
                    <div className="topReply1">
                        <p style={{ fontWeight: 'bold' }}>Monk Username</p>
                    </div>
                    <div className="topReply2" style={{ marginTop: '-5px' }}>
                        <p>On: 29 July</p>
                    </div>
                </div>
            </div>
            <div>
                <Button aria-controls="reply-menu" aria-haspopup="true" onClick={handleClick}>
                    <MoreVertIcon />
                </Button>
                <Menu
                    id="reply-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}><ReportOutlinedIcon /><span style={{ marginLeft: '5px' }}>Report</span></MenuItem>
                </Menu>
            </div>
        </div>
    );
}


/* Footer for reply */
function ReplyFooter() {

    const [dis, setDis] = React.useState('none');

    const [replyDisplay, setReplyDisplay] = useState('close');

    const handleReply = (event) => {
        
        if(replyDisplay == 'open')
        {
            setDis('none')
        }
        if(replyDisplay == 'close')
        {
            setDis('block');
        }
    };

    return (
        <div>
            <div className="btmReply">
            <div className="deskBtmQeus1 btmQues1" id="deskBtmQeus1">
                                <div className="cardIcons" onClick={handleReply}  >
                                    <CommentOutlinedIcon fontSize="small" style={{color: '#707070', margin: '0px 5px', }} />
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
                <div className="btmReply2">
                    <ArrowDropUpIcon fontSize="large" style={{ color: '#797979', cursor: 'pointer' }} />
                    <p style={{ color: '#B0343C', fontWeight: 'bold' }}>5</p>
                    <ArrowDropDownIcon fontSize="large" style={{ color: '#797979', cursor: 'pointer' }} />
                </div>
            </div>
            <div style={{ display: dis }}>
                <ReplyCompo login={true} />
            </div>
        </div>
    );
}


/* Complete Reply Component */
function ReplyDesign() {
    return (
        <div className="ReplyDesign" >
            <div className="ReplyBody">
                <ReplyHeader />
                <div>
                    <Typography style={{ padding: '16px' }}>
                        fhl df dlfkds flsdh flldsahf hdslfh dslfh sdskfhf ldsakfh sdalfh dsal;kf
                        dfdaskj kasnfksdajhf kdfndsa flkdsf asdafndsna ldksakf ldsklnfd slfkd
                        df asdnf ldksksfj dskfmf dlkdsmf kdj fdslfk d;sk;fm ds;l;fld of
                        dfh ds lkdsf dlk djf dsdfj lkdsjf ldks sdmff sdlkf jlkf j ds lkldsjf k.
                    </Typography>
                </div>
                <ReplyFooter />
            </div>
        </div>
    );
}

export default ReplyDesign;