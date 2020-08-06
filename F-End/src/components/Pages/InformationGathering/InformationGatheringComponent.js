import React from 'react';
import { Dialog, DialogContent, DialogContentText, DialogActions, Button, DialogTitle,
            TextField, Grid, InputLabel, NativeSelect } from '@material-ui/core';


function InformationGathering() {
    const [open, setOpen] = React.useState(false);
    const [hide, setHide] = React.useState({
        designationDisplay: 'none',
        designation: '',
        check: false
    });
    const [show, setShow] = React.useState({
        industryDisplay: 'none',
        industry: '',
        check: false
    });
    const [state, setState] = React.useState({
        otherdesignation: '',
        company: '',
        experience: '',
        location: '',
        otherindustry: ''
    });

    const handleDesignation = (event) => {
        if(event.target.value === 'Others') {
            setHide({
                designationDisplay: 'block',
                check: true,
                [event.target.name]: event.target.value,
            });
        }
        else {
            setHide({
                designationDisplay: 'none',
                check: false,
                [event.target.name]: event.target.value
            });
        }
    }

    const handleIndustry = (event) => {
        if(event.target.value === 'Others') {
            setShow({
                industryDisplay: 'block',
                check: true,
                [event.target.name]: event.target.value
            });
        }
        else {
            setShow({
                industryDisplay: 'none',
                check: false,
                [event.target.name]: event.target.value
            });
        }
    }

    const handleChange = (event) => {
        setState({...state,
            [event.target.name]: event.target.value
        })
    };

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = () => {
        handleClose();
        alert("Curent State is : " + JSON.stringify(state));
    }

    return(
        <div>
            <Button variant="outlined" onClick={handleOpen} >Information Gathering Form</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="information-gathering-popup" fullWidth>
                <DialogTitle>Complete Profile
                    <Button style={{float: 'right', marginRight: '-24px'}} onClick={handleClose}><span class="fa fa-times"></span></Button>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Tell Us A Bit About Yourself
                    </DialogContentText>
                    <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <InputLabel htmlFor="designation" placeholder="Select from options" required>Designation</InputLabel>
                                <NativeSelect id="designation" name="designation" required={true}
                                    value={hide.designation} onChange={handleDesignation} fullWidth>
                                    <option value="" disabled>Select from options</option>
                                    <option value="Consultant">Consultant</option>
                                    <option value="Senior Recruiter/TA/HR">Senior Recruiter/TA/HR</option>
                                    <option value="Lead Recruiter/TA/HR">Lead Recruiter/TA/HR</option>
                                    <option value="Manager Recruiter/TA/HR">Manager Recruiter/TA/HR</option>
                                    <option value="VP Recruiter/TA/HR">VP Recruiter/TA/HR</option>
                                    <option value="Director">Director</option>
                                    <option value="CEO">CEO</option>
                                    <option value="Others">Others</option>
                                </NativeSelect>
                        </Grid>
                        <Grid item xs={12} style={{ display: hide.designationDisplay}}>
                            <TextField id="other-designation" onChange={handleChange} label="Other Designation" name="otherdesignation"
                                value={state.otherdesignation} fullWidth required={hide.check}></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="company-name" onChange={handleChange} label="Company Name" name="company"
                                value={state.company} fullWidth required={true}></TextField>
                        </Grid>
                        <Grid item xs={12}>
                        <InputLabel htmlFor="industry" required>Industry</InputLabel>
                            <NativeSelect id="industry" label="Industry" name="industry" required={true}
                                value={show.industry} onChange={handleIndustry} select fullWidth>
                                    <option value="" disabled>Select from options</option>
                                    <option value="Staffing">Staffing</option>
                                    <option value="IT Services">IT Services</option>
                                    <option value="Internet">Internet</option>
                                    <option value="BPO/KPO">BPO/KPO</option>
                                    <option value="BFSI/Investment Bank">BFSI/Investment Bank</option>
                                    <option value="Embedded">Embedded</option>
                                    <option value="Others">Others</option>
                            </NativeSelect>
                        </Grid>
                        <Grid item xs={12} style={{ display: show.industryDisplay}}>
                            <TextField id="other-industry" onChange={handleChange} label="Other Industry" name="otherindustry"
                                value={state.otherindustry} fullWidth required={show.check}></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type="number" id="experience" name="experience" required={true}
                                value={state.experience} onChange={handleChange}
                                InputProps={{ inputProps: { min: 0, max: 50 } }}
                                label="Experience (in years)" fullWidth>
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="location" label="Location" name="location" required={true}
                                value={state.location} onChange={handleChange} fullWidth>
                            </TextField>
                        </Grid>
                    </Grid>
                    <br /><br />
                    <DialogActions>
                        <Button style={{background: 'white'}} variant="outlined" onClick={handleClose}>Cancel</Button>
                        <Button style={{background: '#b0343c', color: 'white'}} type="submit" variant="outlined">Submit</Button>
                    </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default InformationGathering;