import React from 'react'
import StarsIcon from '@material-ui/icons/Stars';
import FilterListIcon from '@material-ui/icons/FilterList';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./QnA.css"
function PopularPosts() {

     // Filter style
     const [anchorEl, setAnchorEl] = React.useState(null);

     const handleClick = (event) => {
       setAnchorEl(event.currentTarget);
     };
   
     const handleClose = () => {
       setAnchorEl(null);
     };

    //logic: Here, we will use state to fetch the popular posts to display.
    return (
        <div className="PopularPosts">
            <div className="postTitle">
                <div className="postTitle1">
                    <StarsIcon fontSize="medium" style={{color: '#545454'}} />
                    <h3>Popular Posts</h3>
                </div>
                <div>
                    <FilterListIcon  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                                style={{color: '#707070', margin: '0px 10px'}}/>
    
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Today</MenuItem>
                        <MenuItem onClick={handleClose}>Last Week</MenuItem>
                        <MenuItem onClick={handleClose}>Last Month</MenuItem>
                        <MenuItem onClick={handleClose}>Last Quarter</MenuItem>
                        <MenuItem onClick={handleClose}>Last Year</MenuItem>
                    </Menu>
                </div>

            </div>
            <div className="allPosts">
                <div className="post">
                    <p>245 k</p>
                    <p>What are the best tools for hiring</p>
                </div>
                <div className="post">
                    <p>92</p>
                    <p>What are the best tools for hiring</p>
                </div>
                <div className="post">
                    <p>89</p>
                    <p>What are the best tools for hiring</p>
                </div>
                <div className="post">
                    <p>87</p>
                    <p>What are the best tools for hiring</p>
                </div>
                <div className="post">
                    <p>82</p>
                    <p>What are the best tools for hiring</p>
                </div>
                <div className="post">
                    <p>78</p>
                    <p>What are the best tools for hiring</p>
                </div>
            </div>
        </div>
    )
}


export default PopularPosts
