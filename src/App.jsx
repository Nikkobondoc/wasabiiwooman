import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Christmas from './components/Christmas'
import Train from './components/Train'
import Sink from './components/Sink'
import Transition from './components/Transition'
import Horns from './components/Horns'
import Japser from './components/Japser'
import Shy from './components/Shy'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Christmas />
    <Train />
    <Sink />
    <Transition />
    <Horns />
    <Japser />
    <Shy />
    <About />
    </>
  )
}

export default App
