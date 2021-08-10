import React from "react";
// import Middle from "./middle";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="Header">
      <h1>Profile</h1>
      <h2>Personal Details</h2>
      <ul>
        <hr />
        <li>
          <h4>Name:</h4>
        </li>
        <hr />
        <li>
          <h4>Email:</h4>
        </li>
        <hr />
        <li>
          <h4>Contact No:</h4>
        </li>
        <hr />
        <li>
          <h4>Resident:</h4>
        </li>
        <hr />
        <li>
          <h4>DOB:</h4>
        </li>
        <hr />
      </ul>
    </div>
  );
}

export default Profile;
