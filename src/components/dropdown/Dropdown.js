import React, { useState, useEffect, useRef } from 'react';

function Dropdown({options, selected, setSelected}) {


    const [display, setDisplay] = useState(false)
    const ref = useRef()

    const renderedOptions = options.filter(({value}) => selected.value != value).map((option) => {
        return (
            <div 
                key={option.value}  
                className="item"
                onClick={() => setSelected(option)}
            >
                {option.label}
            </div>
        )
    })

    const onDropDownClick = () => {
        setDisplay(!display)
    }

    const setGlobalEventClick = () => {
        document.body.addEventListener('click', (e) => {
            if(ref.current.contains(e.target)){
                return
            }
            setDisplay(false)
        })
    }

    useEffect( setGlobalEventClick , [])

    return (
        <div  ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div 
                    onClick={onDropDownClick}
                    className={`ui selection dropdown ${display ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${display ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;