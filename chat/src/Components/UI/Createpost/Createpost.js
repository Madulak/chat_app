import React from 'react';
import classes from './Createpost.module.css';

// import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';

const createpost = (props) => {

    return (
        <div className={classes.Createpost}>
            {/* <div > */}
                <p className={classes.PostSomething}>Post Something</p>
            {/* </div> */}
            <div className={classes.CreatepostItems}>
                <img src={props.imageUrl} alt='nothing' />
                <form>
                    <input placeholder="what's on your mind?" />
                    <div className={classes.Form}>
                        <input className={classes.File} type='file'></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default createpost;