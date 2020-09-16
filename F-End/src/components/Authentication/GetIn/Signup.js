import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import { useHistory } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';
import Sign from './Sign';
// import {userRegister} from '../../UserFunction'
import '../Auth.css'
import LoginImg from './LoginImg';


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
  const updateField = e => {
    setForm({
      ...form, [e.target.name]: e.target.value
    })
  }

  // step for transferring the data.
  const finalStep = e => {
    e.preventDefault();

    const allData = {
      username: form.username,
      password: form.password,
      password2: form.password2,
      name: form.name
    }

    userRegister(allData).then(() => {
      console.log('user has registered')
      history.push('/')
    })
      .catch(err => console.log(err))

  }

  //Main logic of signing up.
  const userRegister = newUser => {

    var raw = JSON.stringify({
      "username": newUser.username,
      "password": newUser.password,
      "password2": newUser.password2,
      "name": newUser.name
    });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    return fetch("https://recmonk.herokuapp.com/register", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)

        // creating red alert to the user from their consequences.
        for (var prop in result) {
          console.log('objProp: ' + prop + ' propVal: ' + result[prop]);
          if (result[prop] == '0') {
            // If successfully registered.
            document.getElementById('conseq').style.color = "green"
            document.getElementById('conseq').innerHTML = "Successfully registered."
          }
          else {
            // if any issue in signup.
            document.getElementById('conseq').style.color = "red"
            document.getElementById('conseq').innerHTML = result[prop];
          }

        }

      })
      .catch(error => console.log('error', error));
  }


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  //   const doSignUp =()=>{
  //     document.getElementById('siginModalId').style.display = 'none';
  // }

  return (
    <div>
      <a className="signBtn" style={{ cursor: 'pointer' }} type="button" onClick={handleOpen}>
        Sign Up
      </a>

      <Dialog className="signup-popup" open={open} onClose={handleClose} aria-labelledby="form-dialog" md={8}>
        <DialogContent>
          <Grid container justify="space-around">
            <Grid item justify="center" md={5} style={{ alignSelf: 'center', marginLeft: '30px' }}>
              <Hidden smDown>
                <LoginImg />
                <img style={{ marginLeft: '-15px'}} src="/assets/images/tagline.png" />
              </Hidden>
            </Grid>

            <Grid item xs={12} md={6} style={{ alignSelf: 'center' }}>
              <div className="apiBtn">
                <Button id="google" variant="contained"
                  startIcon={<span className="fa fa-google"> </span>} > Continue with <p style={{ fontWeight: 'bold' }}>&nbsp;Google</p></Button>
                <Button id="linkedin" variant="contained"
                  startIcon={<span className="fa fa-linkedin"> </span>}> Continue with <p style={{ fontWeight: 'bold' }}>&nbsp;LinkedIn</p></Button>
              </div>

              <div class="separator">or use</div>

              <form method="POST" onSubmit={finalStep}>
                <div className="inputFields">

                  <Grid container spacing={3} style={{ padding: '7px' }}>
                    <Grid item xs={12}>
                      <TextField label="Name" type="text" name="name"
                        value={form.name} onChange={updateField}
                        fullWidth required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle style={{ color: '#767676' }} />
                            </InputAdornment>
                          ),
                        }} />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField label="Email" name="username"
                        value={form.username} onChange={updateField} type="email"
                        fullWidth required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <MailIcon style={{ color: '#767676' }} />
                            </InputAdornment>
                          ),
                        }} />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField label="Password" name="password"
                        value={form.password} onChange={updateField} type="password"
                        fullWidth required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockIcon style={{ color: '#767676' }} />
                            </InputAdornment>
                          ),
                        }} />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField label="Confirm Password" name="password2"
                        onChange={updateField} value={form.password2} type="password"
                        fullWidth required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockIcon style={{ color: '#767676' }} />
                            </InputAdornment>
                          ),
                        }} />
                    </Grid>
                  </Grid>

                </div>
                <div className="conseq">
                  <p id="conseq"></p>
                </div>
                <div className="logBtn">
                  <Button type="submit" variant="contained" container style={{ backgroundColor: '#B0343C', color: '#fff', border: 'none' }}>
                    Signup
              </Button>
                </div>
              </form>
              
              <Grid container justify="center">
                <Grid item>
                  <p>Have an account, </p>
                </Grid>
                <Grid item style={{ marginTop: '20px', marginLeft: '5px' }}>
                  <Sign />
                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
