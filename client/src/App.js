import {Routes,Route} from  'react-router-dom'
import './App.css';
import Lobby from './Screens/Lobby';
function App() {
  return (
    <div className="App">
      <Routes>
        < Route path='/' element={<Lobby/>}/>
      </Routes>
    </div>
  );
}

export default App;
