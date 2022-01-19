import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {

    const [translated, setTranslated] = useState('')
    const [debouncedText, setDebouncedtext] = useState(text)
    const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedtext(text)
        }, 700);

        return () => {
            clearTimeout(timerId)
        }
    }, [text])

    useEffect(() => {
        console.log('new lnaguage or text')
        const doTranslation = async () => {
            const {data: { data: { translations }} } = await axios.post('https://translation.googleapis.com/language/translate/v2',{}, {params: {
                q: debouncedText,
                target: language.value,
                key: API_KEY
            }})

            setTranslated(translations[0].translatedText)
        }
        
        doTranslation()


    },[language, debouncedText])
    return (
        <div>
            <h1 className='ui header'>{translated}</h1>
        </div>
    );
}

export default Convert;