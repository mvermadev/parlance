import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import AttachmentIcon from '@material-ui/icons/Attachment';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';


class Answer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            answer: "",
            dis: true,
            display: "block"
          };

    }

    handleAnswer = e => {

        if ( e.target.value === "" ) {
            this.setState({
                dis: true,
                answer: ""
              });
        }
        else {
        this.setState({
          answer: e.target.value,
          dis: false
        });
        }
    };
    
      submitAnswer = e => {

        //database storing code will come here
    
        this.setState({
          answer: "",
          dis: true
        });
      };

      cancelAnswer = e => {
        
        //hide the container

        this.setState({
            display: "none"
          });
      }

    render() {
            
        if( this.props.login === true) {   
            return(
            <div className="answer-container" style={{display: this.state.display}}>
            <form noValidate autoComplete="off">
                <TextField fullWidth multiline value={this.state.reply}
                onChange={this.handleAnswer}
                rowsMax={100} className="Answer-field" rows={2}
                label="Your Answer" placeholder="Type Your Answer Here" 
                variant="outlined" />

                <div align="right">
                <input accept="file/*" id="attachment-file" type="file" />
                    <label htmlFor="attachment-file">
                        <IconButton className="file-attach" aria-label="attachment" component="span">
                        <AttachmentIcon />        
                        </IconButton>
                    </label>


                <input accept="image/*" id="image-file" type="file" />
                    <label htmlFor="image-file">
                        <IconButton className="image-attach" aria-label="upload picture" component="span">
                            <CameraAltIcon />        
                        </IconButton>
                    </label>
                </div>
                    <div align="right" style={{ paddingTop: '80px' }} className="answer-container-buttons">
                        <Button size="small" variant="contained" className="Cancel-answer"
                        onClick={this.cancelAnswer} >Cancel</Button>
                        <Button size="small" variant="contained" className="Submit-answer"
                        disabled={this.state.dis}
                        onClick={this.submitAnswer}
                        >Answer</Button>
                    </div>            
            </form>
            </div>
            );
        }
        else {
            return(
                <div align="center">You must be logged in to answer a question.</div>
            );
        }
    }
}

export default Answer;