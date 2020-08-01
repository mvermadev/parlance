import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import AttachmentIcon from '@material-ui/icons/Attachment';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import '../Answers.css'

class ReplyCompo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            reply: "",
            dis: true,
            display: "block"
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

    render() {
            
        if( this.props.login === true) {   
            return(
            <div className="reply-container" style={{display: this.state.display}}>
            <form noValidate autoComplete="off">
            
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
                        
                        <Button size="small" variant="contained" className="Submit-reply"
                        disabled={this.state.dis}
                        onClick={this.submitReply}
                        >Reply</Button>
                    </div>            
            </form>
            </div>
            );
        }
        else {
            return(
                <div align="center">You must be logged in to reply to an answer.</div>
            );
        }
    }
}

export default ReplyCompo;