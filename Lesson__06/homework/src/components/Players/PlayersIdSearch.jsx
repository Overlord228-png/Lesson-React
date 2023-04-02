import React from 'react';

const PlayersIdSearch =(props)=>{
    return (
        <>
            <input onChange={(e)=>props.setPlayersId(e.target.value)} placeholder="Players per id"/>
        </>
    )
}
export default PlayersIdSearch