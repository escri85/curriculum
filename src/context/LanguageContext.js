
import spanish from '../lang/es.json'
import { createContext, useState } from 'react';
import {IntlProvider} from 'react-intl'

export const LanguageContext = createContext()

const navigatorLocale = navigator.languages[1]
const getMessages = (locale) => {
    if(locale==='es')return spanish

    return spanish
}

const LanguageWrapper = (props) =>{
    const [locale,setLocale]=useState(navigatorLocale);
    const [messages,setMessages]=useState(spanish);


    const changeLanguage = (newLanguagesLocale) =>{
        setLocale(newLanguagesLocale);
        setMessages(getMessages(newLanguagesLocale))
     }

    return(
        <LanguageContext.Provider value={{locale,changeLanguage}}>
            <IntlProvider locale={locale} messages={messages}>
                {props.children}
            </IntlProvider>
        </LanguageContext.Provider>
        )
        
    }
    



export default LanguageWrapper