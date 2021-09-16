import React, { useContext } from 'react'
// Languaje
import { FormattedMessage } from 'react-intl'
import en from '../img/spain.png'
import es from '../img/united-kingdom.png'
import { langContext } from '../context/langContext'

const Header = () => {
    const getLanguaje = useContext(langContext)
    return (
        <div className="col-md-12">
            <header className="card bg-dark text-light">
                <div>
                    <h1><FormattedMessage id="app.title" defaultMessage="My Dictionary" /></h1>
                    <div className="flags">
                        <button onClick={() => getLanguaje.setLanguaje('en-US')}><img src={es} alt="" /></button>
                        <button onClick={() => getLanguaje.setLanguaje('es-ES')}><img src={en} alt="" /></button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header