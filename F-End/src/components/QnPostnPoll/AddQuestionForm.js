import React, { Component } from 'react';
import { Grid, InputBase, Typography, InputLabel, NativeSelect, Button } from '@material-ui/core';
import AttachmentRoundedIcon from '@material-ui/icons/AttachmentRounded';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';
import { fetchProfile } from '../../redux/dataFetchers/ProfileApi'
import Swal from 'sweetalert2'
import { connect } from 'react-redux';
import Search from './Search'

function LoadAddQuestion(props) {

    const [state, setState] = React.useState({
        name: props.data,
        category: '',
        text: '',
        isQuestion: true
    });

    const [file, setFile] = React.useState(null);

    const handleInput = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    };

    const handleFileInput = (event) => {
        setFile(event.target.files[0])
    };

    const handleCancel = () => {
        window.location.href = "/"
    };

    const sendPost = e => {
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.token);
        var formdata = new FormData();
        if (file != null)
            formdata.append("file", file);
        
        formdata.append("content", JSON.stringify(state));

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://recmonk.herokuapp.com/posts", requestOptions)
            .then(response => {
                if (response.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Question Added!'
                    })
                    return response;
                }
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        setFile(null)
        setState({
            name: '',
            category: '',
            text: '',
            isQuestion: true
        })
    }

    return (
        <form className="post-form" onSubmit={sendPost}>
            <Grid container>
                <Grid item xs={12} style={{ background: 'white', padding: '15px' }}>
                    <InputBase
                        fullWidth
                        multiline
                        rowsMax={5}
                        placeholder="Type your question title"
                        required
                        name="name"
                        value={state.name}
                        onChange={handleInput}
                    />
                </Grid>

                <Search title={state.name} />

                <Grid container className="question-cat-container">
                    <Grid item xs={6} sm={4} md={3} className="cat-title">
                        <Typography>Select Category</Typography>
                    </Grid>
                    <Grid xs={6} sm={4} md={3} className="cat-chooser">
                        <InputLabel htmlFor="Category" />
                        <NativeSelect id="Category" name="category" className="cat-chooser-select" required={true} fullWidth
                            value={state.category} onChange={handleInput} >
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

                <Grid xs={12} style={{ background: 'white', padding: '15px' }}>
                    <InputBase
                        placeholder="Explanation (Optional)"
                        multiline
                        fullWidth
                        rowsMax={20}
                        rows={5}
                        name="text"
                        value={state.text} onChange={handleInput}
                        endAdornment={
                            <InputAdornment position="end">
                                <input style={{ display: 'none' }} name="file" id="question-attachment-file" onChange={handleFileInput} type="file" />
                                <label htmlFor="question-attachment-file">
                                    <IconButton className="question-file-attach" aria-label="attachment" component="p">
                                        {file != null ? <p>{file.name}</p> : <p></p>} <AttachmentRoundedIcon />
                                    </IconButton>
                                </label>
                            </InputAdornment>
                        }
                    />
                </Grid>

                <Grid item xs={12} style={{ background: '#f2f2f2' }}>
                    <br />
                </Grid>
                <Grid item xs={12} align="right">
                    <Button type="cancel" onClick={handleCancel} style={{ background: '#fff', marginRight: '10px' }}>Cancel</Button>
                    <Button type="submit" style={{ background: '#b32800', color: '#fff', marginRight: '10px' }}>Add</Button>
                </Grid>
            </Grid>
        </form>
    );
}

class AddQuestion extends Component {

    componentDidMount() {
        this.props.fetchProfile()
    }

    render() {
        return (
            <div>
                <LoadAddQuestion data={this.props.data} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    info: state.info.info
})

const mapDispatchToProps = (dispatch) => ({
    fetchProfile: () => { dispatch(fetchProfile()) }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddQuestion));