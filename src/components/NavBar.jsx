import React from "react";
import { Link as NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../redux/actions/userActions";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default function NavBar() {
  let { logged, token, role, photo, name } = useSelector(
    (store) => store.userReducer
  );
  const dispatch = useDispatch();
  let { logout } = userActions;
  console.log(logged, token);

  let [mostrar, setMostrarOcultar] = useState(true);
  let change = () => {
    setMostrarOcultar(!mostrar);
  };

  let [mostrarMenu, setMostrarMenu] = useState(false);
  let menu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  const dispatchLogout = async () => {
    Swal.fire({
      title: "Are you sure to logout?",
      imageUrl: "https://img.icons8.com/color/150/null/high-priority.png",
      width: "25rem",
      padding: "2rem",
      showCancelButton: true,
      confirmButtonColor: "#ff3648",
      cancelButtonColor: "#5e5b5b",
      confirmButtonText: "Accept",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(logout(token));
        Swal.fire({
          title: "You logged out",
          text: "Come back soon!",
          imageUrl:
            "https://img.icons8.com/external-others-inmotus-design/150/null/external-Accept-round-icons-others-inmotus-design-7.png",
          width: "25rem",
          padding: "2rem",
        });
        setMostrarOcultar(!mostrar);
      }
    });
  };

  return (
    <header>
      <img className="logo-grande" src="./img/logo_grande.png" alt="" />

      {mostrarMenu ? (
        <div className="flex-menu">
          <img src="./img/menu-rounded.png" onClick={menu} alt="menu" />
          <div className="menu">
            <NavLink to="/home" style={{ textDecoration: "none" }}>
              <button onClick={menu}>
                HOME<span className="rojo">.</span>
              </button>
            </NavLink>

            <NavLink to="/cities" style={{ textDecoration: "none" }}>
              <button onClick={menu}>
                CITIES<span className="rojo">.</span>
              </button>
            </NavLink>
            <NavLink to="/hotels" style={{ textDecoration: "none" }}>
              <button onClick={menu}>
                HOTELS<span className="rojo">.</span>
              </button>
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="flex-menu">
          <img src="./img/menu-rounded.png" onClick={menu} alt="" />
        </div>
      )}

      <nav>
        <ul>
          <NavLink to="/home" style={{ textDecoration: "none" }}>
            <li>HOME</li>
          </NavLink>
          <NavLink to="/cities" style={{ textDecoration: "none" }}>
            <li>CITIES</li>
          </NavLink>
          <NavLink to="/hotels" style={{ textDecoration: "none" }}>
            <li>HOTELS</li>
          </NavLink>
        </ul>
      </nav>
      {mostrar ? (
        <div className="login">
          {!role ? (
            <img
              id="normalUserImg"
              src="./img/login.png"
              onClick={change}
              alt=""
            />
          ) : (
            <img src={photo} onClick={change} alt="" />
          )}
        </div>
      ) : (
        <div className="login">
          {!role ? (
            <img
              id="normalUserImg"
              src="./img/login.png"
              onClick={change}
              alt=""
            />
          ) : (
            <img src={photo} onClick={change} alt="" />
          )}

          <div className="datosLogin">
            {logged ? null : (
              <>
                <NavLink to="/login" style={{ textDecoration: "none" }}>
                  <button  onClick={change}>SIGN IN</button>
                </NavLink>
                <NavLink to="/signup" style={{ textDecoration: "none" }}>
                  <button  onClick={change}>SIGN UP</button>
                </NavLink>
              </>
            )}
            {logged && role === "user" ? (
              <>
                <button>
                  Hello, {name}
                  <span className="rojo"> .</span>
                </button>
                <NavLink to="/profile" style={{ textDecoration: "none" }}>
                  <button onClick={change}>PROFILE</button>
                </NavLink>
                <NavLink to="/mytineraries" style={{ textDecoration: "none" }}>
                  <button onClick={change}>MY TINERARIES</button>
                </NavLink>
                <NavLink to="/myshows" style={{ textDecoration: "none" }}>
                  <button onClick={change}>MY SHOWS</button>
                </NavLink>
                <button onClick={dispatchLogout}>LOGOUT</button>
              </>
            ) : null}
            {logged && role === "admin" ? (
              <>
                <button>
                  Hello, {name}
                  <span className="rojo"> .</span>
                </button>
                <NavLink to="/profile" style={{ textDecoration: "none" }}>
                  <button  onClick={change}>PROFILE</button>
                </NavLink>
                <NavLink to="/mycities" style={{ textDecoration: "none" }}>
                  <button  onClick={change}>MY CITIES</button>
                </NavLink>
                <NavLink to="/newcity" style={{ textDecoration: "none" }}>
                  <button  onClick={change}>NEW CITY</button>
                </NavLink>
                <NavLink to="/myHotels" style={{ textDecoration: "none" }}>
                  <button  onClick={change}>MY HOTELS</button>
                </NavLink>
                <NavLink to="/newhotel" style={{ textDecoration: "none" }}>
                  <button  onClick={change}>NEW HOTEL</button>
                </NavLink>

                <button onClick={dispatchLogout}>LOGOUT</button>
              </>
            ) : null}
          </div>
        </div>
      )}
    </header>
  );
}
