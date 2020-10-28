import React from 'react';

const Link = (props) => {
    const { className, href, children } = props;

    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) { // metaKey is Mac, ctrlKey is Windows
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href)

        const navEvent = new PopStateEvent('popstate'); // this is to communicate over to those root components that the URL as just changed 
        window.dispatchEvent(navEvent); // this is to communicate over to those root components that the URL as just changed 
    };

    return (
        <a onClick={onClick} className={className} href={href}>{children}</a>
    )
};

export default Link;