/**
 * Created by Cosmin on 28-12-2016.
 */

import React from 'react';

const VideoListItem = ({videoItem, handleVideoSelect}) => {
    // const videoItem = props.videoItem;
    // const handleVideoSelect = props.handleVideoSelect;

    const imageUrl = videoItem.snippet.thumbnails.default.url;
    return(
        <li onClick={() => handleVideoSelect(videoItem)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{videoItem.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;