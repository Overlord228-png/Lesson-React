import {Routes,Route} from 'react-router-dom';
import TranslateItem from './pages/TranslateItem'
import FutureUpdate from './pages/FutureUpdate'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ < TranslateItem />} />
      <Route path="/FutureUpdate" element={ < FutureUpdate />} />
    </Routes>
  );
}

export default App;
