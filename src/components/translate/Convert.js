import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {

    const [translated, setTranslated] = useState('')
    const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

    useEffect(() => {
        console.log('new lnaguage or text')
        const doTranslation = async () => {
            const {data: { data: { translations }} } = await axios.post('https://translation.googleapis.com/language/translate/v2',{}, {params: {
                q: text,
                target: language.value,
                key: API_KEY
            }})

            setTranslated(translations[0].translatedText)
        }

        doTranslation()


    },[language, text])
    return (
        <div>
            {translated}
        </div>
    );
}

export default Convert;