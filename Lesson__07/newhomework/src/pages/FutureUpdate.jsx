import HeaderItem from "../components/HeaderItem";
import React, {useState, useEffect} from "react";
import axios from 'axios'

const FutureUpdate = () => {
    const [futureLanguage, setFutureLanguage] = useState([])

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
            setFutureLanguage(response.data.data.languages)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <>
            <HeaderItem/>
            {
                <div onChange={(e)=>setFutureLanguage(e.target.language)}>
                    {
                        futureLanguage.map(languages=>
                            <p key={languages.key} value={languages.key}>
                                {languages.language}
                            </p>
                            )
                    }
                </div>
            }
        </>
    );
}
 
export default FutureUpdate;