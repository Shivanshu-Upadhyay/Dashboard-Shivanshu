import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Container, CssBaseline } from "@material-ui/core";
import { connect } from "react-redux";
import classNames from "classnames";

let drawerWidth = 300;


const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(-30),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 70,
    // marginLeft: 100,

  },

  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 300,
    width: 1060
    // marginLeft: drawerWidth,

    // marginLeft: props.drawerWidth,
  },
}));

function BasicContainer(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div id="modal">
        <Container
          maxWidth="lg"
          className={clsx(classes.content, {
            [classes.contentShift]: props.isOpen,

          })}
        >
          {props.children}
        </Container>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.sideBarState,
  };
};

export default connect(mapStateToProps)(BasicContainer);
