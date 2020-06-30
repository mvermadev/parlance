import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../Auth.css'
import { Button, Divider } from '@material-ui/core';

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
}));

export default function Sign() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="signin" type="button" onClick={handleOpen}>
        Sign in
      </button>
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
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="apiBtn" id="transition-modal-title">
                <Button id="transition-modal-description" variant="contained" color="secondary">Continue with <p style={{fontWeight: 'bold'}}>&nbsp;Google</p></Button>
                <Button id="transition-modal-description" variant="contained" color="primary">Continue with <p style={{fontWeight: 'bold'}}>&nbsp;LinkedIn</p></Button>
            </div>
            <Divider/>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
