import React, {useState, useEffect} from "react";
import HeaderItem from "../components/HeaderItem";
import axios from 'axios'
import App from "../App.css"


const FutureUpdate = ()=>{
    const [languagesCity,setLanguages] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': 'a336873bd1msh5e2af580f88c8b5p1fba94jsnbab3bf2d9ef6',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
        };
        axios.request(options).then(function (response) {
            console.log(response);
            setLanguages(response.data.data.languages)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])


    console.log(languagesCity)
    return(
        <>
            <HeaderItem/>
            {
                <div onChange={(e)=>setLanguages(e.target.language)}>
                    {
                        languagesCity.map(languages=>
                            <p key={languages.key} value={languages.key}>
                                {languages.language}
                            </p>
                            )
                    }
                </div>
            }
        </>
    )
}
export default FutureUpdate