import React from 'react'

export default function ButtonsChange(props) {
    return (
        <div>
            <button onClick={()=>props.RefreshUser()}>
                Change
            </button>
        </div>
    )
}
