import React from "react";

const PlayersSearch =(props)=>{
    return (
        <>
            <input onChange={(e)=>props.setPlayers(e.target.value)} placeholder="Players"/>
        </>
    )
}
export default PlayersSearch