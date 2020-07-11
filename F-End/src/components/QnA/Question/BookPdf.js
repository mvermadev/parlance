import React, {useState} from 'react'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import FilterListIcon from '@material-ui/icons/FilterList';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import bp from '../../../img/bp.png'
import "../QnA.css"

function BookPdf() {

    const [data, setData] = useState({
        infos: [
            {
                id:1,
                title: '5 things that a tech sources need to be strong.',
                Author: 'Ashfaq',
                img: '', //use it when we fetching it from the server.
                vote: '3',
                views: '40',
              comments: '23'
            },
            {
                id:2,
                title: '5 things that a tech sources need to be strong.',
                Author: 'Ashfaq',
                img: '', //use it when we fetching it from the server.
                vote: '5',
                views: '20',
              comments: '63'
            },
            {
                id:3,
                title: '5 things that a tech sources need to be strong.',
                Author: 'Ashfaq',
                img: '', //use it when we fetching it from the server.
                vote: '13',
                views: '60',
              comments: '53'
            },
            {
                id:4,
                title: '5 things that a tech sources need to be strong.',
                Author: 'Ashfaq',
                img: '', //use it when we fetching it from the server.
                vote: '19',
                views: '88',
              comments: '66'
            }
        ]
    })


    //logic: Here, we will use state to fetch the popular posts to display.
    return (
        <div className="BookPdf">
            <div className="bpHead">
                    <LibraryBooksIcon fontSize="medium" style={{color: '#545454'}} />
                    <h3>Books/PDFs</h3>
            </div>

            <div>
                <div className="body">
                {
                    data.infos.map((info)=>{
                        return(
                            <div className="body1">
                                <div className="bgTitle">
                        <p style={{fontWeight: 'bold'}}>{info.title}</p>
                        <p style={{fontSize: '13px'}}>Contributer: {info.Author}</p>
                                </div>
                            <div>
                                <img src={bp} alt="image"/> 
                            </div>
                            <div className="btmQues">
                            <div className="btmQues1">
                                <div className="cardIcons">
                                    <CommentOutlinedIcon fontSize="small" style={{color: '#707070', margin: '0px 5px'}} />
                                    <p>{info.comments}</p>
                                </div>
                                <div className="cardIcons">
                                    <VisibilityOutlinedIcon fontSize="small" style={{color: '#707070', margin: '0px 10px'}}/>
                                    <p>{info.views}</p>
                                </div>
                                    <ShareIcon fontSize="small"  style={{color: '#707070', margin: '0px 10px'}}/>
                                    
                            </div>
                            <div className="btmQues2">
                                    <ArrowDropUpIcon fontSize="large" style={{color: '#797979'}}/>
                                    <p style={{color: '#B0343C', fontWeight: 'bold'}}>
                                        {info.vote}
                                    </p>
                                    <ArrowDropDownIcon fontSize="large" style={{color: '#797979'}}/>
                            </div>
                        </div>
                            </div>
                        );
                    })
                }
                </div>
            </div>

        </div>
    )
}


export default BookPdf
