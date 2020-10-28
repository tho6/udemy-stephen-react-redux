import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = (props) => {
    const { language, text } = props;
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => { // if text state changes before 500ms, cancel timer (this is cleanup function)
            clearTimeout(timerId);
        }
    }, [text]);

    useEffect(() => {
        // console.log('New language or text');
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, { // {data} is de-structured (should be the res.data)
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })

            setTranslated(data.data.translations[0].translatedText);
        };

        doTranslation();
    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}

export default Convert;