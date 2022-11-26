import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Main from "./layouts/Main";
import SignUp from "./pages/signup/SignUp";
import NotFound from "./pages/NotFound";
import LogIn from "./pages/login/LogIn";
import NewCity from "./pages/newcity/NewCity";
import NewHotel from "./pages/newHotel/NewHotel";
import Cities from "./pages/cities/Cities";
import Hotels from "./pages/hotels/Hotels";
import DetailsHotel from "./pages/detailshotel/DetailsHotel";
import DetailsCity from "./pages/detailscities/DetailsCity";
import MyCities from "./pages/MyCities/MyCities";
import MyHotels from "./pages/MyHotels/MyHotels";
import MyTineraries from "./pages/myTineraries/MyTineraries";
import MyShows from "./pages/MyShows/MyShows";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import userActions from "./redux/actions/userActions";

function App() {
  let { logged, role, name, photo } = useSelector((store) => store.userReducer);
  const { reIngress } = userActions;
  const dispatch = useDispatch();

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));

    if (token) {
      dispatch(reIngress(token.token.user));
    }
  }, []);

  console.log(logged);
  console.log(role);
  console.log(name);
  console.log(photo);

  return (
    <Main>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/newcity" element={<NewCity />} />
        <Route path="/newhotel" element={<NewHotel />} />
        <Route path="/mycities" element={<MyCities />} />
        <Route path="/myhotels" element={<MyHotels />} />
        <Route path="/detailshotel" element={<DetailsHotel />} />
        <Route path="/myshows" element={<MyShows />} />
        <Route path="/detailshotel/:id" element={<DetailsHotel />} />
        <Route path="/mytineraries" element={<MyTineraries />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/details/:id" element={<DetailsCity />} />
      </Routes>
    </Main>
  );
}

export default App;
