import React, { useState } from 'react';
import classes from './Login.module.css';

import Modal from '@material-ui/core/Modal';

import { useDispatch } from 'react-redux';
import * as authActions from '../../../store/actions/auth';

const login = React.memo((props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const login = (e) => {
        e.preventDefault();
        const signupData = {
            email: email,
            password: password
        }
        dispatch(authActions.login(signupData));
        setEmail('');
        setPassword('');
    }
    
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