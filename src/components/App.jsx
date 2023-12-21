//Importing Required Components and React

import React from "react";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Post from "./Post";
import PostContainer from "./PostContainer";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <div className="section black white-text">
        {" "}
        {
          //sub division for header and subheader
        }
        <Header />
        <SubHeader />
        <div className="maincontainer">
          {" "}
          {
            //Further Styling from Custom CSS
          }
          <PostContainer />
          <Sidebar />
        </div>
        <Footer />
      </div>
    </div>
  );
}
