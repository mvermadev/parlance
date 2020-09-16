import React, { Component, useEffect } from 'react';
import { Avatar, Button, Menu, MenuItem, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AttachmentIcon from '@material-ui/icons/Attachment';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { fetchProfile } from '../../../../redux/dataFetchers/ProfileApi'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Swal from 'sweetalert2'
import '../Answers.css';

var cId = '';
var cName = '';



class ReplyCompo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            reply: "",
            dis: true,
            display: "block",
            commentId: ''
          };
    }

    handleReply = e => {

        if ( e.target.value === "" ) {
            this.setState({
                dis: true,
                reply: ""
              });
        }
        else {
        this.setState({
          reply: e.target.value,
          dis: false
        });
        }
    };
    
      submitReply = e => {

        //database storing code will come here
    
        this.setState({
          reply: "",
          dis: true
        });
      };

      cancelReply = e => {
        
        //hide the container

        this.setState({
            display: "none"
          });
      }

      sendComment = e=> {

        e.preventDefault();
        if(!localStorage.getItem('token'))
        {
          Swal.fire({
            icon: 'error',
            title: 'Please Login/Signup first.'
          })
        }
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        
        var urlencoded = new URLSearchParams();
        urlencoded.append("text", this.state.reply);
        urlencoded.append("name", cName);
        urlencoded.append("avatar", "def");
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };
        
        var url = `https://recmonk.herokuapp.com/posts/comment/${cId}`;

        fetch(url, requestOptions)
          .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error("Error " + response.status + ": " + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })  
        .then(response => response.json())
          .then(result => {
            console.log(result);
            Swal.fire({
                icon: 'success',
                title: 'Done...',
                text: result.message
              })
          })
          .catch(error => {
            console.log('error', error)
            console.log(cName);
            
          });
      }

      componentDidMount(){
        console.log('id: ', this.props.cardId)
        cId = this.props.cardId;
        console.log('idByVar: ', cId);
        console.log("User name: ", this.props.info.info.name);
        cName = this.props.info.info.name
        console.log('nameByVar: ', cName);
      }

    render() {
           
        if( this.props.login === true || localStorage.getItem('token')) {   
            return(
            <div className="reply-container" style={{display: this.state.display}}>
              <div>
                <form noValidate autoComplete="off" onSubmit={this.sendComment}>
                
                    <TextField fullWidth multiline value={this.state.reply}
                    onChange={this.handleReply} InputProps={{
                        endAdornment:
                        <InputAdornment position="end">
                            <input accept="file/*" id="reply-attachment-file" type="file" />
                        <label htmlFor="reply-attachment-file">
                            <IconButton className="reply-file-attach" aria-label="attachment" component="span">
                            <AttachmentIcon />        
                            </IconButton>
                        </label>
                        </InputAdornment>
                      }}
                    rowsMax={100} className="reply-field" rows={4}
                    label="Your Reply" placeholder="Type Your Reply Here" 
                    variant="outlined" />

                        <div align="right" style={{ paddingTop: '40px' }} className="reply-container-buttons">
                            <Button size="small" variant="contained" className="Cancel-reply"
                            onClick={this.cancelReply}
                            >Cancel</Button>
                            
                            <Button type="submit" size="small" variant="contained" className="Submit-reply"
                            disabled={this.state.dis}
                            >Reply</Button>
                        </div>            
                </form>
                </div>
              
          </div>
            );
        }
        else {
          return(
            <div align="center">
              <p style={{color: '#333333'}}>You must be logged in to reply to an answer.</p>
              </div>
            );
        }
    }
}

const mapStateToProps = state => ({
  info: state.info
})

const mapDispatchToProps = (dispatch) => ({
  fetchProfile: () => {dispatch(fetchProfile())}
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReplyCompo));