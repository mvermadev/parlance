import React from 'react';
import { Grid, Link } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './community.css';
import '../Page.css';

function Monks() {
    return(
        <Grid container style={{ marginBottom: '20px'}} >
            <Grid item>
                <Avatar style={{ width:'60px', height:'60px'}} src="" />
            </Grid>
            <Grid item style={{ marginTop: '-5px', marginLeft: '20px'}}>
                <Typography variant="h6">Monk Username<span><img alt="Verified" title="Verified" src="assets/images/verified.png" /></span></Typography>
                <Typography variant="caption">Engagement Score: 100</Typography>
            </Grid>
        </Grid>
    );
}

function Users() {
    return(
        <Grid container style={{ marginBottom: '20px'}} >
            <Grid item>
                <Avatar style={{ width:'60px', height:'60px'}} src="" />
            </Grid>
            <Grid item style={{ marginTop: '-5px', marginLeft: '20px' }}>
                <Typography variant="h6">Monk Username</Typography>
                <Typography variant="caption">Engagement Score: 45</Typography>
            </Grid>
        </Grid>
    );
}

function TabPanel(props) {
    const { children, value, index } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`community-tabpanel-${index}`}
        aria-labelledby={`community-tab-${index}`}
        className="community-tabpanel"
      >
        {value === index && (
          <div>{children}</div>
        )}
      </div>
    );
}

function Community() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return(
        <div className="Community" style={{paddingBottom: '50px'}}>
            <Tabs value={value} onChange={handleChange} aria-label="community-tabs" className="community-tabs" >
                <Tab label="Members" />
                <Tab label="Enlighteners" />
                <Tab label="Monks" />
            </Tabs>
            <Typography className="community-tabs-info" variant="caption">Ranked based on insightful engagement. <Link>Details</Link></Typography>

            <TabPanel value={value} index={0}>
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Monks />
                <Monks />
                <Monks />
                <Monks />
                <Monks />
            </TabPanel>
        </div>
    );
}

export default Community;