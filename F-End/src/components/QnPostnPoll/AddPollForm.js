import React from 'react';
import { Grid, InputBase, Typography, NativeSelect, InputLabel, Button, TextField } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


function AddPoll() {

    const [state, setState] = React.useState({
        pollTitle: '',
        pollCategory: '',
        pollExplanation: '',
        option_array: ["Option-0"]
    });
    
    const handleInput = (event) => {
        setState({...state,
            [event.target.name]: event.target.value
        })
    };
    
    const handleSubmit = () => {
        alert("Curent State is : " + JSON.stringify(state));
    }

    const appendOption = () => {
        var newInput = `Option-${state.option_array.length}`;
        console.log(state.option_array.concat([newInput]));
        setState(prevState => ({
          option_array: prevState.option_array.concat([newInput])
        }));
    }

    return(
        <form onSubmit={handleSubmit}>
        <Grid container>
            <Grid item xs={12} style={{background: 'white', padding: '15px'}}> 
                <InputBase
                    fullWidth
                    multiline
                    rowsMax={5}
                    placeholder="Type your poll title"
                    required
                    name="pollTitle"
                    value={state.pollTitle}
                    onChange={handleInput}
                />
            </Grid>

            <Grid container className="poll-cat-container">
                <Grid item xs={6} sm={4} md={2} className="cat-title">
                    <Typography>Select Category</Typography>
                </Grid>
                <Grid xs={6} sm={4} md={2} className="cat-chooser">
                <InputLabel htmlFor="Category" />
                    <NativeSelect id="Category" name="pollCategory" className="cat-chooser-select" required={true} fullWidth
                        value={state.pollCategory}  onChange={handleInput} >
                        <option value="" disabled selected>Category</option>
                        <option value="Career">Career</option>
                        <option value="Engagement">Engagement</option>
                        <option value="HRTech">HRTech</option>
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
                    name="pollExplanation"
                    value={state.pollExplanation}  onChange={handleInput}
                />
            </Grid>
            <Grid item xs={12} style={{background: 'white', padding: '15px'}}> 
                <Typography>Add Polling Options</Typography>
                {state.option_array.map((input) => (
                <Grid xs={12} container spacing={2}>
                    <Grid xs={12} item>
                        <TextField id={input} label="Type your option here" name={input}
                        fullwidth size="small" required></TextField>
                    
                        <Fab style={{marginLeft: '20px', marginTop: '10px'}} color="primary" size="small" onClick={appendOption} aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Grid>
                </Grid>
                ))}
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

export default AddPoll;