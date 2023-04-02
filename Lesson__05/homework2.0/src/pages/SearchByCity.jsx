import React, {useState} from "react";
import HeaderItem from "../components/HeaderItem";
import '../App.css';

const SearchByCity =()=>{
    const [search, setSearch] = useState('') 
    const [cities,setCities] = useState([]) 
    
    const goWeather = () =>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a105bd7450e44e75926ed96bf9beac5a&units=metric`)
        .then(response=> {return response.json()})
        .then(weather=>setCities([...cities,weather]))
    }

    const translate = () => {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", "Hello, world!");
        encodedParams.append("target", "ru");
        encodedParams.append("source", "en");

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
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    return (
        <>
        <HeaderItem/>
        <h1 className="title">Поиск погоды по городу</h1>
        <div>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} />
            <button onClick={goWeather} >SEARCH</button>
            {
                cities.map(weather => <div key={weather.id}>
                    <p>name: {weather.name}</p>
                    <p>temp: {Math.round(weather.main.temp)+'°'}</p>
                    <p>temp max: {Math.round(weather.main.temp_max)+'°'}</p>
                    <p>temp min: {Math.round(weather.main.temp_min)+'°'}</p>
                    <p>feels like: {Math.round(weather.main.feels_like)+'°'}</p>
                </div>)
            }
            <button onClick={translate}>click</button>
        </div>
        </>
    )

}
export default SearchByCity

/*

1 - Cостояние хранящее в себе город для поиска           +
    * При изменении инпута - состояние должно изменять   +
    * Если я изменю состояние - инпут должен изменится   +
2 - Состояние для хранения погоды                        +
    * Изначально должно быть типов данных - массив       +
3 - Подписаться на события при нажатии на кнопку поиска  +
    * При нажатии на кнопку должен происходить сетевой запрос +
    где мы будем отправлять город по которому хотим получить погоду +
    и полученную погоду сохраняем в состояние массив погод +
4 - В ретерн мы перебираем все города и отрисовываем их погоду +

*/

















