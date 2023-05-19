import React from 'react';
import './css/Video.css';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ShakaPlayer from 'shaka-player-react';
import "shaka-player/dist/controls.css";

const Video = () => {
    const [params, setParams] = useSearchParams();
    const [videoUrl, setVideoUrl] = useState(params.get('videoUrl'));

    const emptyResponse = (<>
        <h1>No Video Url Found</h1>
    </>);

    const playerResponse = (<>
        <ShakaPlayer className='player' src={(videoUrl)&&videoUrl}/>
    </>);
    
    return(
        <>
            {(videoUrl)&&videoUrl != null ? playerResponse : emptyResponse}
        </>
    );
};

export default Video;