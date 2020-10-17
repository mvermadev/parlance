import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DescriptionIcon from '@material-ui/icons/Description';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MovieIcon from '@material-ui/icons/Movie';
import TuneIcon from '@material-ui/icons/Tune';
import Articles from './Articles';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { InputLabel, NativeSelect, Grid, Typography } from '@material-ui/core';
import BookPdf from './BookPdf';
import Videos from './Videos';
import '../SideBar.css'
import './Library.css'
import { fetchLibrary } from '../../../../redux/dataFetchers/Libapi'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../../../universal/Loader'


const mapStateToProps = state => {
  return {
    library: state.lib.lib
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchLibrary: () => { dispatch(fetchLibrary()) }
});


class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'Articles',
      click: 'false',
      cat: 'All'
    }
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    })
  };

  showList = () => {
    this.setState({
      click: 'true'
    })
  }
  hideList = () => {
    this.setState({
      click: 'false'
    })
  }

  handleInput = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
};

  displayItem = () => {
    return (
      <div className="btmFilter">
        <Grid container className="filter-cat-container">
          <Grid item xs={4} sm={4} md={3} className="cat-title">
            <Typography>Category</Typography>
          </Grid>
          <Grid xs={5} sm={4} md={4} className="cat-chooser">
            <InputLabel htmlFor="cat" />
            <NativeSelect id="cat" name="cat" className="cat-chooser-select" required={true}
              value={this.state.cat} onChange={this.handleInput} >
              <option value="All">All</option>
              <option value="Career">Career</option>
              <option value="Engagement">Engagement</option>
              <optgroup label="HRTech">
                <option value="Automation">Automation</option>
                <option value="HR Analytics">HR Analytics</option>
                <option value="HRMS/ATS">HRMS/ATS</option>
              </optgroup>
              <option value="Interviewing">Interviewing</option>
              <option value="Job Req">Job Req</option>
              <optgroup label="Marketing">
                <option value="Branding">Branding</option>
                <option value="Mail/SMS">Mail/SMS</option>
                <option value="Story Telling">Story Telling</option>
              </optgroup>
              <option value="Others">Others</option>
              <optgroup label="Recruiting">
                <option value="Non-IT Hiring">Non-IT Hiring</option>
                <option value="Tech Hiring">Tech Hiring</option>
              </optgroup>
              <option value="Screening">Screening</option>
              <option value="Sourcing">Sourcing</option>
              <option value="Startup">Startup</option>
            </NativeSelect>
          </Grid>
        </Grid>
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchLibrary();
  }

  render() {
    if (!this.props.library) {
      return (
        <Loader style={{ width: '100vw', height: '100vh' }} />
      )
    }
    else {
      return (
        <div className="LibraryHeader">
          <div className="libraryHead">
            <div className="libraryHead1">
              <h3>Library</h3>
              <Select label="Library" name="content"
                value={this.state.content} onChange={this.handleChange} fullWidth>
                <MenuItem value="Articles">
                  <ListItem>
                    <ListItemIcon>
                      <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText primary="Articles" />
                  </ListItem>
                </MenuItem>
                <MenuItem value="BookPdfs">
                  <ListItem>
                    <ListItemIcon>
                      <MenuBookIcon />
                    </ListItemIcon>
                    <ListItemText primary="BookPdfs" />
                  </ListItem>
                </MenuItem>
                <MenuItem value="Videos">
                  <ListItem>
                    <ListItemIcon>
                      <MovieIcon />
                    </ListItemIcon>
                    <ListItemText primary="Videos" />
                  </ListItem>
                </MenuItem>
              </Select>
            </div>
            <div className="Lib-Filter" container>
              <div className="topFilter">
                <TuneIcon size="small" onClick={this.state.click == 'false' ? this.showList : this.hideList} style={{ color: '#000', cursor: 'pointer' }} />
              </div>
            </div>
          </div>
          {this.state.click == 'true' ? this.displayItem() : this.hideList}
          <div style={{ height: '10px' }}></div>
          <div>
            {
              (this.state.content == 'Articles') ? <Articles library={this.props.library} cat={this.state.cat} /> : (this.state.content == 'BookPdfs') ? <BookPdf library={this.props.library} cat={this.state.cat} /> : <Videos library={this.props.library} cat={this.state.cat} />
            }
          </div>
        </div>
      );
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Library));