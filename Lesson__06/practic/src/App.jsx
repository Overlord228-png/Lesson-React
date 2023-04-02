import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [posts,setPosts] = useState([])

  /*
  //async await 
  const loadingPosts = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/postss')
    console.log(resp)
    const posts = await resp.json()
    setPosts(posts)
  }

  useEffect(() => {
    //fetch('https://jsonplaceholder.typicode.com/posts')
    //.then(resp=>resp.json())
    //.then(posts=>setPosts(posts))
    try {
      loadingPosts()
    } catch {
      console.log('error')
    }
  }, [])
  */

  const [error,setError] = useState(false)
  const [loading,setLoading] = useState(false)

  const loadingPosts = async () => {
    setLoading(true)
    setTimeout(async ()=>{
      try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const posts = resp.data
        setPosts(posts)
        setLoading(false)
      } catch {
        setError(true)
        setLoading(false)
      }
    },2000)
  }
  
  useEffect(() => {
    loadingPosts()
  }, [])

  //if(error === true) {
  //  return (<h1>Error loading page</h1>)
  //} else {
  //  return (
  //    <div className="App">
  //      {posts.map(post=><h4>{post.title}</h4>)}
  //    </div>
  //  );
  //}
  /*
  if(error === false) {
    return (
      <h1>loading</h1>
    )
  } else if(error === true) {
    return (<h1>Error loading page</h1>)
  } else {
    return (
      <div className="App">
        {posts.map(post=><h4>{post.title}</h4>)}
      </div>
    );
  }
  */
  if(loading === false){
    console.log(loading);
    if(error === true){
      return(
        <h1>Error loading page</h1>
      )
    } else {
      return (
        <div className="App">
          {posts.map(post=><h4>{post.title}</h4>)}
        </div>
      );
    }
  } else {
    return (
      <h1>Loading</h1>
    )
  }
}

export default App;

/*
now
1 - Альтернатива работы fetch
1 - Новый инструмент для сетевых запросов

next

2 - Loading 

1 - Определить когда началась загрузка контента
2 - Определить когда загрузка контента закончилась


*/


