import React from 'react';

function Search({term, setTerm, renderedResults}) {

    const handleSubmit = (e) => {
        // e.preventDefault()
        console.log('form submitted!')
    }

    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    return (
        <div>
            <div 
                className='ui form'
                onSubmit={handleSubmit}
            >
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input 
                        className='input'
                        onChange={handleChange}
                        value={term}
                    />
                </div>
            </div>

            <div className='ui celled list'>
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;