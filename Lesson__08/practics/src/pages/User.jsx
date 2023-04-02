import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
const User = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [user,setUser] = useState({})

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then(resp=>resp.json())
    .then(user=>setUser(user))
  },[])


  return (
    <div>
      <p>{user.name}</p>
      <p>{user.phone}</p>
      <p>{user.email}</p>
      <button onClick={()=>navigate(-1)}>back</button>
    </div>
  )
}

export default User
