import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AppNavigation from './AppNavigation';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AppNavigation />
    </>
  )
}

export default App
