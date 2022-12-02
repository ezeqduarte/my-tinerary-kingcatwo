import axios from "axios";
import React from "react";
import { useRef } from "react";
import { toast } from "react-toastify";
import OurToastContainer from "../components/OurToastContainer";
import Swal from "sweetalert2/dist/sweetalert2.js";
import API from "../api";

export default function Form(props) {
  let { role } = props;
  let firstName = useRef();
  let lastName = useRef();
  let email = useRef();
  let password = useRef();
  let form = useRef();
  let age = useRef();
  let photo = useRef();

  async function submitNewUser(event) {
    event.preventDefault();

    let newUser = {
      name: firstName.current.value,
      lastName: lastName.current.value,
      photo: photo.current.value,
      age: age.current.value,
      email: email.current.value,
      password: password.current.value,
      role: `${role}`,
    };



    await axios
      .post(`${API}auth/sign-up`, newUser)
      .then((response) => {


        if (response.data.success === false) {
          response.data.message.map((message) => {
            toast.error(`${message}`, {
              position: "top-left",
              autoClose: 20000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
        } else {
          Swal.fire({
            title: "The user has created.",
            text: "Please confirm the email verification",
            imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
            width: "25rem",
            padding: "2rem",
          });
          form.current.reset();
        }
      });
  }

  return (
    <form className="form_signup" onSubmit={submitNewUser} ref={form}>
      <label>
        First name
        <input
          type="text"
          name="f-name"
          placeholder="Enter your first name"
          ref={firstName}
        />
      </label>

      <label>
        Last name
        <input
          type="text"
          name="l-name"
          placeholder="Enter your last name"
          ref={lastName}
        />
      </label>

      <label>
        Age
        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          ref={age}
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          ref={email}
        />
      </label>

      <label>
        Photo
        <input
          name="photo"
          placeholder="Enter your URL photo"
          ref={photo}
          type="text"
        />
      </label>

      <label>
        Password
        <input
          type="password"
          pattern="^[A-Za-z0-9]+[0-9].{3,20}"
          autoComplete="off"
          name="password"
          placeholder="Enter your password with 8 or more characters"
          ref={password}
        />
      </label>

      <button className="btn-enviar">Send</button>
      <OurToastContainer />
    </form>
  );
}
