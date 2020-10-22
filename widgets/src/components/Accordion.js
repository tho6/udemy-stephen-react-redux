import React, { useState } from 'react';

const Accordion = (props) => {
    const { items } = props;
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => { // going to receive the index of the item that was clicked on
        // console.log('Title clicked', index)
        setActiveIndex(index);
    };

    const renderItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`} >
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })

    return <div className="ui styled accordion">
        {renderItems}
    </div>
};

export default Accordion;