import logo from './logo.svg';
import './App.css';
import users from './data/registredUsers';
import activities from './data/activities';
import places from './data/cities';
import admins  from './data/admins';
import hotels from './data/hotels';
import events from './data/events';

function App() {
  console.log(admins)
  console.log(hotels)
  console.log(events)
  
  return (    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
