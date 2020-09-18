import React, { useEffect } from 'react';
import classes from './Explore.module.css';

import People from '../People/People';

import { useDispatch, useSelector } from 'react-redux';
import * as profileActions from '../../store/actions/profileActions';

const explore = React.memo(() => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    useEffect(() => {
        dispatch(profileActions.get_all_users());
    },[dispatch])

    console.log(users);

    return (
        <div className={classes.Explore}>
            <h3>Explore</h3>
            <People />
        </div>
    );
})

export default explore;