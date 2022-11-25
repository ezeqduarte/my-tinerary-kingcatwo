import { Axios } from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import API from "../api"

export default function FormLogIn() {
  let email = React.useRef();
  let password = React.useRef();
  let form = React.useRef();

  async function submitUser(event) {
    event.preventDefault();

    let user = {
      email: email.current.value,
      password: password.current.value,
    };

     const res = await Axios.post(`${API}auth/sign-in`, user, {new: true})
     console.log(res)

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
          required= {true}
          pattern="^[0-9]*[A-Za-z0-9]+[0-9]+$"
          autoComplete="off"
          name="password"
          placeholder="Enter your password"
          ref={password}
        />
      </label>

      <button className="btn-enviar">Send</button>
      <NavLink to="/signin" style={{ textDecoration: "none" }}>
        <button className="buttonlogin">
          {" "}
          Sign in with  
          <img src="https://img.icons8.com/color/28/null/google-logo.png" />
          oogle
        </button>
      </NavLink>
    </form>
  );
}
