import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Christmas from './components/Christmas'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Christmas />
    </>
  )
}

export default App
