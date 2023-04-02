import React from 'react'

export default function BtnAddMark(props) {
    return (
        <div>
            <button onClick={()=>props.UpdateMark()}>
                Add Mark
            </button>
        </div>
    )
}
