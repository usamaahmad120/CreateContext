import React, { createContext, useState } from 'react'
import Langugae from './component/Langugae'
import LanguageText from './component/Langugae';
const languageContext = createContext();

function Home() {
  const [lang,setLang] = useState('en')
  return (
    <div>
      <languageContext.Provider value={{lang,setLang}}>
      <div>
      <LanguageText/>
      </div>
      </languageContext.Provider>
      
    </div>
  )
}

export default Home
export {languageContext}