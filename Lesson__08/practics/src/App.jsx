import React from 'react'
import {Routes,Route} from 'react-router-dom'
import User from './pages/User'
import Users from './pages/Users'
const App = () => {
    return (
        <Routes>
            <Route path="/users" element={<Users/>}/>
            <Route path="/users/:id" element={<User/>}/>
        </Routes>
    )
}

export default App
