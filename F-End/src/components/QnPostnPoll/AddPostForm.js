import React from 'react';
import { Grid, InputBase, Typography, InputLabel, NativeSelect, Button, Dialog, DialogContent, DialogActions, DialogTitle } from '@material-ui/core';
import AttachmentRoundedIcon from '@material-ui/icons/AttachmentRounded';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Swal from 'sweetalert2'

function AddPost() {

    const [open, setOpen] = React.useState(false);

    const [state, setState] = React.useState({
        uploaded_by: localStorage.id,
        category: '',
        sub_category: '',
        content: '',
        title: ''
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

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = (e) => {
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

        handleClose();

        fetch("https://recmonk.herokuapp.com/library", requestOptions)
            .then(response => {
                if (response.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Content Added!'
                    })
                    return response;
                }
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        setFile(null)
        setState({
            uploaded_by: localStorage.id,
            category: '',
            sub_category: '',
            content: '',
            title: ''
        })
    }

    return (
        <div align="center">
            <Button variant="contained" color="primary" onClick={handleOpen}>Add Content</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="library-popup" fullWidth>
                <DialogTitle>Add Content
                    <Button style={{ float: 'right', marginRight: '-24px' }} onClick={handleClose}><span class="fa fa-times"></span></Button>
                </DialogTitle>
                <DialogContent>
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
                                    <Typography>Select Type</Typography>
                                </Grid>
                                <Grid xs={6} sm={5} md={3} className="cat-chooser">
                                    <InputLabel htmlFor="category" />
                                    <NativeSelect id="category" name="category" className="cat-chooser-select" required={true} fullWidth
                                        value={state.category} onChange={handleInput} >
                                        <option value="" disabled selected>Type</option>
                                        <option value="Video">Video</option>
                                        <option value="Articles">Articles</option>
                                        <option value="BookPdfs">Book/Pdf</option>
                                    </NativeSelect>
                                </Grid>
                            </Grid>

                            <Grid container className="post-cat-container">
                                <Grid item xs={6} sm={5} md={5} className="cat-title">
                                    <Typography>Select Post Category</Typography>
                                </Grid>
                                <Grid xs={6} sm={5} md={4} className="cat-chooser">
                                    <InputLabel htmlFor="sub_category" />
                                    <NativeSelect id="sub_category" name="sub_category" className="cat-chooser-select" required={true} fullWidth
                                        value={state.sub_category} onChange={handleInput} >
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
                                    name="content"
                                    value={state.content} onChange={handleInput}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <input style={{ display: 'none' }} name="file" id="post-attachment-file" onChange={handleFileInput} type="file" />
                                            <label htmlFor="post-attachment-file">
                                                <IconButton className="post-file-attach" aria-label="attachment" component="p">
                                                    {file != null ? <p>{file.name}</p> : <p></p>} <AttachmentRoundedIcon />
                                                </IconButton>
                                            </label>
                                        </InputAdornment>
                                    }
                                />
                            </Grid>

                            <Grid item xs={12} align="right">
                                <DialogActions>
                                    <Button style={{ background: 'white' }} variant="outlined" onClick={handleClose}>Cancel</Button>
                                    <Button style={{ background: '#b0343c', color: 'white' }} type="submit" variant="outlined">Add</Button>
                                </DialogActions>
                            </Grid>
                        </Grid>
                    </form>
                    </DialogContent>
            </Dialog>
            </div>
    );
}


export default AddPost;