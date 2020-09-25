import React from 'react';
import { Grid, InputBase, Typography, InputLabel, NativeSelect, Button } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

function AddPost(props) {

    const [state, setState] = React.useState({
        postTitle: '',
        postCategory: '',
        postExplanation: '',
    });

    const handleInput = (event) => {
        setState({...state,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = () => {
        alert("Curent State is : " + JSON.stringify(state));
    }

   

    return(
        <form className="post-form" onSubmit={handleSubmit}>
        <Grid container>
            <Grid item xs={12} style={{background: 'white', padding: '15px'}}> 
                <InputBase
                    fullWidth
                    multiline
                    rowsMax={5}
                    placeholder="Type your post title"
                    required
                    name="postTitle"
                    value={state.postTitle}
                    onChange={handleInput}
                />
            </Grid>

            <Grid container className="post-cat-container">
                <Grid item xs={6} sm={4} md={2} className="cat-title">
                    <Typography>Select Category</Typography>
                </Grid>
                <Grid xs={6} sm={4} md={2} className="cat-chooser">
                <InputLabel htmlFor="Category" />
                    <NativeSelect id="Category" name="postCategory" className="cat-chooser-select" required={true} fullWidth
                        value={state.postCategory}  onChange={handleInput} >
                        <option value="" disabled selected>Category</option>
                        <option value="Career">Career</option>
                        <option value="Engagement">Engagement</option>
                        <option value="HRTech">HRTech</option>
                    </NativeSelect>
                </Grid>
            </Grid>

            <Grid xs={12} style={{background: 'white', padding: '15px'}}>
                <InputBase
                    placeholder="O Monk, share your wisdom to the seekers !"
                    multiline
                    fullWidth
                    rowsMax={20}
                    rows={5}
                    required
                    name="postExplanation"
                    value={state.postExplanation}  onChange={handleInput}
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


export default AddPost;