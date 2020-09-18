import React, { useState } from 'react';
import classes from './Createpost.module.css';

// import { useDispatch } from 'react-redux';
// import * as postActions from '../../../store/actions/postActions';
// import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';

const createpost = React.memo((props) => {

    const [postText, setPostText] = useState('');
    const [file, setFile] = useState();
    // const dispatch = useDispatch();

    console.log(file);

    const postHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('image', file);
        formData.append('postText', postText);
        
        props.createPost(formData);
        setPostText('');
    }

    return (
        <div className={classes.Createpost}>
            {/* <div > */}
                <p className={classes.PostSomething}>Post Something</p>
            {/* </div> */}
            <div className={classes.CreatepostItems}>
                <img src={props.imageUrl} alt='nothing' />
                <form onSubmit={postHandler}>
                    <input value={postText} onChange={e => setPostText(e.target.value)} placeholder="what's on your mind?" />
                    <div className={classes.Form}>
                        <input className={classes.File} onChange={e => setFile(e.target.files[0])} multiple type='file'></input>
                        <button type='submit'>Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
})

export default createpost;