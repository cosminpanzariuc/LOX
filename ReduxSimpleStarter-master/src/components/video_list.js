/**
 * Created by Cosmin on 28-12-2016.
 */

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const VideoItems = props.video_list.map((video) => {
        return(
            <VideoListItem
                onVideoSelect = {props.onVideoSelect}
                key={video.etag}
                videoItem={video}/>
        );
    });

    return(
        <ul className="col-md-4 list-group">
            {VideoItems}
        </ul>
    );
};

export default VideoList;