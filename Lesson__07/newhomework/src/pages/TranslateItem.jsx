import React, {useState} from "react";
import HeaderItem from "../components/HeaderItem";
import axios from "axios";

const TranslateItem = () => {


    /*
        useState - хук для создания состояния. Изменения которого влечет за собой
        перерисовку компонента
    

        useEffect - хук для отслеживания изменения состояний. Имеет массив 
        зависимостей, если меняется любое состояние из массива зависмостей
        срабатывает функция описанные в useEffect. USEEFFECT Всегда срабатывает
        1 раз при рендеринге компонента. useEffect не может ничего возвращать,
        в нем нельзя использовать return


        useMemo - 1 в 1 как useEffect. ТОЛЬКО ОН МОЖЕТ ИСПОЛЬЗОВАТЬ РЕТЕРН


    */


    const [translated, setTranslated] = useState("")
    const [word, setWord] = useState('')

    /// for language which we are cute first
    const [languageFirst, setLanguageFirst] = useState("ru") 
    //languageFirstKey

    /// for translation of text from the first language
    const [languageSecond, setLanguageSecond] = useState("en")

    const [languagesModal, setLanguagesModal] = useState([
        {language: 'ru', key:'Russia '},
        {language: 'uk', key:'United Kingdom'},
        {language: "pl", key:'Poland'},
        {language: 'en', key:'English'},
        {language: 'es', key:'Spanish'},
    ])

    const translate =()=>{
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", translated);
        encodedParams.append("target", languageSecond);
        encodedParams.append("source", languageFirst);
    
        console.log('q',translated)
        console.log('target',languageSecond)
        console.log('source',languageFirst)

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

    const reversesTranslations =()=>{
        const takin = languageFirst

        setLanguageFirst(languageSecond)
        setLanguageSecond(takin)
    }

    return (
        <>
            <HeaderItem/>
            <div>
                <select onChange={(e)=>setLanguageFirst(e.target.value)}>
                    {
                        languagesModal.map(language=>{
                            if(language.language === languageFirst){
                                return (
                                    <option selected={true}
                                    key={language.key} value={language.language}>
                                        {language.key}
                                    </option>
                                )
                            } else {
                                return (
                                    <option key={language.key}
                                    value={language.language}>
                                        {language.key}
                                    </option>
                                )
                            }
                        })
                    }
                </select>

                <textarea translate={translate}
                value={translated}
                onChange={(e)=>setTranslated(e.target.value)}>
                </textarea>

                <br></br>
                <br></br>
                
                <div>
                    <button onClick={translate}>
                        Translate
                    </button>
                    <button onClick={reversesTranslations}>⇄</button>
                </div>
                
                <br></br>
                <br></br>

                <div>
                    <select onChange={(e)=>setLanguageSecond(e.target.value)}>
                        {
                            languagesModal.map(language=>{
                                if(language.language === languageSecond){
                                    return (
                                        <option selected={true}
                                        key={language.key} value={language.language}>
                                            {language.key}
                                        </option>
                                    )
                                } else {
                                    return (
                                        <option key={language.key}
                                        value={language.language}>
                                            {language.key}
                                        </option>
                                    )
                                }
                            })
                        }
                    </select>

                    <textarea value={word} onChange={(e)=>setWord(e.target.value)}></textarea>
                </div>
            </div>
        </>
    );
}
 
export default TranslateItem;