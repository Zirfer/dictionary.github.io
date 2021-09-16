import React from 'react'
// Languaje
import { FormattedMessage } from 'react-intl'

const Footer = () => {
    return (
        <div className="col-md-12">
            <footer id="footer" className="footer">
                <p className="text-center">
                    <FormattedMessage id="app.copyright" defaultMessage="Copyright " />
                    &copy;
                    <FormattedMessage id="app.footer" defaultMessage=" My Dictionary" /> 2021</p>
            </footer>
        </div>
    )
}

export default Footer