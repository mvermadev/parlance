import React from 'react';
import { Grid, Avatar, Button, ButtonGroup, List, ListItem, ListItemText } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Hidden from '@material-ui/core/Hidden';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function About() {
    return(
        <div style={{ paddingRight: '20px'}}>
            <p style={{ paddingLeft: '16px'}}>User about section info will come here. 
              dfkhdsfjsdf secondarydfdsghfds   sdfhfds dsff
                'require',
                'dfifdiufhd jfjdf dfdofd '
               fdsfdsf dfkjdsf sdfh sdfhdsfi dsfihdsfi ss.
               dfgsdfids fshdsdfidis fdshf.
            </p>
            <List>
                <ListItem>
                    <ListItemText primary="DESIGNATION" secondary="HR Admin" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="COMPANY" secondary="Company Name" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="INDUSTRY" secondary="Technology" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="EXPERIENCE" secondary="1 year" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="LOCATION" secondary="Mumbai" />
                </ListItem>
            </List>
    </div>
    );
}

function Contributions() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return(
    <div className="contribute-section">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography><span>99K </span>Questions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            data will load here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography><span>99K </span>Answers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          data will load here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography><span>99K </span>Points</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          data will load here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    );
}

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      className="profile-mob-tabs-info"
    >
      {value === index && (
        <div>{children}</div>
      )}
    </div>
  );
}

function UserProfile () {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

        return(
        <div className="profile-page">

            <Grid container className="profile-bg">
                <Grid align="center" item xs={12} style={{ marginBottom: '8px' }}>
                    <Avatar style={{ width:'75px', height:'75px'}} alt="" src="" />
                </Grid>
                <Grid align="center" className="username" item xs={12} style={{ marginBottom: '8px' }}>
                    Monk Username
                </Grid>
                <Grid item align="center" xs={12}>
                <ButtonGroup size="small" aria-label="small outlined button group">
                    <Button className="profile-buttons follow">Follow</Button>
                    <Button className="profile-buttons message">Message</Button>
                    <Button className="profile-buttons ask">Ask</Button>
                </ButtonGroup>
                </Grid>

                {/* Profile Mobile Tabs */}
                
                <Hidden mdUp>
                <Grid item xs={12}>
                    <Tabs value={value} onChange={handleChange} aria-label="profile tabs" className="profile-mob-tabs">
                      <Tab label="Contributions" className="profile-mob-tabs-heading" />
                      <Tab label="About" className="profile-mob-tabs-heading" />
                    </Tabs>
                </Grid>
                </Hidden>
            </Grid>

            {/* Profile Mobile Panels */}
            <Hidden mdUp>
            <TabPanel value={value} index={0}>
                <Contributions />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <About />
            </TabPanel>
            </Hidden>

            {/* Profile Tabs for medium to xl screens */}
            <Hidden smDown>
            <Grid container className="profile-info-bg profile-desktop">
                <Grid className="profile-info-contributions" item xs={12} md={6}>
                    <h3>Contributions</h3>
                    <Contributions />
                </Grid>
                <Grid className="profile-info-about" item xs={12} md={6}>
                    <h3>About</h3>
                    <About />
                </Grid>
            </Grid>
            </Hidden>

        </div>
        );
    }

export default UserProfile;