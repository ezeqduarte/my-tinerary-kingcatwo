
import Home1 from "./pages/Home1";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AutoToTop from "./components/AutoToTop";
import Main from "./layouts/Main";
import SignUp from "./pages/signup/SignUp";
import NotFound from "./pages/NotFound";
import LogIn from "./pages/login/LogIn"
import NewCity from "./pages/newcity/NewCity";
import NewHotel from "./pages/newHotel/NewHotel";
import Cities from "./pages/cities/Cities";
import Hotels from "./pages/hotels/Hotels";
import DetailsHotel from "./pages/detailshotel/DetailsHotel";
import DetailsCity from "./pages/detailscities/DetailsCity";
import MyCities from "./pages/MyCities/MyCities";
import MyHotels from "./pages/MyHotels/MyHotels";





function App() {
  return (
    <Main>    

      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/cities" element={<Cities/>} />        
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/newcity" element= {<NewCity/>} />
        <Route path="/newhotel" element= {<NewHotel/>} />
        <Route path="/mycities" element= {<MyCities/>} />
        <Route path="/myhotels" element= {<MyHotels/>} />
        <Route path="/detailshotel" element= {<DetailsHotel/>} />
        <Route path="/detailshotel/:id" element= {<DetailsHotel/>} />
        
        <Route path="*" element={<NotFound/>} />
        <Route path="/details/:id" element={<DetailsCity/>} />
      
      </Routes>

    </Main>
    
  );
}


export default App;
