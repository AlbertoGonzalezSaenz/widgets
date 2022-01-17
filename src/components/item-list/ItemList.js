import React from 'react';

function ItemList({title, content, idx, setActiveIdx, activeIdx}) {

    const active = activeIdx === idx ? 'active' : ''

    const handleClick = () => {
        console.log(`title ${title} clicked!`)
        setActiveIdx(idx)
    }

    return (
        <>
            <div 
                className={`title ${active}`}
                onClick={handleClick}>
                <i className='dropdown icon'/>
                {title}
            </div>
            <div className={`content ${active}`}>
                <p>
                    {content}
                </p>
            </div>
        </>
    );
}

export default ItemList;