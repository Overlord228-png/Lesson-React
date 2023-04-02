import React from 'react'
import { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
const Users = () => {

  const [users,setUsers] = useState([])

  const navigate = useNavigate()

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp=>resp.json())
    .then(users=>setUsers(users))
  },[])

  return (
    <div>
      {
        users.map(user=><p 
            key={user.id}
            onClick={()=>navigate(`/users/${user.id}`)}
            >{user.name}
          </p>
        )
      }
    </div>
  )
}

export default Users
