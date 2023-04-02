import React from 'react'


function NameChange(props) {
    return (
        <div>
            <input onChange={(e)=>props.setRefreshName(e.target.value)} value={props.value} placeholder="change name"/>
        </div>
    )
}
export default NameChange