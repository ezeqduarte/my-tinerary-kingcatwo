

import Home1 from './pages/Home1';
import {Routes, Route} from 'react-router-dom'
import AutoToTop from './components/AutoToTop';
import Home2 from './pages/Home2';


function App() {
 
  
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
