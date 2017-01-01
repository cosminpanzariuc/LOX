/**
 * Created by Cosmin on 28-12-2016.
 */

import React from 'react';

const VideoListItem = ({videoItem, onVideoSelect}) => {
     // const videoItem = props.videoItem;
     // const onVideoSelect = props.onVideoSelect;
    const imageUrl = videoItem.snippet.thumbnails.default.url;
    return(
        <li onClick={() => onVideoSelect(videoItem)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} alt="Not loaded..."/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{videoItem.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;