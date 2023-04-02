import React from 'react'

export default function InputNameUser(props) {
    return (
        <div>
            <input onChange={(e)=>props.setUpdateName(e.target.value)} value={props.updateName} placeholder="Enter your Name"/>
        </div>
    )
}
