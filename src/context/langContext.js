import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
import langEnglish from '../lang/en-US.json'
import langSpanish from '../lang/es-ES.json'

const langContext = React.createContext()

const LangProvider = ({ children }) => {

    const [messages, setMessages] = useState(langEnglish)
    const [locale, setLocale] = useState('en-US')
    const [selectedLanguaje, setSelectedLanguaje] = useState('en')

    const getLanguaje = () => {
        return selectedLanguaje
    }

    const setLanguaje = (languaje) => {
        handleClear()
        switch (languaje) {
            case 'en-US':
                setMessages(langEnglish)
                setLocale(languaje)
                setSelectedLanguaje('en')
                break;
            case 'es-ES':
                setMessages(langSpanish)
                setLocale(languaje)
                setSelectedLanguaje('es')
                break;
            default:
        }
    }

    const handleClear = () => {
        window.document.frmedit.word.value = ''
        window.document.frmedit.meaning.value = ''
        window.document.frmedit.example.value = ''
    }

    return (
        <langContext.Provider value={{ setLanguaje: setLanguaje, getLanguaje: getLanguaje }}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    )
}

export { LangProvider, langContext }