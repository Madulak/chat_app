import React from 'react';
import classes from './Feed.module.css';

import Container from '../../Container/Container';
import Createpost from '../../Components/UI/Createpost/Createpost';
import { useSelector } from 'react-redux';

const feed = React.memo(() => {

    const state = useSelector(state => state.auth.token);
    console.log(state);

    return (
        <Container>
            <div className={classes.Feed}>
                <Createpost />
                
                
            </div>
        </Container>
    );
})

export default feed;