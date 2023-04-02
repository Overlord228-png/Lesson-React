import React, { useState , useEffect , useMemo} from 'react';
import UsersList from "../components/UsersList"
import AddUsersItem from "../components/AddUsersItem"
import SearchUser from "../components/SearchUser"
import Header from '../components/Header'

const Users = () => {
    const [ users , setUsers ] = useState([])
    const [ search, setSearches ] = useState('')

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response);
            if (response.status === 200){
            console.log("BE BETTER!")
            }
            return response.json();
        })
        .then((users)=>{
            const usersFinish = users.slice();
            setUsers(usersFinish)
        })
    }, [])

    const addUser = (user) =>{
        setUsers([...users, user])
    }
    const deleteUser = (name) =>{
        const newUser = users.filter(user => user.name !== name)
        setUsers(newUser)
    }
    const searchName = () => {
        let newUserItem = [];
        for(const user of users) {
            if(user.name.startsWith(search)){
                newUserItem.push(user)
            }
        }
        return newUserItem
    }
    const searchedUsers = useMemo(searchName, [search, users])

    return (
        <div>
            <Header />
            <div>
                <AddUsersItem addUser={addUser}/>
            </div>
            <div>
                <br/>
                <SearchUser setSearches={setSearches} search={search} />
                <br/>
            </div>
            <div>
                <UsersList deleteUser={deleteUser} users={searchedUsers} />
            </div>
        </div>
    );
}
export default Users