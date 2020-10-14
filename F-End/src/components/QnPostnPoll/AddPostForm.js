import React from 'react';
import { Grid, InputBase, Typography, InputLabel, NativeSelect, Button } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

function AddPost(props) {

    const [state, setState] = React.useState({
        uploaded_by: localStorage.id,
        video: '',
        category: '',
        sub_category: '',
        content: '',
        title: ''
    });

    const handleInput = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(state);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://recmonk.herokuapp.com/library", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }



    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={12} style={{ background: 'white', padding: '15px' }}>
                    <InputBase
                        fullWidth
                        multiline
                        rowsMax={5}
                        placeholder="Type your post title"
                        required
                        name="title"
                        value={state.title}
                        onChange={handleInput}
                    />
                </Grid>

                <Grid container className="post-cat-container">
                    <Grid item xs={6} sm={5} md={3} className="cat-title">
                        <Typography>Select Category</Typography>
                    </Grid>
                    <Grid xs={6} sm={5} md={3} className="cat-chooser">
                        <InputLabel htmlFor="category" />
                        <NativeSelect id="category" name="category" className="cat-chooser-select" required={true} fullWidth
                            value={state.category} onChange={handleInput} >
                            <option value="" disabled selected>Category</option>
                            <option value="Video">Video</option>
                            <option value="Articles">Articles</option>
                            <option value="BookPdfs">Book/Pdf</option>
                        </NativeSelect>
                    </Grid>
                </Grid>

                <Grid container className="post-cat-container">
                    <Grid item xs={6} sm={5} md={3} className="cat-title">
                        <Typography>Select Post Category</Typography>
                    </Grid>
                    <Grid xs={6} sm={5} md={3} className="cat-chooser">
                    <InputLabel htmlFor="sub_ategory" />
                    <NativeSelect id="sub_ategory" name="sub_category" className="cat-chooser-select" required={true} fullWidth
                        value={state.sub_category}  onChange={handleInput} >
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
                        placeholder="Paste your Video/Article/Book/Pdf link here"
                        multiline
                        fullWidth
                        rowsMax={20}
                        rows={5}
                        required
                        name="content"
                        value={state.content} onChange={handleInput}
                        endAdornment={
                            <InputAdornment position="end">
                                <input style={{ display: 'none' }} accept="file/*" id="post-attachment-file" type="file" />
                                <label htmlFor="post-attachment-file">
                                    <IconButton className="post-file-attach" aria-label="attachment" component="span">
                                        <CameraAltIcon />
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
                    <Button type="cancel" style={{ background: '#fff', marginRight: '10px' }}>Cancel</Button>
                    <Button type="submit" style={{ background: '#b32800', color: '#fff', marginRight: '10px' }}>Add</Button>
                </Grid>
            </Grid>
        </form>
    );
}


export default AddPost;