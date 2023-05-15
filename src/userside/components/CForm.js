import React, { useEffect, useState } from 'react'
import Snackbar from '@mui/material/Snackbar';

const CForm = ({ inputString, onChildData }) => {


    const [contentBody, setContentBody] = useState(null)
    const [sbMessage, setSbMessage] = useState('')

    const snakeToName = (snakeString) => {
        return snakeString.split('_').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')
    }

    useEffect(() => {

        const tempWordList = inputString.split(' ')

        let currentItem = ""


        let body = ''

        const eleStartList = ['#h', '#p']

        for (const word of tempWordList) {

            if (eleStartList.includes(word)) {
                body += currentItem
                currentItem = ""
                continue
            }

            if (word.replace('\n', '').startsWith('#br')) {
                let count = +word.split('#br')[1]
                count = (count > 0 ? (count + 1) : 2)
                currentItem += Array(count).join("<br/>")
                continue
            }

            if (word.replace('\n', '') === '#he') {
                body += `<h1 class='text-center'>${currentItem?.replace('#h', '')}</h1>`
                currentItem = ""
                continue
            }

            if (word.replace('\n', '') === '#pe') {
                const content = `<p class="mb-0">${currentItem?.replace('#p', '')}</p>`
                body += content
                currentItem = ""
                continue
            }

            if (word.replace('\n', '') === '#b') {
                currentItem += '<strong>'
                continue
            }

            if (word.replace('\n', '') === '#be') {
                currentItem += '</strong>'
                continue
            }

            if (word.replace('\n', '').startsWith('#i')) {
                const key = word.replace('\n', '').split('#i_')[1]
                const placeHolder = snakeToName(key)
                currentItem += `<input class="consent-form-input" name="${key}"  type="text" placeholder="${placeHolder}" /> &nbsp;`
                continue
            }

            currentItem += `${word} `
        }

        body += currentItem

        setContentBody(<div dangerouslySetInnerHTML={{ __html: body }} ></div>)

    }, [inputString])

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const payLoad = {};

        for (const [key, value] of formData.entries()) {
            if (!value) {
                setSbMessage(`${snakeToName(key)} Cannot be empty`)
                return
            }

            payLoad[key] = value
        }

        onChildData(payLoad)

    }


    return (
        <>
            <Snackbar
                open={sbMessage !== ''}
                autoHideDuration={6000}
                onClose={() => setSbMessage('')}
                message={sbMessage}
            />
            <form className='p-4' onSubmit={onSubmit} >
                {contentBody && (contentBody)}
                <button type='submit' className='color-btn px-5 py-2' >Submit</button>
            </form>
        </>
    )
}

export default CForm