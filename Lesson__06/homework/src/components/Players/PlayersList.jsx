import React, {useEffect,useState} from "react";
import axios from "axios";

const PlayersList =()=>{
    const [players,setPlayers]= useState('')
    const [error,setError] = useState(false)
    const loadeingPlayers = async()=>{
        
        const options = {
            method: 'GET',
            url: 'https://api-nba-v1.p.rapidapi.com/seasons',
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
        //const players = response.data
        //setPlayers(players)
    }

    useEffect(()=>{
        loadeingPlayers()
    }, [])

    /*
    if(error === true) {
        return (<h1>Error loading page</h1>)
    } else {
        return(
            <div>
                {players.map(player=><h4>{player}</h4>)}
            </div>
        )
    }
    */
   return <h1>loading</h1>
}
export default PlayersList;