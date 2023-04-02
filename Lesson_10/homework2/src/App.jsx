import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeAge, changeMark } from "./store/features/userSlice";
import { useEffect, useState } from 'react';

/* Controller User Data */
import InputName from './components/controlUserData/InputNameUser'
import InputAge from './components/controlUserData/InputAgeUser'
import BtnUpdate from './components/controlUserData/BtnUpdate'
/* Controller User Data */

/* Add Mark User */
import InputMark from "./components/AddMarkUser/InputMarkUser"
import BtnMark from "./components/AddMarkUser/BtnAddMark"
/* Add Mark User */

import User from "./components/UserData/User"

function App() {
    const [updateName, setUpdateName] = useState('Pasha')
    const [updateAge, setUpdateAge] = useState('19')
    const [updateMark, setUpdateMark] = useState([])

    const user = useSelector((store)=>store.userReducer)
    const dispatch = useDispatch()

    /* Controller User Data */
    const UpdateUser=()=>{
        dispatch(changeName(updateName))
        dispatch(changeAge(updateAge))
    }
    useEffect(() => {
		dispatch(changeName("Pasha"))
		dispatch(changeAge("19"))
	}, [])
    /* Controller User Data */

    /* Add Mark User */
    const UpdateMark=()=>{
        dispatch(changeMark(updateMark))
    }
    useEffect(()=>{
        dispatch(changeMark())
    },[])
    /* Add Mark User */

    return (
        <>
            <div>
                <InputName updateName={updateName}  setUpdateName={setUpdateName}/>
                <br></br>
                <InputAge updateAge={updateAge} setUpdateAge={setUpdateAge}/>
                <br></br>
                <BtnUpdate UpdateUser={UpdateUser} />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <InputMark updateMark={updateMark} setUpdateMark={setUpdateMark}/>
                <br></br>
                <BtnMark UpdateMark={UpdateMark}/>
            </div>
            <br></br>
            <br></br>
            <div>
                <User name={user.name} age={user.age} mark={user.mark}/>
            </div>
        </>
    );
}

export default App;
