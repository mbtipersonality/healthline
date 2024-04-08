import './App.css'
import React from 'react'
import search from './search'

function App() {
  const handleClick = () => {
    const randSearch = search[Math.floor(Math.random() * 2997 )]

    window.location = `https://www.google.com/search?q=site%3Ahealthline.com+${randSearch}&sca_esv=579769985&rlz=1C1FKPE_enIN956IN956&ei=lOxIZZytJ5mW4-EPp9SWWA`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
