import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Divider, FormGroup, withStyles } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import {useHistory} from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Sign from './Sign';
import {userRegister} from '../../UserFunction'
import '../Auth.css'


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

 
export default function Signup() {

    const history = useHistory();

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

    // default empty values of the input fields 
      const [form, setForm] = useState({
        name: '',
        username: '',
        password: '',
        password2: '',
      })

      // enter the input key in the field.
      const updateField=e=>{
        setForm({
          ...form, [e.target.name]: e.target.value
        })
      }

      // step for transferring the data.
      const finalStep=e=>{
        e.preventDefault();
        
        const allData = {
          username: form.username,
          password: form.password,
          password2: form.password2,
          name: form.name
        }

       userRegister(allData).then(()=>{
         console.log('user has registered')
         history.push('/')
       })
       .catch(err=>console.log(err))

      }

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    
    //   const doSignUp =()=>{
    //     document.getElementById('siginModalId').style.display = 'none';
    // }

  return (
    <div>
      <Button style={{color: '#B0343C', fontWeight: 'bold'}} type="button" onClick={handleOpen}>
        Sign Up
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
        <Fade in={open} className="signinModal" id="siginModalId">
          <div className={classes.paper}>
            <div className="apiBtn" id="transition-modal-title">
                <Button id="transition-modal-description" variant="contained" color="secondary">Continue with <p style={{fontWeight: 'bold'}}>&nbsp;Google</p></Button>
                <Button id="transition-modal-description" variant="contained" color="primary">Continue with <p style={{fontWeight: 'bold'}}>&nbsp;LinkedIn</p></Button>
            </div>

            <div class="separator">or use</div>
              
              <form method="POST" onSubmit={finalStep}>
            <div className="inputFields">
              <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle style={{color: '#767676'}} />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="name" type="text" name="name" value={form.name} onChange={updateField} required/>
                </Grid>
              </Grid>
              
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <MailIcon style={{color: '#767676'}} />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Email" name="username" value={form.username} onChange={updateField} type="email" required/>
                </Grid>
              </Grid>

              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <LockIcon style={{color: '#767676'}} />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Password" name="password" value={form.password} onChange={updateField} type="password" required/>
                </Grid>
              </Grid>

              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <LockIcon style={{color: '#767676'}} />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Confirm Password" name="password2" onChange={updateField} value={form.password2} type="password" required/>
                </Grid>
              </Grid>
              
            </div>
            </div>

            <div className="logBtn">
              <Button type="submit" variant="contained" container style={{backgroundColor: '#B0343C', color: '#fff', border: 'none', width: '80vw', marginTop: '0.5rem'}}>
                Signup
              </Button>
            </div>

          </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
