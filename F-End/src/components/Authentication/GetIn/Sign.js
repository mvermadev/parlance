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

const logStyle = withStyles({
  btn:{
    
  }
})
 
export default function Sign() {
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

  return (
    <div>
      <Button style={{color: '#B0343C', fontWeight: 'bold', position: 'absolute', top: '8px', right: '16px'}} type="button" onClick={handleOpen}>
        Sign in
      </Button>
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
        <Fade in={open} className="signinModal">
          <div className={classes.paper}>
            <div className="apiBtn" id="transition-modal-title">
                <Button id="transition-modal-description" variant="contained" color="secondary">Continue with <p style={{fontWeight: 'bold'}}>&nbsp;Google</p></Button>
                <Button id="transition-modal-description" variant="contained" color="primary">Continue with <p style={{fontWeight: 'bold'}}>&nbsp;LinkedIn</p></Button>
            </div>

            <div class="separator">or use</div>

              <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle style={{color: '#767676'}} />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Email" type="email" requireds/>
                </Grid>
              </Grid>

              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <LockIcon style={{color: '#767676'}} />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Password" type="password" requireds/>
                </Grid>
              </Grid>
            </div>

            <div className="addtnlLogTool">
            <FormGroup 
              style={{fontSize:'10px'}}
            >
              <FormControlLabel className="addtnlLogTool"
                control={<Checkbox checked={state.checkedMe} onChange={handleChange} name="checkedMe" style={{color: '#767676', fontSize: '10px'}}  size="small"/>}
                label="Remember Me!"
                />
                </FormGroup>
             
              <p style={{color: '#B0343C'}}>
                Forgot Password?
              </p>
            </div>

            <div className="logBtn">
              <Button variant="contained" container style={{backgroundColor: '#B0343C', color: '#fff', border: 'none', width: '80vw'}}>
                Login
              </Button>
            </div>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
