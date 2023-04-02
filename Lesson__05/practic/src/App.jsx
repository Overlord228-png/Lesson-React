import './App.css';
import { useEffect , /*useMemo ,*/ useState } from 'react';
import PostsListItems from './components/PostsListItems';

function App() {

  const goWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=a105bd7450e44e75926ed96bf9beac5a`)
    .then(resp=>resp.json())
    .then(data=>console.log(data))
  }

  /*
  const [name,setName] = useState('')

  //Нельзя делать ретерн
  useEffect(() => {
    console.log(`request on find ${name}`)
  }, [name])
  */
  /*
  //Можно  делать ретерн
  useMemo(() => {

  }, [])
  */
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then(resp =>{
      return resp.json()
    })
    .then(posts => {
      setPosts(posts)
    })
  }, [])

  console.log(posts)

  return (
    <div className="App">
      {
        /*
        <h4 onClick={()=>setName("Egor")}>Egor</h4>
        <h4 onClick={()=>setName("Anton")}>Anton</h4>
        */
      }
      <PostsListItems posts={posts}/>
      <button onClick={goWeather}>click</button>
    </div>
  );
}

export default App;



/*
Отрисовать на страничке 5 названий постов.
При клике на какой-то пост снизу под названиями отрисовывать
подробную информацию об посте
*/





