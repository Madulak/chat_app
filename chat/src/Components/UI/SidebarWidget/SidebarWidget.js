import React from 'react';
import classes from './SidebarWidget.module.css';



const sidebarwidget = (props) => {

    return (
        <div className={classes.SidebarWidget}>
            {props.icon}
            <h3>{props.name}</h3>
        </div>
    );
}

export default sidebarwidget;