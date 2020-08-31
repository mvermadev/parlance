import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import './AppInfo.css'

function AboutUs() {
    return(
        <div className="AboutUs" style={{ background: 'white', padding: '25px' }}>
            <Grid container spacing={2}>
                <Grid align="center" item xs={12}>
                    <h2><span class="fa fa-bullseye"> </span> Our Mission is to empower recruiters &
    equip them with the latest recruiting trends.</h2>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                    At RecruitingMonk we strongly believe, the only way to grow in life is continuous learning. And in the world of Google, its just a search away, but as a recruiter if you search content for learning you seem to be lost in the ocean of information.
                    </Typography>
                    <br/>
                    <Typography>
                    We handpick Monks (Recruiting Experts), who will help you solve day-day recruiting challenges. Basically RecruitingMonk will strive to be that one point platform which you could turn to whenever you’re stuck in your recruiting journey. Learn from the wisdom of monks.
                    </Typography>
                    <br/>
                    <Typography>
                    The founding team strongly believes, recruiters can be better equipped with a lot of useful HR Tech tools. We will look forward to embedding or bringing all the free tools in the HRTech space, so recruiters can juggle around with new tech stuff & try to improve their recruiting efficacy.
                    </Typography>
                    <br/>
                </Grid>
            </Grid>
        </div>
    );
}

export default AboutUs;