import React, { useState } from 'react';
import ItemList from './item-list/ItemList';

const Accordion = ({items}) => {

    // State
    const [activeIdx, setActiveIdx] = useState(null)

    const renderedItems = items.map((item, idx) => <ItemList key={item.title} {...item} idx={idx} setActiveIdx={setActiveIdx} activeIdx={activeIdx}/>)

    return (
        <div className='ui styled accordion'>
           {renderedItems} 
        </div>
    );
}

export default Accordion;