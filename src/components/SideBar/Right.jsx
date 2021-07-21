import React, { Component } from "react";

import SideBar from "./SideBar";

class Right extends Component {
  render() {
    return (
      <div>
        <SideBar
          anchor="right"
          variant="permanent"
          drawerWidth={300}
          cardData={true}
        />
      </div>
    );
  }
}

export default Right;
