import React, { useState, useEffect, useCallback } from 'react';
import classes from './Login.module.css';

import Modal from '@material-ui/core/Modal';

import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../../store/actions/auth';

const login = React.memo((props) => {

    console.log(props);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLogin = useSelector(state => state.auth.userId);
    const error = useSelector(state => state.auth.error);

    console.log(error);
    const dispatch = useDispatch();

    const login =  useCallback((e) => {
        e.preventDefault();
        const signupData = {
            email: email,
            password: password
        }
        const result = dispatch(authActions.login(signupData));
        setEmail('');
        setPassword('');
        console.log(result)
        console.log(error);
        // if (result) {
        //     props.close();
        // }
    
    },[dispatch, email, error, password])

    useEffect(() => {
        if (isLogin) {
            props.close();
            
        }

    },[dispatch, login, error, props,isLogin])

    
    
    return (
        <Modal open={props.open} onClose={props.close} style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}} >
            <div className={classes.Signup}>
                
                <form onSubmit={login}>
                    <h3>Login</h3>
                    
                    <input type='email' placeholder='email' onChange={e => setEmail(e.target.value)} value={email} />
                    <input type='password' placeholder='password' onChange={e => setPassword(e.target.value)} value={password} />
                    <div>
                        <button type='submit'>Login</button> 
                    </div>
                </form>
            </div>
        </Modal>
    );
})

export default login;