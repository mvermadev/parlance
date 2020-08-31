import React from 'react';
import { Grid, InputBase, Typography, FormControlLabel, InputLabel, NativeSelect, Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';

function AddQuestion() {
    
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [state, setState] = React.useState({
        title: '',
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

    return(
        <form onSubmit={handleSubmit}>
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

export default AddQuestion;