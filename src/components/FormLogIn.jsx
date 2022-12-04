import axios from "axios";
import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import API from "../api";
import { toast } from "react-toastify";
import OurToastContainer from "../components/OurToastContainer";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";

export default function FormLogIn() {
  let email = React.useRef();
  let password = React.useRef();
  let form = React.useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ingress } = userActions;
  async function submitUser(event) {
    event.preventDefault();

    let user = {
      email: email.current.value,
      password: password.current.value,
    };

    await axios
      .post(`${API}auth/sign-in`, user, { new: true })
      .then((response) => {
        if (response.data.success === false) {
          response.data.message.map((message) => {
            toast.error(`${message}`, {
              position: "top-left",
              autoClose: 4500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
        } else {
          dispatch(ingress(user));
          Swal.fire({
            title: `Welcome again  ${response.data.response.user.name}!`,
            text: "Enjoy our website.",
            imageUrl:
              "https://img.icons8.com/wired/120/null/handshake-heart.png",
            width: "25rem",
            padding: "2rem",
            confirmButtonColor: "#ff3648",
            background: "#d9d9d9",
          });

          navigate("/");
          form.current.reset();
        }
      });

    form.current.reset();
  }

  return (
    <form className="form_login" onSubmit={submitUser} ref={form}>
      <label>
        Your Mail
        <input
          type="email"
          required={true}
          name="email"
          placeholder="Enter your email"
          ref={email}
        />
      </label>

      <label>
        Password
        <input
          type="password"
          required={true}
          pattern="^[0-9]*[A-Za-z0-9]+[0-9]+$"
          autoComplete="off"
          name="password"
          placeholder="Enter your password"
          ref={password}
        />
      </label>

      <button className="btn-enviar">Send</button>

      <button className="buttonlogin">
        {" "}
        Sign in with  
        <img src="https://img.icons8.com/color/28/null/google-logo.png" />
        oogle
      </button>

      <OurToastContainer />
    </form>
  );
}
