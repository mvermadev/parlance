import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { Button, FormGroup } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Hidden from '@material-ui/core/Hidden';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Link, useHistory } from 'react-router-dom'
import { store } from '../../../redux/reducers/index'
import Signup from './Signup';
import Forget from './Forget';
import '../Auth.css'
import Swal from 'sweetalert2'
import LoginImg from './LoginImg';


export default function Sign() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  // For hanlding the remember user.

  const [checked, setChecked] = React.useState(true);

  const handleCheck = (e) => {
    setChecked(e.target.checked)
  }

  const [state, setState] = React.useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const finalstep = (e) => {

    var raw = JSON.stringify(state);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    return fetch("https://recmonk.herokuapp.com/login", requestOptions)

      .then(response => {
        if (response.ok) {
          handleClose();
          return response;
        }
        else {
          handleClose();
          var error = new Error("Error " + response.status + ": " + response.statusText);
          error.response = response;
          throw error;
        }
      },
        error => {
          var errmess = new Error(error.message);
          throw errmess;
        })
      .then(response => response.json())

      .then(result => {
        console.log(result)

        //to update the state 
        store.subscribe(() => {
          console.warn('my redux: ', store.getState())
          console.log('user: ', store.getState().authUser.authUser)
        })

        //Action for state
        const addUser = text => {
          return {
            type: "SET_AUTH_TOKEN",
            payload: { auth: text }
          }
        }

        localStorage.setItem("token", result.token);

        //assigning the new value to the state
        store.dispatch(addUser(result.token));

      })
      .catch(error => {
        console.log('Error', error.message)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message
        })
      });
  }

  // const doSignUp =()=>{
  //   document.getElementById('siginModalId').style.display = 'none';
  // }

  return (
    <div className="Sign" id="idSign">
      {
        localStorage.getItem('token') ?
          <AccountCircleIcon onClick={() => history.push('/profile')} fontSize='large' style={{ color: '#b32800', position: 'absolute', top: '0', right: '16px', cursor: 'pointer' }} /> :
          <a className="signBtn" style={{ cursor: 'pointer' }} type="button" onClick={handleOpen}>
            Sign In
        </a>
      }


      <Dialog className="login-popup" open={open} onClose={handleClose} aria-labelledby="form-dialog" md={8}>
        <DialogContent>
          <Grid container justify="space-around">
            <Grid item md={6} style={{ alignSelf: 'center' }}>
              <Hidden smDown>
                <LoginImg />
                <img align="center" className="tagline" src="/assets/images/tagline.png" />
              </Hidden>
            </Grid>

            <Grid align="center" item xs={12} md={6} style={{ alignSelf: 'center', paddingLeft: '15px', paddingRight: '15px' }}>
              <div className="apiBtn">
                <Button id="google" variant="contained"
                  startIcon={<span className="fa fa-google"> </span>} > Continue with <p style={{ fontWeight: 'bold' }}>&nbsp;Google</p></Button>
                <Button id="linkedin" variant="contained"
                  startIcon={<span className="fa fa-linkedin"> </span>}> Continue with <p style={{ fontWeight: 'bold' }}>&nbsp;LinkedIn</p></Button>
              </div>

              <div class="separator">or use</div>

              <div className="inputFields">

                <Grid container spacing={2} style={{ padding: '5px'}}>
                  <Grid item xs={12}>
                    <TextField label="Email" name="username"
                      value={state.username}
                      onChange={handleChange}
                      type="email" fullWidth required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle style={{ color: '#767676' }} />
                          </InputAdornment>
                        ),
                      }} />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField id="input-with-icon-grid" label="Password"
                      name="password"
                      value={state.password}
                      onChange={handleChange}
                      type="password" required fullWidth
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

              <div className="addtnlLogTool">
                <FormGroup
                  style={{ fontSize: '10px' }}
                >
                  <FormControlLabel className="addtnlLogTool"
                    control={<Checkbox checked={checked} onChange={handleCheck} name="checkedMe" style={{ color: '#767676', fontSize: '10px' }} size="small" />}
                    label="Remember Me!"
                  />
                </FormGroup>

                <p style={{ color: '#B0343C', cursor: 'pointer' }}>
                  <Forget />
                </p>
              </div>

              <div className="logBtn">
                <Button variant="contained" container style={{ backgroundColor: '#B0343C', color: '#fff', border: 'none' }}
                  onClick={finalstep} >
                  Login
              </Button>
              </div>
              <Grid container justify="center" className="signUpBtn">
                <Grid item>
                  <p>Don't have account, </p>
                </Grid>
                <Grid item style={{ marginTop: '20px', marginLeft: '5px' }}>
                  <Signup />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div >
  );
}
