import React from 'react';

function Dropdown({options, selected, setSelected}) {

    

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

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className="menu visible transition">
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;