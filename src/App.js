
import Home1 from "./pages/Home1";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AutoToTop from "./components/AutoToTop";
import Main from "./layouts/Main";
import SignUp from "./pages/signup/SignUp";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Main>    

      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/cities" element={<Home1 />} />
        <Route path="/hotels" element={<Home1 />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

    </Main>
    
  );
}

export default App;
