import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { makeStyles } from "@material-ui/core/styles";
// import topBackGroundImage from "../../assets/topbar.jpg";

import TopDrawerGrid from "../Grid/TopDrawerGrid";

import { connect } from "react-redux";
import { closeTopDrawer, openTopDrawer } from "../../actions/sideBarAction";

const useStyles = makeStyles((theme) => ({
  paper: {
    // backgroundImage: `url(${topBackGroundImage})`,
    backgroundRepeat: "false",
    backgroundSize: "cover",
    backdropFilter: "blur(5px)",
  },
}));

function TopDrawer(props) {
  const classes = useStyles();
  const onCloseHandler = () => {
    props.closeTopDrawer();
  };

  return (
    <div>
      <React.Fragment key={"top"}>
        <SwipeableDrawer
          classes={{ paper: classes.paper }}
          onOpen={openTopDrawer}
          onClose={onCloseHandler}
          anchor={"top"}
          open={props.isTopDrawerOpen}
        >
          <TopDrawerGrid />
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isTopDrawerOpen: state.topDrawerState,
  };
};

export default connect(mapStateToProps, { closeTopDrawer, openTopDrawer })(
  TopDrawer
);
