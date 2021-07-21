import React, { Component } from "react";

import { listContent, listIcons } from "../../db";
//import TodayIcon from '@material-ui/icons/Today';

import SideBar from "./SideBar";

class Left extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sendData: props.sendData
    }
  }
  render() {
    return (
      <div>
        <SideBar
          anchor="left"
          variant="permanent"
          drawerWidth={300}
          listContent={listContent}
          listIcons={listIcons}
          sendData = {this.state.sendData}
        />
      </div>
    );
  }
}

export default Left;
