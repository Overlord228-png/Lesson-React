import React from 'react'

export default function BtnUpdate(props) {
    return (
        <div>
            <button onClick={()=>props.UpdateUser()}>
                Update
            </button>
        </div>
    )
}
