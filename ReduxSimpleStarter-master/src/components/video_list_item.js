/**
 * Created by Cosmin on 28-12-2016.
 */

import React from 'react';

const VideoListItem = ({videoo, onVideoSelect}) => {
    // const video = props.video;
    const imageUrl = videoo.snippet.thumbnails.default.url;
    return(
        <li onClick={() => onVideoSelect(videoo)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} alt="Not loaded..."/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{videoo.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;