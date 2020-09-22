import React from 'react';
import classes from './Post.module.css';

import ReactionWidget from '../UI/ReactionWidget/ReactionWidget';

// import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';

// import { useSelector } from 'react-redux';
import VideoPlayer from 'react-video-js-player';

const post = React.memo((props) => {

    // const userId = useSelector(state => state.auth.userId);
    // const like = useSelector(state => state.posts.posts);
    // console.log(like)

    // const likeHandler = () => {
    //     const isLike = like.like.find(el => el.likeCreator === userId)
    // }

    return (
        <div className={classes.Post}>
            <div className={classes.ProfileInfo}>
                <img src={props.profileUrl} className={classes.Image} alt={props.username.charAt(0)} />
                <div className={classes.UserDetails}>
                    <p className={classes.Username}>{props.username}</p>
                    <p className={classes.Date}>{props.createdAt}</p>
                </div>
            </div>
            <p>{props.postText}</p>
             <VideoPlayer className={classes.Media} src={props.mediaUrl} />
            <div className={classes.Reactions}>
                <ReactionWidget Widgetname={'Comment'} Widget={<MessageOutlinedIcon />} />
                <div onClick={() => props.postLike(props.postId)}>
                    <ReactionWidget  Widgetname={'Likes'} Widget={<FavoriteBorderIcon  />} />
                </div>
                {/* <ReactionWidget Widgetname={'Likes'} Widget={<FavoriteIcon />} /> */}
                <ReactionWidget Widgetname={'Saved'} Widget={<TurnedInNotOutlinedIcon />} />
            </div>
        </div>
    );
})

export default post;