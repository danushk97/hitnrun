import logo from './football.png';
import {FaPhone} from "react-icons/fa"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <p>Hit N Run Futsal turf, Kalapatti, Coimbatore.</p>
            <p><FaPhone/> 9751117333, 9751277333</p>
            <img src={logo} className="App-logo" alt="alt"/>
            <p>Construction in progress!</p>
      </header>
    </div>
  );
}

export default App;
