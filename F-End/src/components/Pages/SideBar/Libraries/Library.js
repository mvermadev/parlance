import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DescriptionIcon from '@material-ui/icons/Description';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MovieIcon from '@material-ui/icons/Movie';
import TuneIcon from '@material-ui/icons/Tune';
import '../SideBar.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Library() {
  const classes = useStyles();
  const [content, setContent] = React.useState('Articles');

  const handleChange = (event) => {
    setContent(event.target.value);
  };

    //   Filter ops:
    const [click, setClick] = useState('false');

    const showList = () =>{
        setClick('true');
    }
    const hideList =()=>{
        setClick('false')
    }

    const displayItem = (e)=>{
        return(
            <div className="btmFilter">
                <p>Category</p>
                <p>Last Week</p>
            </div>
        )
    }

  return (
    <div className="Library">
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
                    <MenuItem value="Articles"> 
                        <DescriptionIcon fontSize='small'  style={{color: '#707070', marginRight:'10px'}}/> Articles
                    </MenuItem>
                    <MenuItem value="BookPdf">
                        <MenuBookIcon fontSize='small'  style={{color: '#707070', marginRight:'10px'}}/>BookPdf
                        </MenuItem>
                    <MenuItem value="Videos">
                        <MovieIcon fontSize='small'  style={{color: '#707070', marginRight:'10px'}}/>Videos
                        </MenuItem>
                    </Select>
                </FormControl>
        </div>  
                {click == 'true' ? displayItem() : hideList}
               <div className="topFilter">
                    <TuneIcon size="small" onClick={click == 'false' ? showList : hideList} style={{color:'#000'}}/>
                </div>
             
        </div>
    </div>
  );
}
