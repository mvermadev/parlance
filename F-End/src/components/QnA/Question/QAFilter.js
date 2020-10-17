import React, { useState } from 'react'
import TuneIcon from '@material-ui/icons/Tune';
import { InputLabel, NativeSelect, Grid, Typography } from '@material-ui/core';
import QuesCard from './QuesCard';
import '../../QnPostnPoll/posting.css'

function QAFilter() {

    const [click, setClick] = useState('false');

    const [state, setState] = React.useState({
        cat: "All"
    });

    const handleInput = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    };

    const showList = () => {
        setClick('true');
    }
    const hideList = () => {
        setClick('false')
    }

    const displayItem = (e) => {
        return (
            <div className="btmFilter">
                <Grid container className="filter-cat-container">
                    <Grid item xs={4} sm={4} md={3} className="cat-title">
                        <Typography>Category</Typography>
                    </Grid>
                    <Grid xs={5} sm={4} md={4} className="cat-chooser">
                        <InputLabel htmlFor="cat" />
                        <NativeSelect id="cat" name="cat" className="cat-chooser-select" required={true}
                            value={state.cat} onChange={handleInput} >
                            <option value="All">All</option>
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
            </div>
        )
    }

    return (
        <div>
            <div className="Filter" container>
                <div className="topFilter">
                    <p>My Feed</p>
                    <TuneIcon size="small" onClick={click == 'false' ? showList : hideList} style={{ color: '#000', cursor: 'pointer' }} />
                </div>
                {click == 'true' ? displayItem() : hideList}
            </div>
            <div>
                <QuesCard cat={state.cat} />
            </div>
        </div>
    )
}

export default QAFilter
