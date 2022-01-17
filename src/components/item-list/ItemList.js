import React from 'react';

function ItemList({title, content}) {

    const handleClick = () => {
        console.log(`${title} clicked!`)
    }

    return (
        <>
            <div 
                className='title active'
                onClick={handleClick}>
                <i className='dropdown icon'/>
                {title}
            </div>
            <div className='constent active'>
                <p>
                    {content}
                </p>
            </div>
        </>
    );
}

export default ItemList;