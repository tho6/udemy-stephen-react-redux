import React from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: 'What is React?',
        content: 'React is a Frontend JavaScript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

export default () => {
    return (
        // <h1>Widgets App</h1>
        <div>
            {/* <Accordion items={items} /> */}
            <Search />
        </div>
    )
};