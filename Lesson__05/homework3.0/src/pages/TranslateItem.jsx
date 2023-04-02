import React, {useState} from "react";
import HeaderItem from "../components/HeaderItem";

const TranslateItem = () =>{
    const [translated, setTranslated] = useState('')
    const [word, setWord] = useState('')

    const translate = () => {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", `${translated}`);
        encodedParams.append("target", "en");
        encodedParams.append("source", "ru");

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '6e6d8a4b09msh2a51f48fff4f896p1a14ddjsn05de3b71260e',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: encodedParams
        };

        fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
            .then(response => {
                return response.json()
            })
            .then(response=>{
                setWord(response.data.translations[0].translatedText);
            })
            .catch(err => {
                console.error(err)
            });
    }

    return(
        <>
            <HeaderItem />
            <div>
                <p>RU</p>
                <textarea translate={translate} value={translated} onChange={(e)=>setTranslated(e.target.value)}>
                </textarea>
            </div>
            <div>
                <p>English</p>
                <textarea value={word} onChange={(e)=>setWord(e.target.value)}></textarea>
            </div>
            <button onClick={translate}>Translate</button>
        </>
    )
}
export default TranslateItem


/*
1->Cостояние хранящее в себе (слова,буквы и т.д.) для поиска  +
    * При изменении textarea - состояние должно изменять      +
    * Если я изменю состояние - textarea должен изменится     +
2 - сделать новую канмтанту для переведенных слов             +
    * переопределить константу data на новую идоставать от туда слова
    *
*/