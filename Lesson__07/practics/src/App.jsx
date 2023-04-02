import './App.css';
import { useState , useMemo} from 'react';

function App () {
  const [ search, setSearches ] = useState('')

  const [cityDelet, setDelCity] = useState('') /// Deleted

  const [newCity, setNewCity] = useState('')      /// add City
  const [newKeyCity,setNewKeyCity] = useState('') /// add City

  const [keyCity,setKeyCity] = useState('')       /// City key

  const Delete =()=>{
    //Алгоритм отбора тех городов которые должны остаться
    const newSites = cities.filter(city=>city.value !== cityDelet )
    setSities(newSites)
    console.log(1)
  }

  const [cities,setSities] = useState([
    {key:'dp',value:'Dnepr'},
    {key:'lv',value:'Lviv'},
    {key:'ds',value:'Odessa'},
  ])

  const searchCity =()=>{
    let newCityItem = [];
    for(const city of cities){
      if(city.value.startsWith(search)){
        newCityItem.push(city)
      }
    }
    return newCityItem
  }
  const searchedCities = useMemo(searchCity, [search, cities])

  return (
    <div className="App">
      
      {keyCity}
      <select onChange={e=>setKeyCity(e.target.value)}>
        {
          cities.map(city=><option key={city.key} value={city.key}>{city.value}</option>)
        }
      </select>

        <input value={newCity} onChange={e=>setNewCity(e.target.value)} />
        <input  value={newKeyCity} onChange={e=>setNewKeyCity(e.target.value)} />

        <button onClick={e=>setSities([...cities,{key:newKeyCity,value:newCity}])} type="">add</button>
        
        <br></br>
        <br></br>
        <br></br>

        <input value={cityDelet} onChange={(e)=>setDelCity(e.target.value)} />
        <button onClick={Delete}>delete</button>
    </div>

  );
}

export default App;