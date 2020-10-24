import React from 'react'
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Loader from '../../universal/Loader'
import { Grid } from '@material-ui/core';
import { ReactTinyLink } from 'react-tiny-link'

function UrlCard(props) {

    function is_url(str) {
        var pattern = new RegExp('^((ft|htt)ps?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name and extension
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?' + // port
            '(\\/[-a-z\\d%@_.~+&:]*)*' + // path
            '(\\?[;&a-z\\d%@_.,~+&:=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

        return pattern.test(str);
    }

    const pat = new RegExp('^(https?|ftp)://');
    const Card = (props) => {
        return (
            <div className="middleQues">
                <p style={{ fontWeight: 'bold' }}>
                    {props.data.title}
                </p>
                <div style={{ color: '#333333', fontSize: '14px', margin: '0px' }}>
                    <p style={{ float: 'left', marginTop: '0px' }}>
                        Author: Name
                    </p>
                    <p style={{ float: 'right', marginTop: '0px' }}>
                        In: {props.data.sub_category}
                    </p>
                </div>
                {
                    is_url(props.data.content) == true ? !(pat.test(props.data.content)) ?
                        <ReactTinyLink
                            cardSize="small"
                            showGraphic={true}
                            maxLine={2}
                            minLine={1}
                            url={"http://" + props.data.content}
                        /> : <ReactTinyLink
                            cardSize="small"
                            showGraphic={true}
                            maxLine={2}
                            minLine={1}
                            url={props.data.content}
                        /> : <p></p>
                }
                {
                    props.data.pdf_link ? <a href={props.data.pdf_link}>{props.data.pdf}</a> : <p></p>
                }
            </div>
        );
    }

    if (!props.props.title) {
        return (
            <Loader style={{ width: '100vw', height: '100vh' }} />
        )
    }
    else {
        return (
            <Grid item xs={12} sm={6} md={4} key={props.props._id} className="library-grid">
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
            </Grid>
        )
    }
}

export default UrlCard