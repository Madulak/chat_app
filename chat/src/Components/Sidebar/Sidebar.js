import React from 'react';
import classes from './Sidebar.module.css';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';

import SidebarWidget from '../UI/SidebarWidget/SidebarWidget';
import ShareIcon from '@material-ui/icons/Share';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventIcon from '@material-ui/icons/Event';
import { NavLink } from 'react-router-dom';

const sidebar = () => {

    return (
        <div className={classes.Sidebar}>
            <h3> Sidebar</h3>
            <NavLink to='/'> <SidebarWidget name='Feed' icon={<DynamicFeedIcon />} /></NavLink>
            <SidebarWidget name='Friends' icon={<ShareIcon />} />
            <SidebarWidget name='Event' icon={<EventIcon />} />
            <NavLink to='/photos'><SidebarWidget name='Photos' icon={<PhotoSizeSelectActualIcon />} /></NavLink>
            <NavLink to='/videos'><SidebarWidget name='Watch Videos' icon={<VideoLibraryIcon />} /></NavLink>
        </div>
    );
}

export default sidebar;