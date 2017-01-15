/**
 * Created by Cosmin on 28-12-2016.
 */

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.video_list.map((video) => {
        return(
            <VideoListItem
                handleVideoSelect = {props.handleVideoSelect}
                videoItem={video}
                key={video.etag}/>
        );
    });

    return(
        <ul>
            {videoItems}
        </ul>
    );
};

export default VideoList;