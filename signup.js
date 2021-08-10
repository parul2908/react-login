import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="Header">
      <h1>Signup</h1>
      <h2>Register</h2>
      <form action="loginpage">
        <div className="text_field">
          <lable for="name">Name:</lable>
          <input type="text" id="Name" placeholder="Name" name="fname" />
          <br />
        </div>
        <div className="text_field">
          <label for="Email">EmailId:</label>
          <input type="text" id="Email" placeholder="EmailId" name="fname" />
          <br />
        </div>
        <div className="text_field">
          <label for="password">Password:</label>
          <input
            type="text"
            id="password"
            placeholder="Password"
            name="fname"
          />
          <br />
        </div>
        <div className="text_field">
          <label for="password">Confirm password:</label>
          <input
            type="text"
            id="password"
            placeholder="password"
            name="fname"
          />
          <br />
        </div>
      </form>
      <button>
        <Link style={{ color: "white", textDecoration: "none" }} to="/profile">
          Register
        </Link>
      </button>
      <p className="pass">
        Register through{" "}
        <a
          style={{ color: "#5ec2b1", textDecorationColor: "none" }}
          href="www.google.com"
        >
          Google
        </a>
      </p>
    </div>
  );
}

export default Signup;
