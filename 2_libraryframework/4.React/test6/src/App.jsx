import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Editor from './components/Editor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  )
}

export default App
