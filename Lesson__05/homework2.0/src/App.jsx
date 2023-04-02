import './App.css';
import {Routes,Route} from 'react-router-dom';
import CapitalCitiesCIS from './pages/CapitalCitiesCIS'
import SearchByCity from './pages/SearchByCity'

// a105bd7450e44e75926ed96bf9beac5a

function App() {
  return (
    <Routes>
      <Route path="/CapitalCitiesCIS" element={ < CapitalCitiesCIS /> } />
      <Route path="/SearchByCity" element={ < SearchByCity />} />
    </Routes>
  );
}

export default App;