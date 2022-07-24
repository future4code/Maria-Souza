import { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Part01 from '../../components/Part01/Part01'
import Part02 from '../../components/Part02/Part02'
import Part03 from '../../components/Part03/Part03'
import Part04 from '../../components/Part04/Part04'
import Part06 from '../../components/Part06/Part06'
import Part05 from '../../components/Part05/Part05'
import ToTheTop from '../../components/ToTheTop/ToTheTop'

export const HomePage = (props) => {

    let languageStoredInLocalStorage = localStorage.getItem("language")
    let [language, setLanguage] = useState(
      languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
    )

    function storeLanguageInLocalStorage(language) {
        localStorage.setItem("language", language)
      }

    return (
        <div>
            <Header 
                language={language}
                handleSetLanguage={language => {
                  console.log("Cheguei aqui", language)
                  setLanguage(language)
                  storeLanguageInLocalStorage(language)
                }} />
            <Part01 
               language={language} />
            <Part02 
                language={language} />
            <Part03
                language={language} />
            <Part04
                language={language} />
            <Part05
                language={language} />
            <Part06
                language={language} />
            <Footer />
            <ToTheTop />
        </div>
    )
}

export default HomePage