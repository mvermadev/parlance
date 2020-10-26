import React from 'react';
import {
    Dialog, DialogContent, DialogActions, Button, DialogTitle,
    Grid, InputLabel, NativeSelect
} from '@material-ui/core';
import Swal from 'sweetalert2'


function MoveToLib(props) {
    const [open, setOpen] = React.useState(props.open);

    const [state, setState] = React.useState({
        uploaded_by: localStorage.id,
        category: '',
        sub_category: props.sub[0],
        content: props.content,
        title: props.title
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    };

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(state)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.token);
        var formdata = new FormData();
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
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="move-popup" fullWidth>
                <DialogTitle>Move Post To Library
                    <Button style={{ float: 'right', marginRight: '-24px' }} onClick={handleClose}><span class="fa fa-times"></span></Button>
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="category" placeholder="Select from options" required>Category</InputLabel>
                                <NativeSelect id="category" name="category" required={true}
                                    value={state.category} onChange={handleChange} fullWidth>
                                    <option value="" disabled>Select Category</option>
                                    <option value="Articles">Articles</option>
                                    <option value="BookPdfs">BookPdfs</option>
                                    <option value="Videos">Videos</option>
                                </NativeSelect>
                            </Grid>
                        </Grid>
                        <DialogActions>
                            <Button style={{ background: 'white' }} variant="outlined" onClick={handleClose}>Cancel</Button>
                            <Button style={{ background: '#b0343c', color: 'white' }} type="submit" variant="outlined">Submit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default MoveToLib;