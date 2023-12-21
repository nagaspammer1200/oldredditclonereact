import React from "react";

export default function Sidebar() {
  return (
    <div className="navbar pink-text">
      <form>
        {
          //Search Bar
        }
        <input placeholder="Search" type="text" id="text" />
        <br />
        {
          //UserName and Password
        }
        <div className="Uname">
          <div class="row">
            <div className="col s6">
              <input placeholder="username" type="text" id="text2" />
            </div>
            <div className="col s6">
              <input placeholder="password" type="password" id="text3" />
            </div>
          </div>
          <div className="row">
            <div className="col s5">
              <p>
                <label>
                  {
                    //Checkbox
                  }
                  <input type="checkbox" />
                  <span> remember me?</span>
                </label>
              </p>
            </div>
            <div className="col s5">
              <br />
              <a href="#">reset password?</a>
            </div>
            <a className="waves-effect waves-light btn-small black-text">
              Login
            </a>
          </div>
        </div>
        <br />
        <a className="waves-effect waves-light btn-large black-text">
          {
            //Submit A New Link Button
          }
          Submit A New Link
        </a>
        <br />
        <br />
        <a className="waves-effect waves-light btn-large black-text">
          Submit A New Text Post{" "}
          {
            //Text Post Button
          }
        </a>
        <br />
        <br />
        <div className="premiumsection">
          <h5>Keddit Premium</h5>
          {
            //Premium Div
          }
          <br />
          <p>
            Get An Ad Free Experience With Special Benefits, and directly
            support keddit
          </p>
          <br />
          <a className="waves-effect waves-light btn-small black-text">
            Get Keddit Premium
          </a>
          <br />
          <br />
        </div>
      </form>
    </div>
  );
}
