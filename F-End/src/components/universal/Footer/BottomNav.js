import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ForumIcon from '@material-ui/icons/Forum';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    backgroundColor: '#b32800',
    position: 'fixed',
    bottom: '0px',
    zIndex: '99'
},
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const history = useHistory();


  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
     
      <BottomNavigationAction onClick={()=>history.push('/')} label="HOME" icon={<HomeIcon style={{color: '#fff'}} />}  style={{color: '#fff'}} />
  
      <BottomNavigationAction onClick={()=>history.push('/community')} label="COMMUNITY" icon={<ForumIcon style={{color: '#fff'}}  />} style={{color: '#fff'}} ></BottomNavigationAction>
  
      <BottomNavigationAction onClick={()=>history.push('/profile')} label="PROFILE" icon={<PersonIcon style={{color: '#fff'}}  />} style={{color: '#fff'}} />
  
    </BottomNavigation>
  );
}
