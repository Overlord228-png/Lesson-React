import React, {useState,useMemo} from "react";
import HeaderItem from "../components/HeaderItem";
import '../App.css';

//  a105bd7450e44e75926ed96bf9beac5a

const SearchByCity =()=>{

    /*
        1 - state city
        2 - state inputText


        btn - onClick => goWeather
    */


    const [ citys, setCitys ] = useState([])
    const [ search, setSearches ] = useState('')
    const goWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a105bd7450e44e75926ed96bf9beac5a&units=metric`)
        .then(resp=>{
            resp.json()
        })
        .then(data=>{
            /*
            document.querySelector(".search__city_weater").textContent = data.name
            document.querySelector(".search__city_weater").innerHTML = Math.round(data.main.temp - 273) + "&deg";
            */
            console.log(data)
        })
    }
    const searchByCity = () =>{
        let newCityItems = []
        for (const city of citys){
            if (city.name.startsWith(search)){
                newCityItems.push(city)
            }
        }
        return newCityItems
    }
    const searchedCitys = useMemo(searchByCity, [search, citys])

    return(
        <>
            < HeaderItem />
            <h1 className="title">Поиск погоды по городу</h1>
            <input searchByCity={searchedCitys} setSearches={setSearches} search={search}/>
            <button type="" onClick={goWeather}>Search</button>
            <div className="search__city_weater"></div>
        </>
    )
}
export default SearchByCity