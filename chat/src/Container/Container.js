import React, { useState } from 'react';
import classes from './Container.module.css';

import Toolbar from '../Components/Toolbar/Toolbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import Explore from '../Components/Explore/Explore';

import Signup from '../Components/Auth/Signup/Signup';
import Login from '../Components/Auth/Login/Login';

const container = React.memo((props) => {

    const [open, setOpen] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    const openModal = (event) => {
        event.preventDefault();
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    const openLogin = () => {
        setLoginModal(true);
    }

    const closeLogin = () => {
        setLoginModal(false);
    }

    return (
        <div className={classes.Container}>
            <Signup open={open} close={closeModal} />
            <Login open={loginModal} close={closeLogin} />
            <div className={classes.Toolbar}>
                <Toolbar signup={openModal} login={openLogin} />
            </div>
            <div className={classes.ContentContainer}>
                <div className={classes.Sidebar}>
                    <Sidebar />
                </div>
                <div className={classes.Content}>
                    {props.children}
                </div>
                <div className={classes.Explore}>
                    <Explore />
                </div>
            </div>
        </div>
    );
})

export default container;