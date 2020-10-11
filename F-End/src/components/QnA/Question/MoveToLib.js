import React from 'react';
import {
    Dialog, DialogContent, DialogActions, Button, DialogTitle,
    Grid, InputLabel, NativeSelect, ListItemText, MenuItem, ListItemIcon
} from '@material-ui/core';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import Swal from 'sweetalert2'


function MoveToLib() {
    const [open, setOpen] = React.useState(false);

    const [state, setState] = React.useState({
        category: ''
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    };

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
    }

    return (
        <div>
            <MenuItem onClick={handleOpen}>
                <ListItemIcon>
                    <MoveToInboxIcon style={{ color: '#707070', margin: '0px 10px' }} />
                </ListItemIcon>
                <ListItemText primary="Move" />
            </MenuItem>
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