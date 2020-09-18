import React from 'react';
import classes from './Post.module.css';

import ReactionWidget from '../UI/ReactionWidget/ReactionWidget';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';

import { Media, Player, controls } from 'react-media-player';
const {
    PlayPause,
    CurrentTime,
    SeekBar,
    Duration,
    MuteUnmute,
    Volume,
    Fullscreen,
  } = controls




const post = (props) => {

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
             <Media>
                <div className={classes.Media}>
                    <div className={classes.MediaPlayer}>
                        <Player className={classes.Player} src={props.mediaUrl} />
                        
                    </div>
                    <div className={classes.MediaControls}>
                        <PlayPause  />
                        <CurrentTime className={classes.CurrentTime} />
                        <SeekBar className={classes.SeekBar}/>
                        <Duration className={classes.Duration} />
                        {/* <MuteUnmute />
                        <Volume />
                        <Fullscreen /> */}
                    </div>
                </div>
            </Media>
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
}

export default post