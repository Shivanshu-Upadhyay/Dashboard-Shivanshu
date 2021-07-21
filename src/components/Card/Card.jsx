import React from "react";
import { connect } from "react-redux";
import { closeTopDrawer } from "../../actions/sideBarAction";

function Card(props) {
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          {/* <img
            className="right floated mini ui image"
            src="/images/avatar/large/elliot.jpg"
            alt={props.data.name}
          />
          */}
          <div className="header">{props.data.name}</div>
          <div>
            <strong>Time:{props.data.time}</strong>
          </div>
          <div className="description">
            {`
             Treatment: ${props.data.treatment}
          `}
          </div>
          <div className="description">
            {`Consultant: ${props.data.consultant}`}
          </div>
        </div>
        {/* <div className="extra content">
          <div className="ui two buttons">
            <div
              className="ui basic green button"
              onClick={props.closeTopDrawer}
            >
              {props.accept}
            </div>
            <div className="ui basic red button" onClick={props.closeTopDrawer}>
              {props.cancel}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default connect(null, { closeTopDrawer })(Card);
