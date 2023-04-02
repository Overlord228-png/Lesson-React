import React, {useState} from "react";
import HeaderItem from "../components/HeaderItem";
import axios from "axios";


const TranslateItem = () =>{
    const [translated, setTranslated] = useState('')
    const [word, setWord] = useState('') /// for перевода

    const [keyLanguages,setKeyLanguages] = useState('pl') /// Languages key
    const [languagesFirstly,setLanguages] = useState([
        {language: 'ru', key:'Russia '},
        {language: 'uk', key:'United Kingdom'},
        {language: "pl", key:'Poland'},
        {language: 'en', key:'English'},
        {language: 'es', key:'Spanish'},
    ])

    const [keyLanguagesSecond, setKeyLanguagesSecond] = useState("en")

    const translate = async () => {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", translated);
        encodedParams.append("target", keyLanguagesSecond);
        encodedParams.append("source", keyLanguages);
    
        console.log('q',translated)
        console.log('target',keyLanguagesSecond)
        console.log('source',keyLanguages)

        const options = {
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': 'a336873bd1msh5e2af580f88c8b5p1fba94jsnbab3bf2d9ef6',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            data: encodedParams
        };
    
        axios.request(options).then(function (response) {
            setWord(response.data.data.translations[0].translatedText);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const reversesTrans =()=>{

        // 1- Чтобы второй селект так же менялся как и первый от активного ключа

        //1 - keyLanguages
        //2 - keyLanguagesSecond

        const tmp = keyLanguages
        setKeyLanguages(keyLanguagesSecond)
        setKeyLanguagesSecond(tmp)

        /*
        if(keyLanguages){ //ua === true / ua === false
            setKeyLanguagesSecond(languagesFirstly)
            console.log(1) /// проверка if
        } else {
            setKeyLanguages(keyLanguages)
        }
        */
        ///console.log(1) /// проверка того что я попадаю сюда
    }
    let x = 2;
    let y = 3;
    let tmp = x // tmp = 2
    x = y //x = 3
    y = tmp // y = 2
    console.log(tmp, "x "+x, "y "+y)

    return(
        <>
            <HeaderItem />
            <div>
                <select onChange={(e)=>setKeyLanguages(e.target.value)}>
                    {

                        languagesFirstly.map(language=> {
                            if (language.language == keyLanguages) {
                                return (
                                <option selected={true} key={language.key} value={language.language}>
                                    {language.key}
                                </option>)
                            } else {
                                return (
                                    <option key={language.key} 
                                    value={language.language}>
                                        {language.key}
                                    </option>)
                            }
                        })
                    }
                </select>
                <textarea translate={translate} value={translated} onChange={(e)=>setTranslated(e.target.value)}>
                </textarea>
            </div>

            <br></br>
            <br></br>

            <div>
                <button onClick={translate}>Translate</button>
                <button onClick={reversesTrans}>⇄</button>
            </div>

            <br></br>
            <br></br>

            <div>
                <select onChange={(e)=>setKeyLanguagesSecond(e.target.value)}>
                    {
                        languagesFirstly.map(language=>{
                            if(language.language === keyLanguagesSecond){
                                return(
                                    <option selected={true} key={language.key} value={language.language}>
                                    {language.key}
                                    </option>
                                )
                            } else{
                                return (<option key={language.key} 
                                    value={language.language}>
                                        {language.key}
                                    </option>)
                            }
                        })
                    }
                </select>
                <textarea value={word} onChange={(e)=>setWord(e.target.value)}></textarea>
            </div>
        </>
    )
}
export default TranslateItem

/*
    1 - Пофиксить ошибку на будущее обновление +++
    2 - Добавить на страничке перевода - сменить языки местами
*/