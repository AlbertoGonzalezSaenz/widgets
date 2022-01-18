import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Accordion from './components/accordion/Accordion'
import Search from './components/search/Search'

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
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
]

const App = () => {

  const [term, setTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const baseURL = 'https://en.wikipedia.org/w/api.php'

  const fetchWiki = () => {
    const search = async () => {
      // On the next line I created a variable search containing the values nested in the data returned by the fetch. I extracted the search values by destructuring three levels deep.
      // from data into query and finally into search
      const { data: { query : { search } } } = await axios.get(baseURL, {
        params : {
          action: 'query',
          list : 'search',
          origin: '*',
          format: 'json',
          srsearch: term  
        }
      })
      setSearchResults(search)
    }
    
    const curTimeout = setTimeout(() => {
      if(term){
        search()
      }
    }, 700)

    return () => {
      clearTimeout(curTimeout)
    }
    
    
  }

  const renderedResults = searchResults.map(({ title, snippet, pageid }) => {
    return (
      <div key={pageid} className='item'>
        <div className='right floated content'>
          <a 
            className='ui button'
            href={`https://en.wikipedia.org?curid=${pageid}`}
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>
            {title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: snippet}}/>
        </div>
      </div>
    )
  })

  useEffect(fetchWiki,[term])

  return (
    <div >
      <Search term={term} setTerm={setTerm}/>
      <div className='ui celled list'>
        {renderedResults}
      </div>
      <Accordion items={items}/>
    </div>
  );
}

export default App;
