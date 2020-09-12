import React from 'react';
import classes from './Sidebar.module.css';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';

import SidebarWidget from '../UI/SidebarWidget/SidebarWidget';
import ShareIcon from '@material-ui/icons/Share';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventIcon from '@material-ui/icons/Event';

const sidebar = () => {

    return (
        <div className={classes.Sidebar}>
            <h3> Sidebar</h3>
            <SidebarWidget name='Feed' icon={<DynamicFeedIcon />} />
            <SidebarWidget name='Friends' icon={<ShareIcon />} />
            <SidebarWidget name='Event' icon={<EventIcon />} />
            <SidebarWidget name='Photos' icon={<PhotoSizeSelectActualIcon />} />
            <SidebarWidget name='Watch Videos' icon={<VideoLibraryIcon />} />
        </div>
    );
}

export default sidebar;