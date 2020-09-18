import React from 'react';
import classes from './People.module.css';

const people = (props) => {

    return (
        <div className={classes.People}>
            {/* <div > */}
                <h4 className={classes.PeopleToFollow}>People to Follow </h4>
            {/* </div> */}
            <div className={classes.AllUsers}>

            </div>
        </div>
    );
}

export default people;