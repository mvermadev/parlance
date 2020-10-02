import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

function About(props) {

    return (
        <div style={{ paddingRight: '20px' }}>
            <p style={{ paddingLeft: '16px' }}>{props.bio}</p>
            <List>
                <ListItem>
                    <ListItemText primary="DESIGNATION" secondary={props.designation} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="COMPANY" secondary={props.company} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="INDUSTRY" secondary={props.industry} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="EXPERIENCE" secondary="1 year" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="LOCATION" secondary={props.location} />
                </ListItem>
            </List>
        </div>
    );
}

export default About;