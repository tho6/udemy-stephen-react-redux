import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    // console.log(results)

    // console.log('I run with every render');

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]); // watching term, set up the timer to update setDebouncedTerm

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {  // base URL
                // const response = await axios.get('https://en.wikipedia.org/w/api.php', {  // base URL
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            });

            setResults(data.query.search);
            // setResults(response.data.query.search);
        };
        // console.log('I only after every render and at initial');
        if (debouncedTerm) {
            search();
        }
    }, [debouncedTerm]);

    // useEffect(() => {

    //     if (term && !results.length) {
    //         search();
    //     } else {
    //         const timeoutId = setTimeout(() => {
    //             if (term) {
    //                 search();
    //             }
    //         }, 1000);

    //         return () => {
    //             clearTimeout(timeoutId);
    //         };
    //     }
    // }, [term, results.length]);

    const renderedResults = results.map((result) => {
        const regex = /(<([^>]+)>)/gi;  //NEW
        const cleanSnippet = result.snippet.replace(regex, ""); //NEW 

        return ( // {result.snippet} was replaced with {cleanSnippet} 
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {cleanSnippet}
                    {/* {result.snippet} */}
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input value={term} onChange={event => setTerm(event.target.value)} className="input" />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;