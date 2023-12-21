import React from "react";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

export default function Header() {
  return (
    <div className="white-text">
      <h1 className="logo">Keddit</h1>{" "}
      {
        //Title of the webpage
      }
      <div className="row">
        {" "}
        {
          // Material CSS is used to create a row of list
        }
        <Navbar />{" "}
        {
          //Returns first list of keddits
        }
      </div>
      <br />
      <div className="newbar">
        {" "}
        {
          // Returns list of top,new,controversial,wiki etc
        }
        <Navbar2 />
      </div>
      <p className="right">
        {
          //Aligns the paragraph to the right side using Material CSS
        }
        Join? <a href="#">Login</a> Or <a href="#">Sign Up</a> In Seconds |{" "}
        <b>English</b>
      </p>
    </div>
  );
}
