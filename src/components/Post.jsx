import React from "react";
import PropTypes from "prop-types";
{
  /*Post Details  
  We Use Six Props for the component Post. Upvote,image,title,user and keddit are of string type. 
  time and comments are of number type

  
  */
}
export default function Post() {
  const details = [
    {
      upvote: "1.1k",
      image: "./images/penguin.jpg",
      title: "Penguins are Cute",
      time: 2,
      user: "ilikepenguins",
      keddit: "Cute",
      comments: 1423,
    },
    {
      upvote: "2.2k",
      image: "",
      title: "You Think You're So Pretty I HATE YOU",
      time: 3,
      user: "Criminalove",
      keddit: "Innocent",
      comments: 2323,
    },
    {
      upvote: "5k",
      image: "",
      title: "She Was Waiting For Me Outisde my door",
      time: 1,
      user: "Gunacontrol",
      keddit: "Thisisbad",
      comments: 4354,
    },
    {
      upvote: "3.2k",
      image: "",
      title: "AND YOURE HECKING VALID",
      time: 4,
      user: "ilikeyoudont",
      keddit: "Tokyo",
      comments: 6442,
    },
    {
      upvote: "2.5k",
      image: "",
      title: "I cosplayed Monogatari from Platinum Disco",
      time: 16,
      user: "mountkillagw",
      keddit: "Beijing",
      comments: 5334,
    },
    {
      upvote: "2.5k",
      image: "",
      title: "I was so focused",
      time: 2,
      user: "Hansgretntallol",
      keddit: "India",
      comments: 2324,
    },
    {
      upvote: "2.5k",
      image: "",
      title: "I Think you should share what you know",
      time: 2,
      user: "youcuteandimhan",
      keddit: "Cricket",
      comments: 6754,
    },
    {
      upvote: "5.5k",
      image: "",
      title: "Turning The Attention",
      time: 2,
      user: "swinginggodlove",
      keddit: "Bollywood",
      comments: 1234,
    },
    {
      upvote: "3.3",
      image: "",
      title: "She's Gone isn't she? ",
      time: 2,
      user: "harmlesspenguin",
      keddit: "Funny",
      comments: 2094,
    },
  ];

  {
    //We Map Functon to render posts
  }

  return (
    <div>
      {details.map((detail) => (
        <div className="post1">
          <div className="post11">
            <br />
            <a href="#">
              <i className="material-icons">arrow_upward</i>
            </a>
            <br />
            <span>{detail.upvote}</span>
            <br />
            <a href="#">
              <i className="material-icons">arrow_downward</i>
            </a>
          </div>
          <div className="post12">
            <br />
            <br />
            <a href="#">
              {detail.image ? (
                <img src={detail.image} height="90px" width="90px" />
              ) : (
                <i className="material-icons">assignment</i>
              )}
            </a>
          </div>
          <div className="post13">
            <a href="#">
              <p>{detail.title}</p>
            </a>
            <p>
              {detail.time} Hours Ago* by <a href="#">{detail.user} </a> in
              <a href="#">k/{detail.keddit}</a>
            </p>
            <p>
              <a href="#">{detail.comments} Comments</a> <a href="#">share </a>
              <a href="#">save</a> <a href="#">hide</a> <a href="#">report</a>
            </p>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
}

{
  //Prototypes for Post component
}

Post.propTypes = {
  upvote: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.number,
  user: PropTypes.string,
  keddit: PropTypes.string,
  comments: PropTypes.number,
};
