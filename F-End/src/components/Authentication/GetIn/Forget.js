import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import '../Auth.css'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


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

  const [form, setForm] = useState({
    username: ''
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // const doSignUp =()=>{
  //   document.getElementById('siginModalId').style.display = 'none';
  // }

  // Main Logic of recovering the password.
  const updateField = e => {
    setForm({
      ...form, [e.target.name]: e.target.value
    })
  }

  const finalStep = e => {
    e.preventDefault();


    forgotPass()

  }

  const forgotPass = e => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "username": "manish@gmail.com" });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      // mode:'no-cors'
    };

    return fetch("https://recmonk.herokuapp.com/forgot", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  return (
    <div>
      <p style={{ color: '#B0343C', fontSize: '16px' }} onClick={handleOpen}>
        Forget Password?
      </p>

      <Dialog className="signup-popup" open={open} onClose={handleClose} aria-labelledby="form-dialog">
        <DialogContent>
          <Grid container justify="space-around">
            <Grid item justify="center">

              <form method="POST" onSubmit={forgotPass} >
                <div className="inputFields">
                  <Grid container spacing={5} style={{ padding: '7px' }}>
                    <Grid item xs={12}>
                      <TextField label="Email" name="username"
                        value={form.username} onChange={updateField}
                        type="email" required fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <MailIcon style={{ color: '#767676' }} />
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
                  <Button variant="contained" container style={{ backgroundColor: '#B0343C', color: '#fff', border: 'none' }} type="submit">
                    Reset
              </Button>
                </div>
              </form>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
