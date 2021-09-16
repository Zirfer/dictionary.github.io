import React, { useContext } from 'react';
import { langContext } from '../context/langContext'
// Languaje
import { FormattedMessage } from 'react-intl'

const Base = () => {

    const lang = useContext(langContext)

    const [data, setData] = React.useState({
        word: ''
    })

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSearch = (event) => {
        if (window.document.frmedit.word.value = '' != '') {
            searchMeaning(event)
        } else {
            handleClear()
            switch (lang.getLanguaje()){
                case 'en':
                    window.alert("There is no word to search")
                    break;
                case 'es':
                    window.alert("No hay una palabra a buscar")
                    break; 
            }
        }
    }

    const searchMeaning = async (event) => {
        event.preventDefault()
        fetch("https://api.dictionaryapi.dev/api/v2/entries/" + lang.getLanguaje() + "/" + data.word)
            .then((res) => res.json())
            .then((response) => {
                if (response.title == null) {
                    response.map(Item => {
                        const itemInside1 = Item.meanings
                        itemInside1.map((Item1, Index1) => {
                            if (Index1 == 0) {
                                const itemInside2 = Item1.definitions
                                var txtMeaning = ''
                                var txtExample = ''
                                var countMeaning = 0
                                var countExample = 0
                                itemInside2.map((Item2, Index2) => {
                                    if (Item2.definition != undefined) {
                                        if (txtMeaning != '') { txtMeaning = txtMeaning + '\n' }
                                        countMeaning++
                                        txtMeaning = txtMeaning + countMeaning + ') ' + Item2.definition
                                    }
                                    if (Item2.example != undefined) {
                                        if (txtExample != '') { txtExample = txtExample + '\n' }
                                        countExample++
                                        txtExample = txtExample + countExample + ') ' + Item2.example
                                    }
                                })
                                // ahora si insertarlo
                                window.document.frmedit.meaning.value = txtMeaning
                                if (txtExample == '') {
                                    switch (lang.getLanguaje()){
                                        case 'en':
                                            txtExample = 'No example'
                                            break;
                                        case 'es':
                                            txtExample = 'No hay ejemplo'
                                            break; 
                                    }
                                }
                                window.document.frmedit.example.value = txtExample
                            }
                        })
                    })
                } else {
                    window.document.frmedit.meaning.value = response.title + '\n' + response.message
                }
            });
    }

    const handleClear = () => {
        window.document.frmedit.word.value = ''
        window.document.frmedit.meaning.value = ''
        window.document.frmedit.example.value = ''
        data.word = ''
    }

    return (
        <div className="col-md-12">
            <div className="row card bg-dark text-light">
                <form id="frmedit" name="frmedit">
                    <label>
                        <FormattedMessage id="app.search" defaultMessage="Search for:" />
                    </label>
                    <div className="clr"></div>
                    <input id="word" type="text" className="form-control bg-secondary text-light" name="word" onChange={handleInputChange}></input>
                    <div className="clr"></div>
                    <label>
                        <FormattedMessage id="app.meaning" defaultMessage="Meaning:" />
                    </label>
                    <div className="clr"></div>
                    <textarea name="meaning" disabled className="form-control bg-secondary text-light"></textarea>
                    <div className="clr"></div>
                    <label>
                        <FormattedMessage id="app.example" defaultMessage="Example:" />
                    </label>
                    <div className="clr"></div>
                    <textarea name="example" disabled className="form-control bg-secondary text-light"></textarea>
                    <div className="clr"></div>
                    <button type="button" className="btn btn-primary" onClick={handleSearch}>
                        <FormattedMessage id="app.btn-search" defaultMessage="Search" />
                    </button>
                    <label className="Label15"></label>
                    <button type="button" className="btn btn-success" onClick={handleClear}>
                        <FormattedMessage id="app.btn-clean" defaultMessage="Clean" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Base;