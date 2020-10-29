import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
// import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('buildings'); // call the custom hook (work like other hook e.g. useState, useEffect)

    // useEffect(() => {
    //     onTermSubmit('buildings');
    // }, []);

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    // const onVideoSelect = (video) => { // video object is the object that we fetch from YouTube API
    //     // console.log('From the App.js', video);
    //     setSelectedVideo(video);
    // };

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={(video) => setSelectedVideo(video)} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;