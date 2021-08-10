import React from "react";
// import Middle from "./middle";
import { Link } from 'react-router-dom';

function Header(){
    return(
      <>
      <div className="Header">
      <h1>Login</h1>
      <h2>Details</h2>
      <form action="loginpage">
           <div className="txt_field">
             <label for="username">Username:</label>
             <input type="text" id="username" placeholder="Username" name="fname" /> 
             <br />
             </div>
      
             <div className="txt_field">
             <label for="password">Password:</label>
             <input type="text" id="password" placeholder="Password" name="lnames" />
             <br />
             </div>
             <p className="pass">forget password?</p>
             <button type="submit">Submit</button>
             <div> <p className="pass">new user? <Link to="/signup">SigUp</Link></p></div> 
            
         </form>
           {/* <p><Link to="/signup">SigUp</Link></p> */}
      </div>
      </>
    );


};

export default Header;