import React from 'react';
import classes from './ReactionWidget.module.css';

const reactionWidget = (props) => {

    return (
        <div className={classes.ReactionWidget}>
            {props.Widget}
            <p>{props.Widgetname}</p>
        </div>
    );
}

export default reactionWidget;