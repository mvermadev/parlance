import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../Auth.css'
import { Button, Divider, FormGroup, withStyles } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Signup from './Signup';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '7px'
  },
  margin: {
    margin: theme.spacing(1),
  },

}));

 
export default function Forget() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // For hanlding the remember user.
      const [state, setState] = React.useState({
        checkedMe: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      // const doSignUp =()=>{
      //   document.getElementById('siginModalId').style.display = 'none';
      // }

  return (
    <div>
      <p style={{color: '#B0343C', fontSize: '16px'}} onClick={handleOpen}>
        Forget Password?
      </p>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} className="signinModal" id="siginModalId">
          
          <div className={classes.paper}>

        <div className="inputFields">
              <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle style={{color: '#767676'}} />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Email" type="email" requireds/>
                </Grid>
              </Grid>

            </div>
        </div>
            <div className="logBtn">
              <Button variant="contained" container style={{backgroundColor: '#B0343C', color: '#fff', border: 'none', width: '80vw', marginTop: '.5rem'}}>
                Reset
              </Button>
            </div>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
