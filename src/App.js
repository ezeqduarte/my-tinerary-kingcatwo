import logo from './logo.svg';
import './App.css';
import users from './data/registredUsers';
import activities from './data/activities';
import places from './data/cities';

function App() {
  console.log(users)
  console.log(places);
  console.log(activities);
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
