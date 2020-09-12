import React, { useState } from 'react';
import classes from './Signup.module.css';

import Modal from '@material-ui/core/Modal';

import { useDispatch } from 'react-redux';
import * as authActions from '../../../store/actions/auth';

const signup = React.memo((props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const signup = (e) => {
        e.preventDefault();
        const signupData = {
            username: username,
            email: email,
            password: password
        }
        dispatch(authActions.signup(signupData));
        setUsername('');
        setEmail('');
        setPassword('');
    }
    
    return (
        <Modal open={props.open} onClose={props.close} style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}} >
            <div className={classes.Signup}>
                
                <form onSubmit={signup}>
                    <h3>Sign up</h3>
                    <input placeholder='username' onChange={e => setUsername(e.target.value)} value={username} />
                    <input type='email' placeholder='email' onChange={e => setEmail(e.target.value)} value={email} />
                    <input type='password' placeholder='password' onChange={e => setPassword(e.target.value)} value={password} />
                    <div>
                        <button type='submit'>Sign up</button> 
                    </div>
                </form>
            </div>
        </Modal>
    );
})

export default signup;