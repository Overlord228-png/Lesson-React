import './App.css';
import {Routes,Route} from 'react-router-dom'
import Users from './pages/Users'
import Posts from './pages/Posts'
import Comments from './pages/Comments'
import NoteFound from './pages/NoteFound';

function App() {
  return (
    <Routes>
      <Route path="/Users" element={ <Users /> } />
      <Route path="/Posts" element={ <Posts/>} />
      <Route path="/Comments" element={ <Comments /> } />
      <Route path="*" element={ <NoteFound /> } />
    </Routes>
  );
}

export default App;

