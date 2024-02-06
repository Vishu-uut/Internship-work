import React, { Component, useEffect, useState } from "react";
import AdminHome from "./candidate_view";

import UserHome from "./userHome";

import Mob_home from "./Mob_home";


export default function UserDetails() {
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/userData", {    //sending data to backend
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),     // It makes a POST request to the server at "http://localhost:5000/userData" with the stored JWT token
      }),
    })
      .then((res) => res.json())
      .then((data) => {                     //server responds with user data
        console.log(data, "userData");
        if (data.data.userType == "Admin") {  //if user= admin setAdmin -true
          setAdmin(true);
        }

        setUserData(data.data);              //It sets the userData state with the received user data.

        if (data.data == "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();       //clear token
          window.location.href = "./login-user";//
        }
      });
  }, []);
 
  return admin ? <Mob_home/> : <UserHome userData={userData} />;
}
