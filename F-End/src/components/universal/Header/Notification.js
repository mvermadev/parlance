import React from 'react';
import { Button, Menu, MenuItem, Typography } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { withStyles } from '@material-ui/core/styles';


const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                    color: theme.palette.common.white,
            },
    },
}))(MenuItem);

/* Notification for Header */
function Notification() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div align="center">
            <Button aria-controls="StyledMenu" aria-haspopup="true" onClick={handleClick}>
                <span> <NotificationsIcon style={{ color: '#7c7f85' }} /> 
                    <sup style={{ verticalAlign: 'top', paddingLeft: '3px', paddingRight: '3px', color: 'white', background: 'red', marginLeft: '-10px' }}>3</sup>
                </span>
            </Button>
            <StyledMenu
                id="StyledMenu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem onClick={handleClose}>
                    <span style={{ padding: '3px', borderBottom: '1px solid #f2f2f2' }}>
                        <Typography variant="p">Notification will come here.</Typography>
                        <br />
                        <Typography variant="caption" style={{ color: "grey" }}>On: 7 Aug at 1:46 PM</Typography>
                    </span>
                </StyledMenuItem>
                <StyledMenuItem onClick={handleClose}>
                    <span style={{ padding: '3px', borderBottom: '1px solid #f2f2f2' }}>
                        <Typography variant="p">Notification will come here.</Typography>
                        <br />
                        <Typography variant="caption" style={{ color: "grey" }}>On: 7 Aug at 1:46 PM</Typography>
                    </span>
                </StyledMenuItem>
                <StyledMenuItem onClick={handleClose}>
                    <span style={{ padding: '3px', borderBottom: '1px solid #f2f2f2' }}>
                        <Typography variant="p">Notification will come here.</Typography>
                        <br />
                        <Typography variant="caption" style={{ color: "grey" }}>On: 7 Aug at 1:46 PM</Typography>
                    </span>
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}

export default Notification;