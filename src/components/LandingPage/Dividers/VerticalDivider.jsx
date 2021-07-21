import React from "react";
import Register from "../Register/Register";

function VerticalDivider() {
  return (
    <div className="center height">
      <div className="ui placeholder segment">
        <div className="ui two column very relaxed stackable grid">
          <div className="column">
            <h2 className="ui center aligned icon header">
              <i className="sign-in icon"></i>
              SignIn
            </h2>
            {/* <Login /> */}
          </div>
          <div className="middle aligned column">
            <div>
              <h2 className="ui center aligned icon header">
                <i className="sign-out icon"></i>
                Register
              </h2>
              <Register />
            </div>
          </div>
        </div>
        <div className="ui vertical divider">Or</div>
      </div>
    </div>
  );
}

export default VerticalDivider;
