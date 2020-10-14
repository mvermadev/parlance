import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DescriptionIcon from '@material-ui/icons/Description';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MovieIcon from '@material-ui/icons/Movie';
import TuneIcon from '@material-ui/icons/Tune';
import Articles from './Articles';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
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
      click: false
    }
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    })
  };

  showList = () => {
    this.setState({
      click: true
    })
  }
  hideList = () => {
    this.setState({
      click: false
    })
  }

  displayItem = () => {
    return (
      <div className="btmFilter">
        <p>Category</p>
        <p>Last Week</p>
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
              <h2>Library</h2>
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
            <div className="Filter" container>
              <div className="topFilter">
                <TuneIcon size="small" onClick={this.state.click == 'false' ? this.showList : this.hideList} style={{ color: '#000', cursor: 'pointer' }} />
              </div>
            </div>
          </div>
          {this.state.click == 'true' ? this.displayItem : this.hideList}
          <div style={{ height: '15px' }}></div>
          <div>
            {
              (this.state.content == 'Articles') ? <Articles library={this.props.library} /> : (this.state.content == 'BookPdfs') ? <BookPdf library={this.props.library} /> : <Videos library={this.props.library} />
            }
          </div>
        </div>
      );
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Library));