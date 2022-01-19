import React, { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import Convert from './Convert';
import { options } from './TranslateOptions'

const Translate = () => {

    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')

    // const handleLanguageSubmit = (e) => {
    //     e.preventDefault()


    // }

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown 
                label="Select A Language" 
                options={options} 
                selected={language} 
                setSelected={setLanguage}
            />
            <hr/>
            <h3 className='"ui header'>Output</h3>
            <Convert language={language} text={text}/>
        </div>
    );
}

export default Translate;