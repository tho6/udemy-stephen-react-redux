import { useEffect, useState } from 'react';

const Route = (props) => {
    const { path, children } = props;
    const [currentPath, setCurrentPath] = useState(window.location.pathname); // just to get our Route to update

    useEffect(() => {
        const onLocationChange = () => {
            // console.log('Location change');
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        return () => { // cleanup function
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return currentPath === path ? children : null;
}

export default Route;