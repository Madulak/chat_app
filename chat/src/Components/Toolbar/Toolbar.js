import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './Toolbar.module.css';

import * as authActions from '../../store/actions/auth';
import { useDispatch } from 'react-redux';

const toolbar = React.memo((props) => {

    const loginState = useSelector(state => state.auth.userId);
    const userState = useSelector(state => state.auth.username);

    const dispatch = useDispatch();

    const logout_handler = () => {
        dispatch(authActions.logout());
    }

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
                    {loginState ? <div className={classes.User}>
                                        <NavLink onClick={() => logout_handler()} to='/logout'>Logout</NavLink>
                                        <div className={classes.ImageContainer}>
                                            <img className={classes.UserImage} src={props.imgUrl} alt={userState.charAt(0)} />
                                        </div>
                                    </div> 
                            
                            :
                        <div>
                            <NavLink onClick={props.login} to='/login'>Login</NavLink>
                            <NavLink onClick={props.signup} to='/signup'>Signup</NavLink>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
})

export default toolbar;