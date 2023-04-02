import React from 'react'

export default function AgeChange(props) {
    return (
        <div>
            <input onChange={(e)=>props.setRefreshAge(e.target.value)} value={props.value} placeholder='change age' />
        </div>
    )
}
