import React, {useEffect,useState} from "react";
import HeaderItem from "../components/HeaderItem";
import '../App.css';

// a105bd7450e44e75926ed96bf9beac5a

const CapitalCitiesCIS =()=>{
    const [name,setName] = useState('')
    const [weather,setWeather] = useState()
    const goWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a105bd7450e44e75926ed96bf9beac5a&units=metric`)
        .then(resp=>{
            return resp.json()
        })
        .then(data=>{
            setWeather(data)
        })
    }

    useEffect(() => {
        if(name !== ""){
            goWeather()
        }
    }, [name])

    console.log(weather)

    return(
        <>
            <HeaderItem />
            <h1 className="title">Поиск погоды по области</h1>
            <ul>
                <li onClick={()=>setName("Киев")} className="weather__city">Киев</li>
                <li onClick={()=>setName("Одесса")} className="weather__city">Одесса</li>
                <li onClick={()=>setName("Днепр")} className="weather__city">Днепр</li>
                <li onClick={()=>setName("Запорожье")} className="weather__city">Запорожье</li>
            </ul>
            {
            weather ?
            <>
            <br/>
                <p>temp: {Math.round(weather.main.temp)+'°'}</p>
                <p>temp max: {Math.round(weather.main.temp_max)+'°'}</p>
                <p>temp min: {Math.round(weather.main.temp_min)+'°'}</p>
                <p>feels like: {Math.round(weather.main.feels_like)+'°'}</p>
            </> 
            : <p>BE BETER</p>
            }
        </>
    )
}
export default CapitalCitiesCIS