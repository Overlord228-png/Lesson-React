import React from 'react'

export default function InputAdd(props) {
    return (
        <div>
            <input onChange={(e)=>props.setSearc(e.target.value)} value={props.value} placeholder="search"/>
        </div>
    )
}
