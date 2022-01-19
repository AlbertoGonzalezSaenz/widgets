import React, { useState } from 'react';

function Dropdown({options, selected, setSelected}) {

    const [display, setDisplay] = useState(false)

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

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div className={`ui selection dropdown ${display ? 'visible active' : ''}`}>
                    <i 
                        className="dropdown icon"
                        onClick={onDropDownClick}
                    ></i>
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