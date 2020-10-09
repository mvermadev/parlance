import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import EditProfile from './EditProfile'

function About(props) {

    let year;
    if(props.props.experience <= 1)
        year = props.props.experience + " year";
    else
        year = props.props.experience + " years";

    return (
        <div style={{ paddingRight: '20px' }}>
            <EditProfile props={props} style={{ float: 'right' }} />
            <p style={{ paddingLeft: '16px' }}>{props.props.bio}</p>
            <List>
                <ListItem>
                    <ListItemText primary="DESIGNATION" secondary={props.props.designation} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="COMPANY" secondary={props.props.company} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="INDUSTRY" secondary={props.props.industry} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="EXPERIENCE" secondary={year} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="LOCATION" secondary={props.props.location} />
                </ListItem>
            </List>
        </div>
    );
}

export default About;