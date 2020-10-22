import React from 'react'
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import bannerLogo from '../../../img/logo.png'
import Loader from '../../universal/Loader'
import { getLinkPreview } from 'link-preview-js';

function UrlCard(props) {

    const [state, setState] = React.useState({
        url: {}
    })

    const getUrl = (item) => {
        getLinkPreview('https://www.youtube.com/watch?v=abaFffQLJoY')
            .then(data => {
                console.log(data)
                setState({
                    url: data
                })
            })
            .catch(error => console.log(error.message));
    }

    const Card = (props) => {
        if (!props.data) {
            return (
                <Loader style={{ width: '100vw', height: '100vh' }} />
            )
        }
        else {
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
                        state.url.images ?  <a href={state.url.url}><img src={state.url.images[0]} alt="image" /></a> : <a href=""><img src={bannerLogo} alt="image" /></a>
                    }
                </div>
            );
        }
    }

    return (
        <div key={props.props._id}>
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

export default UrlCard