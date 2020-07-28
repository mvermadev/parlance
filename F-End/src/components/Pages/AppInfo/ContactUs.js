import React, { Component } from 'react';
import { Grid, TextField, Button, Typography } from '@material-ui/core';

class ContactUs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            mobile: '',
            subject: '',
            message: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        /*
            const reg = /^\d+$/;
        if( !(!reg.test(this.state.mobile) && this.state.mobile.length < 10) && !(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) && !(this.state.message.length < 10) ) {
            this.setState({
                dis: false
            });
        }
        */
    }

    handleSubmit(event) {
        console.log("Curent State is : " + JSON.stringify(this.state));
        alert("Curent State is : " + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {

    return(
        <div className="ContactUs" style={{ background: 'white', padding: '25px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h2><span class="fa fa-paper-plane"> </span> Contact Us</h2>
                    <Typography>
                    We understand the importance of approaching each work integrally and believe in the power of simple and easy communication. Feel free to contact us for any questions or if you need any help or services ! Please provide a detailed explanation of your problem.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <br/>
                </Grid>
            </Grid>
            <form onSubmit={this.handleSubmit}>
                <Grid className="field" container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth type="text" name="name" label="Name" placeholder="Your Name"
                            variant="outlined" className="contact-form-field" required={true}
                            value={this.state.name}
                            onChange={this.handleInput} />
                     </Grid>
                     <Grid item xs={12} md={6}>
                        <TextField fullWidth type="email" name="email" label="Email" placeholder="Your Email"
                            variant="outlined" className="contact-form-field" required={true}
                            value={this.state.email}
                            onChange={this.handleInput} />
                     </Grid>
                </Grid>
                <Grid className="field" container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth name="mobile" label="Mobile Number" placeholder="Your Mobile Number"
                            variant="outlined" type="number" className="contact-form-field" 
                            value={this.state.mobile} min={9} max={13}
                            onChange={this.handleInput} />
                     </Grid>
                     <Grid item xs={12} md={6}>
                        <TextField fullWidth type="text" name="subject" label="Subject" placeholder="Your Subject"
                            variant="outlined" className="contact-form-field"
                            value={this.state.subject}
                            onChange={this.handleInput} />
                     </Grid>
                </Grid>
                <TextField  className="field" multiline rows={10} maxRows={20} name="message"
                     fullWidth label="Message" placeholder="Your Message"
                     variant="outlined" className="contact-form-field"
                     value={this.state.message} required={true}
                     onChange={this.handleInput} />
                <Button className="contact-form-submit field" variant="contained" fullWidth
                    type="submit"
                >Send</Button>
            </form>
        </div>
    );
    }
}

export default ContactUs;