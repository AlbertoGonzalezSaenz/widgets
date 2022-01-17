import React from 'react';
import ItemList from '../item-list/ItemList';

const Accordion = ({items}) => {

    const renderedItems = items.map(item => <ItemList key={item.title} {...item}/>)

    return (
        <div className='ui styled accordion'>
           {renderedItems} 
        </div>
    );
}

export default Accordion;