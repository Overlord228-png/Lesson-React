import React from 'react'

export default function InputAgeUser(props) {
    return (
        <div>
            <input onChange={(e)=>props.setUpdateAge(e.target.value)} value={props.updateAge} placeholder="Enter your Age"/>
        </div>
    )
}
