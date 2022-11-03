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
import LSignUp from './layouts/LSignUp';


function App() {
  console.log(admins)
  console.log(hotels)
  console.log(events)
  
  return (   <>
  
    <AutoToTop/>    
    
      <Routes>
        <Route path="" element={<Home1/>}/>
        <Route path="/home" element={<Home1/>}/>
        <Route path="/cities" element={<Home1/>}/>
        <Route path="/hotels" element={<Home1/>}/>
        <Route path="/signup" element={<LSignUp/>}/>
      </Routes>
    

  </>
  );
}

export default App;
