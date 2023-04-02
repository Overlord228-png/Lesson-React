import './App.css';
import {Routes,Route} from 'react-router-dom';
import TranslateItem from './pages/TranslateItem'
import FutureUpdate from './pages/FutureUpdate'


function App() {
  return (
    <Routes>
      <Route path="/TranslateItem" element={ < TranslateItem />} />
      <Route path="/FutureUpdate" element={ < FutureUpdate />} />
    </Routes>
  );
}

export default App;
