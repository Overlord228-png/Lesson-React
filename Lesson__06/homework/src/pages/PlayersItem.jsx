import React,{useState} from "react";
import HeaderItem from "../components/HeaderItem";
import PlayersSearch from "../components/Players/PlayersSearch";
import PlayersIdSearch from "../components/Players/PlayersIdSearch";
import PlayersList from "../components/Players/PlayersList";
///import axios from "axios";

const PlayersItem = () =>{
    const [players,setPlayers]= useState('') // Players
    const [playersId,setPlayersId]= useState('') // PlayersId
    console.log(players)
    console.log(playersId)
    return(
        <>
        {
            /*
            <HeaderItem />
            <PlayersSearch setPlayers={setPlayers}/>
            <PlayersIdSearch setPlayersId={setPlayersId}/>
            
            */
        }
            <PlayersList setPlayers={setPlayers}/>
        </>
    )
}
export default PlayersItem