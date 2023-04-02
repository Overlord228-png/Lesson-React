import React from 'react'

export default function User(props) {
    console.log(props)
    return (
        <div>
            {
                props.name
            }
            {
                props.age
            }
            {
                props.mark.map((mark,idx)=> <p key={idx}>{mark}</p>)
            }
        </div>
    )
}
