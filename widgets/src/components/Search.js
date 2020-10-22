import React, { useState, useEffect } from 'react';

const Search = () => {
    const [term, setTerm] = useState('');

    console.log('I run with every render');

    useEffect(()=>{
        console.log('I only after every render and at intial ');
    },[term]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input value={term} onChange={event => setTerm(event.target.value)} className="input" />
                </div>
            </div>
        </div>
    );
}

export default Search;