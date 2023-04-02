import './App.css';
import {Routes,Route} from 'react-router-dom';
import TranslateItem from './pages/TranslateItem'


function App() {
  return (
    <Routes>
      <Route path="/TranslateItem" element={ < TranslateItem />} />
    </Routes>
  );
}

export default App;
