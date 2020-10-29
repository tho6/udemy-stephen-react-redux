import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', { // youtube is now a pre-configured instance of axios
            params: {
                q: term
            }
        });
        setVideos(response.data.items);
    };

    return [videos, search]; // make sure we return outputs (list of videos, a function to search videos) from our hooks: 2 ways to do: 1) follow the convention of React, return outputs from our hooks
    // return { videos, onTermSubmit }; // 2) follow more JavaScript convention, to return an object
};

export default useVideos;