import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoTo from "../../components/GoTo";
import "../profile/Profile.css";
import userActions from "../../redux/actions/userActions";
import { useState } from "react";
import { current } from "@reduxjs/toolkit";
import { useRef } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export default function Profile() {
  const { photo } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();
  const { id } = useSelector((store) => store.userReducer);
  useEffect(() => {
    dispatch(userActions.getDatos(id));
  }, []);
  const [oculto, SetOculto] = useState(false);
  const mostrar = (e) => {
    e.preventDefault();
    SetOculto(!oculto);
  };
  // const navigate = useNavigate()

  const name = useRef();
  const lastName = useRef();
  const photo1 = useRef();
  const update = async (e) => {
    e.preventDefault();
    let data = {
      id: id,
      objectedit: {
        name: name.current.value,
        lastName: lastName.current.value,
        photo: photo1.current.value
      },
    };

    Swal.fire({
      title: "Are you sure to modifcate your information?",
      imageUrl: "https://img.icons8.com/ios-glyphs/120/000000/break.png",
      width: "25rem",
      padding: "2rem",
      showCancelButton: true,
      confirmButtonColor: "#ff3648",
      cancelButtonColor: "#5e5b5b",
      confirmButtonText: "Yes, update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(userActions.editProfile(data))
        Swal.fire({
          title: "Your info has been updated!",
          imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
          width: "25rem",
          padding: "2rem",
        });
      //  navigate("/")
      }
    });
 
  };

  const { user } = useSelector((store) => store.userReducer);
  console.log(user);

  return (
    <>
      <div className="divProfile">
        <h2>
          My <span> Profile</span>
          <span className="rojo">.</span>
        </h2>
        {/* <GoTo anchor={"#mainProfile"}></GoTo> */}

        <main className="mainProfile" id="mainProfile">
          <div className="profilePhoto">
            <img src={user.photo} />
          </div>

          <div className="profileInfo">
            <ul>
              Name: <span className="spanProfile">{user.name} </span>
            </ul>
            <ul>
              Last Name: <span className="spanProfile"> {user.lastName} </span>
            </ul>
            <ul>
              Age: <span className="spanProfile"> {user.age} </span>
            </ul>
            <ul>
              Mail: <span className="spanProfile"> {user.email} </span>
            </ul>
            <button data-text="Awesome" class="button" onClick={mostrar}>
              <span class="actual-text">&nbsp; EDIT&nbsp;</span>
              <span class="hover-text" aria-hidden="true">
                &nbsp; EDIT&nbsp;
              </span>
            </button>
          </div>
        </main>
        {oculto ? (
          <form className="formProfile">
            <label>
              {" "}
              Name <input type="text" ref={name}></input>
            </label>
            <label>
              Last Name <input type="text" ref={lastName}></input>
            </label>
            <label>
              Photo <input type="text" ref={photo1}></input>
            </label>
            <button className="botonEditProfile" onClick={update}>Send</button>
          </form>
        ) : null}
      </div>
    </>
  );
}
