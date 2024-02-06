import React, { Component, useState } from "react";
// import './login.css'
import "./css/util.css"
import "./css/main.css"
// import "./vendor/select2/select2.min.css"
// import "./vendor/css-hamburgers/hamburgers.min.css"
// import "./vendor/animate/animate.css"
// import "./vendor/bootstrap/css/bootstrap.min.css"
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();        //prevents the default form submission behavior, allowing you to handle the submission using asynchronous JavaScript.

    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);  //stores the received token in the local storage, 
          window.localStorage.setItem("loggedIn", true);    // sets a flag (loggedIn) to true, and redirects the user to the "./userDetails" page

          window.location.href = "./userDetails";
        }
      });
  }




  ///////////////////////////////////////////////////////////////////////////
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src="https://firebasestorage.googleapis.com/v0/b/edutech-f8171.appspot.com/o/images%2Fimg-01.png?alt=media&token=70eb254d-c7e4-4cb2-9504-8d7b3fd3af63" alt="IMG" />
          </div>

          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <span className="login100-form-title">Login</span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Login</button>
            </div>

            <div className="text-center p-t-12">
              <span className="txt1">Forgot</span>
              <a className="txt2" href="#">
                Username / Password?
              </a>
            </div>

            <div className="text-center p-t-136">
              <a className="txt2" href="/sign-up">
                Create your Account
                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
