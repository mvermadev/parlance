import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DescriptionIcon from '@material-ui/icons/Description';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MovieIcon from '@material-ui/icons/Movie';
import Menu from '@material-ui/core/Menu';
import TuneIcon from '@material-ui/icons/Tune';
import '../SideBar.css'
import Articles from './Articles';
import BookPdf from '../../../QnA/Question/BookPdf';
import Videos from './Videos';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Library(props) {
  const classes = useStyles();
  const [content, setContent] = useState(props.content);

  const history = useHistory();

  const handleChange = (event) => {
    setContent(event.target.value);
  };

    // Filter style
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <div className="LibraryHeader">
        <div className="libraryHead">
          <div className="libraryHead1">
              <p>Library</p>
                <FormControl className={classes.formControl} style={{marginLeft: '10px'}}>
                    <Select
                    value={content}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem value='Articles' onClick={()=>history.push('/articles')}> 
                        <DescriptionIcon fontSize='small'  style={{color: '#707070', marginRight:'10px'}}/> Articles
                    </MenuItem>
                    <MenuItem value='BookPdfs' onClick={()=>history.push('/bookpdf')}>
                        <MenuBookIcon fontSize='small'  style={{color: '#707070', marginRight:'10px'}}/>BookPdfs
                        </MenuItem>
                    <MenuItem value='Videos' onClick={()=>history.push('/videos')}>
                        <MovieIcon fontSize='small'  style={{color: '#707070', marginRight:'10px'}}/>Videos
                        </MenuItem>
                    </Select>
                </FormControl>
        </div>  
                    <TuneIcon  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                                style={{color: '#000', margin: '0px 10px'}}/>
    
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Category</MenuItem>
                        <MenuItem onClick={handleClose}>Last Week</MenuItem>
                    </Menu>
             
        </div>
    </div>
  );
}



export default Library