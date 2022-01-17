import React from 'react'
import Accordion from './components/accordion/Accordion'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end Javascript Framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite Javascript Framework among engineers'
  },
  {
    title: 'How d you use React?',
    content: 'You use React by creating components'
  }
]

const App = () => {

  return (
    <div >
      App
      <Accordion items={items}/>
    </div>
  );
}

export default App;
