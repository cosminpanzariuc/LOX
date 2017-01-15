/**
 * Created by Cosmin on 28-12-2016.
 */

import React from 'react';


const VideoDetail = ({currentVideo}) => {
    // const currentVideo = props.currentVideo;
    if(!currentVideo){
        return <div id="centerText">Loading...</div>;
    }

    const videoId = currentVideo.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>

            <div className="details">
                <b>{currentVideo.snippet.title}</b>
                <i>{currentVideo.snippet.description}</i>
            </div>
        </div>
    );
};

export default VideoDetail;
