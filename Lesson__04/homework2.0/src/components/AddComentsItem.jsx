import React from 'react'
import { useState } from 'react'

const AddComentsItem = (props) => {
    const [formData, setFormData] = useState({name:"", body: ""})
    const addCommentForm = () => {
        props.addComment({...formData})
        setFormData({name: "", body: ""})
    }
    return (
        <div>
            <input placeholder="Enter name" onChange={(e)=>setFormData({...formData,name: e.target.value})} value={formData.name} className="input"/>
            <input placeholder="Enter body" onChange={(e)=>setFormData({...formData,body: e.target.value})} value={formData.body} className="input"/>
            <input placeholder="Enter email" onChange={(e)=>setFormData({...formData,email: e.target.value})} value={formData.email} className="input"/>
            <button type="Add" onClick={()=>addCommentForm()} className="btn">add</button>
        </div>
    )
}

export default AddComentsItem