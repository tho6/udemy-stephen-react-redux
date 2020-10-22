import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {/* {props.message || 'Loading...'} */}
                {props.message}
            </div>
        </div>
    );
};

// Default
Spinner.defaultProps = { // can also define something on the function itself, and is going to provide some default properties to this component
    message: 'Loading...'
}

export default Spinner;