import React, { useState, useEffect, useRef } from 'react';

const Dropdown = (props) => {
    const { label, options, selected, onSelectedChange } = props;
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current && ref.current.contains(event.target)) { // the contain method includes all DOM elements
                return; // if its true, then return and not do anything else inside of here
            }
            // console.log(event.target);
            // console.log('CLICK!!')
            setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick
        // (event) => {
        //     if (ref.current && ref.current.contains(event.target)) { // the contain method includes all DOM elements
        //         return; // if its true, then return and not do anything else inside of here
        //     }
        //     // console.log(event.target);
        //     // console.log('CLICK!!')
        //     setOpen(false);
        // }, { capture: true }        
        );

        return () => { // cleanup function
            document.body.removeEventListener('click', onBodyClick);
        }
    }, []); // only run one time

    const renderOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null; // null means don't render anything
        }

        return (
            <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>{option.label}</div>
        );
    })

    // console.log(ref.current);

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderOptions}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dropdown;