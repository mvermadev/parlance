import React, { Component } from 'react';
import { Grid, Avatar, Button, ButtonGroup } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './profile.css';
import { fetchProfile } from '../../../redux/dataFetchers/ProfileApi'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../../universal/Loader'
import About from './About'
import Contributions from './Contributions'

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      className="profile-mob-tabs-info"
    >
      {value === index && (
        <div>{children}</div>
      )}
    </div>
  );
}

class UserProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, index) => {
    this.setState({
      value: index
    })
  };

  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {

    if (!this.props.info.name) {
      return (
        <Loader style={{ width: '100vw', height: '100vh' }} />
      )
    }

    else {

      return (
        <div className="profile-page">
          <Grid container className="profile-bg">
            <Grid align="center" item xs={12} style={{ marginBottom: '8px' }}>
              <Avatar style={{ width: '75px', height: '75px' }} src={this.props.info.avatar} />
            </Grid>
            <Grid align="center" className="username" item xs={12} style={{ marginBottom: '8px' }}>
              {this.props.info.name}
            </Grid>
            <Grid item align="center" xs={12}>
              <ButtonGroup size="small" aria-label="small outlined button group">
                <Button className="profile-buttons follow">Follow</Button>
                <Button className="profile-buttons ask">Ask</Button>
              </ButtonGroup>
            </Grid>

            {/* Profile Mobile Tabs */}

            <Hidden mdUp>
              <Grid item xs={12}>
                <Tabs value={this.state.value} onChange={this.handleChange} aria-label="profile tabs" className="profile-mob-tabs">
                  <Tab label="Contributions" className="profile-mob-tabs-heading" />
                  <Tab label="About" className="profile-mob-tabs-heading" />
                </Tabs>
              </Grid>
            </Hidden>
          </Grid>

          {/* Profile Mobile Panels */}
          <Hidden mdUp>
            <TabPanel value={this.state.value} index={0}>
              <Contributions props={this.props.info} />
            </TabPanel>
            <TabPanel value={this.state.value} index={1}>
              <About props={this.props.info.employment} />
            </TabPanel>
          </Hidden>

          {/* Profile Tabs for medium to xl screens */}
          <Hidden smDown>
            <Grid container className="profile-info-bg profile-desktop">
              <Grid className="profile-info-contributions" item xs={12} md={6}>
                <h3>Contributions</h3>
                <Contributions props={this.props.info} />
              </Grid>
              <Grid className="profile-info-about" item xs={12} md={6}>
                <h3>About</h3>
                <About props={this.props.info.employment} />
              </Grid>
            </Grid>
          </Hidden>

        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    info: state.profile.info
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProfile: () => { dispatch(fetchProfile()) }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));