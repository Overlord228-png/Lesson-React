import './App.css';
import {Routes,Route} from 'react-router-dom';
import GameItem from './pages/GameItem';
import TeamsItem from './pages/TeamsItem';
import PlayersItem from './pages/PlayersItem';

function App() {
  return (
    <Routes>
      <Route path="/GameItem" element={ < GameItem />} />
      <Route path="/TeamsItem" element={ < TeamsItem />} />
      <Route path="/PlayersItem" element={ < PlayersItem />} />
    </Routes>
  );
}

export default App;
