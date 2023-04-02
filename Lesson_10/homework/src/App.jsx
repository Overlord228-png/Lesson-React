import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeAge, changeRating } from './store/features/userSlice';
import { useEffect, useState } from 'react';

/* изменения */
import NameChange from './components/NameChange'
import AgeChange from './components/AgeChange'
import AddRating from './components/AddRating'
import ButtonsChange from './components/ButtonsChange'
/* изменения */

function App() {
    const [refreshName,setRefreshName] = useState('')
    const [refreshAge,setRefreshAge] = useState('')
    const [addRating,setAddRating] = useState('') /// add new Rating

	const user = useSelector((store)=>store.userReducer)
    const dispatch = useDispatch()

    const RefreshUser =()=>{
        dispatch(changeName(refreshName))
        dispatch(changeAge(refreshAge))
        dispatch(changeRating(addRating))
    }

	useEffect(() => {
		dispatch(changeName("Pasha"))
		dispatch(changeAge("19"))
		dispatch(changeRating([1, 2, 3, 99, 999]))
	}, [])
    // console.log(refreshName)
    // console.log(refreshAge)
    // console.log(addRating)
    /*
    <>
            <div>
                <input 
                placeholder="change name" 
                onChange={(e)=>{dispatch(changeName(e.target.value))}}
                />
                {user.name}
            </div>

            <br></br>

            <div>
                <input 
                placeholder="change age" 
                onChange={(e)=>{dispatch(changeAge(e.target.value))}}
                />
                {user.age}
            </div>

            <br></br>
            
            <div>
                <input 
                placeholder="change rating"
                onChange={(e)=>{dispatch(changeRating(e.target.value))}}
                />
                {user.rating}
            </div>

            <br></br>
            <button>refresh</button>
		</>
    */
	return (
		<>
            <NameChange refreshName={refreshName} setRefreshName={setRefreshName}/>
            {user.name}
            <br></br>
            <br></br>
            <AgeChange setRefreshAge={setRefreshAge} refreshAge={refreshAge}/>
            {user.age}
            <br></br>
            <br></br>
            <AddRating setAddRating={setAddRating} addRating={addRating} />
            {user.rating}
            <br></br>
            <br></br>
            <ButtonsChange RefreshUser={RefreshUser} />
        </>
	);

}

export default App;