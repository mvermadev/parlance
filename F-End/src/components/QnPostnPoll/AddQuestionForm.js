import React, { useEffect, Component } from 'react';
import { Grid, InputBase, Typography, FormControlLabel, InputLabel, NativeSelect, Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import { withRouter } from 'react-router-dom';
import {fetchProfile} from '../../redux/dataFetchers/ProfileApi'
import Swal from 'sweetalert2'
import { connect } from 'react-redux';

function LoadAddQuestion(props) {
    
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [state, setState] = React.useState({
        title: props.data,
        category: '',
        explanation: '',
        advance: 'none',
        anonymous: false,
        private: false,
        email: false
    });

    const handleInput = (event) => {
        setState({...state,
            [event.target.name]: event.target.value
        })
    };

    const handleAdvance = () => {
        setState({
            advance: 'block'
        })
    };

    const handleSubmit = () => {
        alert("Curent State is : " + JSON.stringify(state));
    }

    const sendPost = e=>{
        e.preventDefault();
        
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("text", state.title);
        urlencoded.append("name", props.name);
        urlencoded.append("avatar", "abc");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };

        fetch("https://recmonk.herokuapp.com/posts", requestOptions)
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
        .catch(error => console.log('error', error));
    }

    useEffect(()=>{
        console.log("name: ", props.name)
    }, [])

    return(
        <form onSubmit={sendPost}>
        <Grid container>
            <Grid item xs={12} style={{background: 'white', padding: '15px'}}> 
                <InputBase
                    fullWidth
                    multiline
                    rowsMax={5}
                    placeholder="Type your question title"
                    required
                    name="title"
                    value={state.title}
                    onChange={handleInput}
                />
            </Grid>

            <Grid item xs={12}>
                <Accordion style={{background: '#f2f2f2', boxShadow: 'none'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel-content"
                    id="panel-header"
                    >
                        <Typography>3 Similar Questions Found</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Similar Questions Will Load Here.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>

            <Grid container className="question-cat-container">
                <Grid item xs={6} sm={4} md={2} className="cat-title">
                    <Typography>Select Category</Typography>
                </Grid>
                <Grid xs={6} sm={4} md={2} className="cat-chooser">
                <InputLabel htmlFor="Category" />
                    <NativeSelect id="Category" name="category" className="cat-chooser-select" required={true} fullWidth
                        value={state.category}  onChange={handleInput} >
                        <option value="" disabled selected>Category</option>
                        <option value="Career">Career</option>
                        <option value="Engagement">Engagement</option>
                        <optgroup label="HRTech">
                            <option value="Automation">Automation</option>
                            <option value="HR Analytics">HR Analytics</option>
                            <option value="HRMS/ATS">HRMS/ATS</option>
                        </optgroup>
                            <option value="Interviewing">Interviewing</option>
                            <option value="Job Req">Job Req</option>
                        <optgroup label="Marketing">
                            <option value="Branding">Branding</option>
                            <option value="Mail/SMS">Mail/SMS</option>
                            <option value="Story Telling">Story Telling</option>
                        </optgroup>
                            <option value="Others">Others</option>
                        <optgroup label="Recruiting">
                            <option value="Non-IT Hiring">Non-IT Hiring</option>
                            <option value="Tech Hiring">Tech Hiring</option>
                        </optgroup>
                            <option value="Screening">Screening</option>
                            <option value="Sourcing">Sourcing</option>
                            <option value="Startup">Startup</option>
                    </NativeSelect>
                </Grid>
            </Grid>

            <Grid xs={12} style={{background: 'white', padding: '15px'}}>
                <InputBase
                    placeholder="Explanation (Optional)"
                    multiline
                    fullWidth
                    rowsMax={20}
                    rows={5}
                    name="explanation"
                    value={state.explanation}  onChange={handleInput}
                    endAdornment={
                            <InputAdornment position="end">
                                <input accept="file/*" id="question-attachment-file" type="file" />
                                <label htmlFor="question-attachment-file">
                                    <IconButton className="question-file-attach" aria-label="attachment" component="span">
                                        <CameraAltIcon />        
                                    </IconButton>
                                </label>
                            </InputAdornment>
                      }
                />
            </Grid>
            
            <Grid item xs={12} style={{background: 'white', padding: '15px'}}> 
                <Button onClick={handleAdvance}>Advance option</Button>
                <div style={{ display: state.advance}}>
                    <FormControlLabel
                        control={<Checkbox name="anonymous" value={state.anonymous} onChange={handleInput} color="default"  />}
                        label="Ask Anonymously"
                    />
                    <br />
                    <FormControlLabel
                        control={<Checkbox name="private" value={state.private} onChange={handleInput} color="default" />}
                        label="This question is a private question?"
                    />
                    <br />
                    <FormControlLabel
                        control={<Checkbox name="email" value={state.email} onChange={handleInput} color="default" />}
                        label="Get notification by email when someone answers this question"
                    />
                </div>
            </Grid>
            <Grid item xs={12} style={{background: '#f2f2f2'}}>
                <br/>
            </Grid>
            <Grid item xs={12} align="right">
                <Button type="cancel" style={{background: '#fff', marginRight: '10px'}}>Cancel</Button>
                <Button type="submit" style={{background: '#b32800', color: '#fff', marginRight: '10px'}}>Add</Button>
            </Grid>
        </Grid>
        </form>
    );
}

class AddQuestion extends Component {
    
    componentDidMount(){
        this.props.fetchProfile()
        console.log('className: ', this.props.info.info.name)
    }

    render() {
        return (
            <div>
                <LoadAddQuestion name={this.props.info.info.name} data={this.props.data}/>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    info: state.info
  })
  
  const mapDispatchToProps = (dispatch) => ({
    fetchProfile: () => {dispatch(fetchProfile())}
  });
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddQuestion));