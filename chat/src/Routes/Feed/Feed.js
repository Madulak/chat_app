import React, { useCallback, useEffect } from 'react';
import classes from './Feed.module.css';

import Container from '../../Container/Container';
import Createpost from '../../Components/UI/Createpost/Createpost';
import Post from '../../Components/Post/Post';
import PostImage from '../../Components/PostImage/PostImage';

import { useSelector, useDispatch } from 'react-redux';
import * as postActions from '../../store/actions/postActions';

const feed = React.memo(() => {

    const state = useSelector(state => state.auth.token);
    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();
    const like = useDispatch()
    console.log(state);
    console.log(posts);

    const createPost = useCallback((data) => {
        dispatch(postActions.create_post(data));
    })

    const postLike = useCallback((postId) => {
         
        like(postActions.post_like(postId));
    },[])

    useEffect(() => {
        dispatch(postActions.get_all_posts())
    },[dispatch, ]);

    

    return (
        <Container>
            <div className={classes.Feed}>
                { state !== null ? <Createpost createPost={createPost} /> : ''}
                {posts.map(el => (
                    <div className={classes.Post} key={el._id}>
                        {el.type.startsWith('video') ? 
                        <Post postId={el._id} postLike={postLike} username={el.postCreator.username} createdAt={el.createdAt} postText={el.postText}  mediaUrl={'http://localhost:8080/'+ el.mediaUrl} /> :
                        <PostImage postId={el._id} postLike={postLike} username={el.postCreator.username} createdAt={el.createdAt} postText={el.postText} mediaUrl={'http://localhost:8080/'+ el.mediaUrl} /> }
                    
                    </div>
                ))}
                               
            </div>
        </Container>
    );
})

export default feed;