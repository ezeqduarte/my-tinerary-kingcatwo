import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import NavBar from "../../components/NavBar";
import "../signup/signup.css";

export default function SignUp() {
  return (
    <div className="page_form">
      <NavBar />

      <div className="container_form">
        <div className="form">
          <div className="createacc">
            <h2>Create your account</h2>
            <Form role="user" />
          </div>
          <div className="already_acc">
            <h3 className="rojo">Already has an account?</h3>
            <div className="buttons-form">
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <button className="buttonsignin">Sign in with account</button>
              </NavLink>

              <button className="buttonsignin">
                {" "}
                Sign in with{" "}
                <img src="https://img.icons8.com/color/28/null/google-logo.png" />
                oogle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
