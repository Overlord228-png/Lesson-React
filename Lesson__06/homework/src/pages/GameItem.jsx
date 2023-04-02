import React, {/*useEffect,*/useState} from "react";
import HeaderItem from "../components/HeaderItem";

import axios from 'axios'

const GameItem =()=>{
    const [games,setGame] = useState("")
    /*
    const [error,setError] = useState(false)
    const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/games',
        params: {date: '2022-02-12'},
        headers: {
            'X-RapidAPI-Key': '6e6d8a4b09msh2a51f48fff4f896p1a14ddjsn05de3b71260e',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    console.log(games)
    */
    return (
        <>
            <HeaderItem />
            <input placeholder="games" />
        </>
    )
}
export default GameItem