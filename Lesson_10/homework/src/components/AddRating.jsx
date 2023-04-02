import React from 'react'

function AddRating(props) {
    return (
        <div>
            <input onChange={(e)=>props.setAddRating(e.target.value)} value={props.value} placeholder='add reating' />
        </div>
        )
}
export default AddRating