import Home1 from "./pages/Home1";
import { Routes, Route } from "react-router-dom";
import AutoToTop from "./components/AutoToTop";
import LSignUp from "./layouts/LSignUp";

function App() {
  return (
    <>
    
      <AutoToTop />

      <Routes>
        <Route path="" element={<Home1 />} />
        <Route path="/home" element={<Home1 />} />
        <Route path="/cities" element={<Home1 />} />
        <Route path="/hotels" element={<Home1 />} />
        <Route path="/signup" element={<LSignUp />} />
      </Routes>

    </>
  );
}

export default App;
