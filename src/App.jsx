import { createContext, useState } from 'react'
import './App.css'
import ChildA from './component/ChildA'
import Home from './Home'
const themeContext = createContext()

function App() {
  const [theme , setTheme] = useState("light")

  return (
    <>
      <themeContext.Provider value={{theme, setTheme}}>
        <div id='container' style={{backgroundColor: theme === 'light' ? "green" : "black"}}>
        <ChildA/>
        <Home/>
      </div>
      
      </themeContext.Provider>
    </>
  )
}

export default App
export {themeContext}
