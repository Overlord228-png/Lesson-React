import React from 'react'

export default function InputMarkUser(props) {
    return (
        <div>
            <input onChange={(e)=>props.setUpdateMark(e.target.value)} value={props.updateMark}/>
        </div>
    )
}
