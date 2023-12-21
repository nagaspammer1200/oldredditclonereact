import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="footer1 yellow-text">
        <div className="footerul1 black">
          <h6>
            <a href="#">
              {
                //About
              }
              <b>About</b>
            </a>
          </h6>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Advertising</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="footerul2 black">
          <h6>
            <a href="#">
              {
                //Help
              }
              <b>Help</b>
            </a>
          </h6>
          <ul>
            <li>
              <a href="#">Site Rules</a>
            </li>
            <li>
              <a href="#">Keddit Help Center</a>
            </li>
            <li>
              <a href="#">Keddiquetes</a>
            </li>
            <li>
              <a href="#">mod guidelines</a>
            </li>
            <li>
              <a href="#">contact us</a>
            </li>
          </ul>
        </div>
        <div className="footerul3 black">
          <h6>
            <a href="#">
              {
                //apps and tools
              }
              <b>apps and tools</b>
            </a>
          </h6>
          <ul>
            <li>
              <a href="#">keddit for android</a>
            </li>
            <li>
              <a href="#">keddit for iPhone</a>
            </li>
            <li>
              <a href="#">mobile website</a>
            </li>
          </ul>
        </div>
        <div class="footerul4 black">
          <h6>
            {
              //Premium
            }
            <a href="#">
              <b>&lt;3</b>
            </a>
          </h6>
          <ul>
            <li>
              <a href="#">keddit premium</a>
            </li>
            <li>
              <a href="#">keddit coins</a>
            </li>
          </ul>
        </div>
        <br />
      </div>
      {
        //Bottom Text
      }
      <div className="privacy yellow-text">
        <p>
          Use of this site constitutes acceptance of our{" "}
          <a href="#">
            <u>User Agreement</u>
          </a>
          and{" "}
          <a href="#">
            <u>Privacy Policy</u>
          </a>
          .. © 2023 keddit inc. All rights reserved.
          <br />
          KEDDIT and the ALIEN Logo are registered trademarks of keddit inc.
        </p>
      </div>
    </div>
  );
}
