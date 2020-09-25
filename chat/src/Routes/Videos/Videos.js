import React, { useCallback, useEffect, useState } from 'react';
import classes from './Videos.module.css';

import Container from '../../Container/Container';
import Post from '../../Components/Post/Post';

import { useSelector, useDispatch } from 'react-redux';
import * as postActions from '../../store/actions/postActions';

const videos = React.memo(() => {

    const [user, setUser] = useState(null);

    const state = useSelector(state => state.auth.userId);
    const posts = useSelector(state => state.posts.videos);
    const dispatch = useDispatch();
    const like = useDispatch()
    console.log(state);
    console.log(posts);

    const data = useSelector(state => state.auth.data);
    console.log(user);

    const postLike = useCallback((postId) => {
        like(postActions.post_like(postId));
    },[like])

    useEffect(() => {
        dispatch(postActions.get_videos())
        if (state) {
            setUser(data.userId);
        }
        
    },[dispatch, state, like]);

    const likeFinder = (id) => {
        
        // console.log(id);
        if (id === user  ) {
            return true
        } else {
            return false
        }
    
    }

    

    return (
        <Container>
            <div className={classes.Feed}>
                
                {posts.map(el => (
                    <div className={classes.Post} key={el._id}>
                        
                        <Post like={likeFinder(el.like.likeCreator)} postId={el._id} postLike={postLike} username={el.postCreator.username} createdAt={el.createdAt} postText={el.postText}  mediaUrl={'http://localhost:8080/'+ el.mediaUrl} />
                        {console.log(el.like.likeCreator)}
                    </div>
                ))}
                               
            </div>
        </Container>
    );
})

export default videos;