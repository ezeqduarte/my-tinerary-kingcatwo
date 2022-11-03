import logo from './logo.svg';
import users from './data/registredUsers';
import activities from './data/activities';
import places from './data/cities';
import admins  from './data/admins';
import hotels from './data/hotels';
import events from './data/events';
import Home1 from './pages/Home1';
import {Routes, Route} from 'react-router-dom'
import AutoToTop from './components/AutoToTop';
import Home2 from './pages/Home2';


function App() {
  console.log(admins)
  console.log(hotels)
  console.log(events)
  
  return (   <>
  
    <AutoToTop/>
    <Home1>
      <Routes>
        <Route path="/home" element={<Home1/>}/>
        <Route path="/cities" element={<Home1/>}/>
        <Route path="/hotels" element={<Home1/>}/>
      </Routes>
    </Home1> 
    <Home2>

    </Home2>

  </>
  );
}

export default App;
