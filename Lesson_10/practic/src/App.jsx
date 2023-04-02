import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from './store/features/userSlice';
import { useEffect, useState } from 'react';

import InputAdd from "./components/InputAdd"
import ReversBtn from "./components/ReversBtn"
import { fetchPosts } from './store/features/postsSlice';
function App() {
	const [searc,setSearc] = useState('')

	const ReneamUser = () =>{
		console.log(searc)
		dispatch(changeName(searc))
	}

	const user = useSelector((store)=>store.userReducer)
	const postsState = useSelector((store)=>store.postsReducer)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(changeName('Pasha'))
		dispatch(fetchPosts(5,2))
	}, [])

	console.log(postsState)

	return (
		<>
		<InputAdd searc={searc} setSearc={setSearc}/>
		<ReversBtn ReneamUser={ReneamUser} />
		{user.name}
		{postsState.posts.map((post)=>{
			return <h1>{post.title}</h1>
		})}
		</>
	);
}

export default App;