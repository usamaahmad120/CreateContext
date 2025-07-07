import React, { useContext } from 'react'

import {languageContext} from '../Home'


function Langugae() {
  const {lang,setLang} = useContext(languageContext);
   const text = {
    en: "Welcome, Usama!",
    ur: "خوش آمدید اسامہ!"
  };

  function toggleLanguage() {
    setLang(lang === "en" ? "ur" : "en");
  }
  return (
    <>
    <h1>{text[lang]}</h1>
    <div id="lang-button">
       
      <button onClick={toggleLanguage}>
        {lang === "en" ? "Urdu" : "English"} Mein Dikhaye
      </button>
    </div>
    </>
  )
}

export default Langugae