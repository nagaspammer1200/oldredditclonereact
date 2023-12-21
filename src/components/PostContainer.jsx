import React from "react";
import Post from "./Post";

export default function PostContainer() {
  return (
    <div className="maincontent yellow-text">
      <Post />{" "}
      {
        //Rendering Post Component
      }
      <p>
        view more:{" "}
        <a className="waves-effect waves-light btn-small black-text">More</a>{" "}
        {
          //Button Using Material CSS
        }
      </p>
    </div>
  );
}
