import React, { useEffect } from 'react';
import classes from './ReactionWidget.module.css';

const reactionWidget = React.memo((props) => {

    useEffect(() => {

    },[props])

    return (
        <div className={classes.ReactionWidget}>
            {props.Widget}
            <p>{props.Widgetname} {props.likesNumber}</p>
        </div>
    );
})

export default reactionWidget;