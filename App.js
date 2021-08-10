import React from "react";
import Header from "./components/header.js";
import Signup from "./components/signup.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Profile from "./components/Profile.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Header} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
