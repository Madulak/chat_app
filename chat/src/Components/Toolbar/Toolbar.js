import React from 'react';
import classes from './Toolbar.module.css';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const toolbar = React.memo((props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div className={classes.Toolbar}>
            <div>
                <h3>Square</h3>
            </div>
            <div>
                <input placeholder='search' />
            </div>
            <div >
                <div>
                    <div onClick={handleClick}>
                        <AccountCircleIcon />
                    </div>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={props.signup}>Signup</MenuItem>
                        <MenuItem onClick={props.login}>Login</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    );
})

export default toolbar;