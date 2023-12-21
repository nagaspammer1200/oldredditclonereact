import React from "react";

export default function Navbar() {
  const names = [
    "All",
    "Random",
    "Users: ",
    "AskReddit",
    "Gaming",
    "MildlyInteresting",
    "Pics",
    "Movies",
    "World News",
    "TodayIlearned",
    "ExplainLikeIm5",
    "Funny",
    "TIFU",
    "DIYs",
  ];
  {
    //Names Of Subreddits which are mapped using map function. Further Elements can be added
  }
  return (
    <div>
      {names.map((title) => (
        <div className="col s0.5">
          {
            //Material CSS is used to provide spacing between row elements
          }
          <h5>
            <a href="#">{title ? title + " -" : "Default Title"}</a>{" "}
            {
              //If Title is not present, Default title will appear.
            }
          </h5>
        </div>
      ))}
    </div>
  );
}
