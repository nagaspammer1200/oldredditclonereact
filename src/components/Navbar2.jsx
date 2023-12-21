import React from "react";

export default function Navbar2() {
  const names = ["Top", "New", "Controversial ", "WIki", "Hot"];
  {
    //Names Of changes which are mapped using map function
  }

  return (
    <div>
      {names.map((title) => (
        <h5>
          <a href="#">{title ? title : "Default Title"}</a>
        </h5>
      ))}
    </div>
  );
}
