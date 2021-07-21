import React, { useEffect, useState } from "react";
import clsx from "clsx";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import leftDrawerImg from "../../assets/sidebar.jpg";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Collapse from "@material-ui/core/Collapse";
import { Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { v4 as uuidv4 } from "uuid";
import PhysiomaticaLogo from './PhysiomaticaLogo.png'

import { connect } from "react-redux";

import {
  closeSideBar,
  closeDropDown,
  openDropDown,
} from "../../actions/sideBarAction";
import FontAwesome from "react-fontawesome";

let drawerWidth = 300;
const url = 'http://localhost:8000/';
const useStyles = makeStyles((theme) => ({
  paper: {
    // backgroundColor: "#353977",

    backgroundRepeat: "false",
    backgroundSize: "cover",
    backdropFilter: "blur(20px)",
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  rootList: {
    width: "100%",
    maxWidth: 360,
    // backgroundColor: "#2E3344",
  },
  nested: {
    paddingLeft: theme.spacing(9),



  },
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(6) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(6) + 1,
    },

  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // backgroundColor: "tdarkturquoise",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },

}));

const SideBar = (props) => {
  console.log(props);
  if (props.auth.user != null) {
    var path = props.auth.user.image;
    var name = props.auth.user.name;
  }
  drawerWidth = props.drawerWidth;
  const theme = useTheme();
  const classes = useStyles();
  const isDrawerOpen = props.isDrawerOpen;
  // const [open, setOpen] = React.useState(false);
  const [subIndex, setSubIndex] = React.useState(-1);

  const handleCloseSubList = () => {
    setSubIndex(-1);
    props.closeDropDown();
  };

  const handleOpenSubList = (i) => {
    if (props.isDropDownOpen) handleCloseSubList();
    setSubIndex(i);
    props.openDropDown();
  };
  // const handleOnCLickChevron = () => {
  const handleOnCLickMenuIcon = () => {

    props.closeDropDown();
    props.closeSideBar();
  };

  const renderCard = () => {
    return <div></div>;
  };

 





  const renderSubList = (subHeadingArray) => {
    if (isDrawerOpen)
      return (
        <Collapse in={props.isDropDownOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subHeadingArray.map((subHeading, index) => (
              <ListItem
                key={uuidv4()}
                component={Link}
                alignItems="flex-start"

                button
                to={`/${subHeading.toLowerCase()}`}
                className={classes.nested}
              >
                <ListItemText primary={subHeading} style={{ color: '#606060' }} className="nonHovering" onMouseEnter={element => {

                  element.target.classList.remove('nonHovering');
                  element.target.classList.add('hovering');
                }} onMouseLeave={element => {
                  element.target.classList.remove('hovering');
                  element.target.classList.add('nonHovering');
                }} />
              </ListItem>
            ))}
          </List>
          <Divider variant="middle" />
        </Collapse>
      );
  };

  const toggleSubMenu = (index) => {
    if (props.isDropDownOpen) handleCloseSubList();
    else handleOpenSubList(index);
  };

  const returnRoute = (heading, index) => {
    if (index === -1) return "/";
    return heading.toLowerCase().replaceAll(" ", "");
  };

  const renderList = () => {
    return (
      <div className={classes.root} role="presentation">
        <List className={classes.rootList}>
          {props.listContent.map((listObj, index) => (
            <div key={uuidv4()}>
              <ListItem
                component={Link}
                to={
                  listObj.sub.length > 0
                    ? undefined
                    : returnRoute(listObj.heading, index)
                }
                button
                onClick={() => {
                  toggleSubMenu(index);
                }}
              >




                <ListItemIcon style={{ marginLeft: '-0.8rem', color: '#606060' }} className="nonHovering"
                  onMouseEnter={element => {
                    element.target.classList.remove('nonHovering');
                    element.target.classList.add('hovering');
                  }}
                  onMouseLeave={element => {
                    element.target.classList.remove('hovering');
                    element.target.classList.add('nonHovering');
                  }}
                  onClick={element => {
                    element.target.classList.remove('nonHovering');
                    element.target.classList.add('hovering');
                  }}  >{props.listIcons[index]}</ListItemIcon>

                <ListItemText className={classes.primary} primary={<Typography style={{ fontWeight: 'bold', letterSpacing: '1px' }}>{listObj.heading}</Typography>} style={{ marginLeft: '0px', color: '#606060', textTransform: 'capitalize' }} className="nonHovering"
                  onMouseEnter={element => {
                    element.target.classList.remove('nonHovering');
                    element.target.classList.add('hovering');
                  }} onMouseLeave={element => {
                    element.target.classList.remove('hovering');
                    element.target.classList.add('nonHovering');
                  }}
                  onClick={element => {
                    element.target.classList.remove('nonHovering');
                    element.target.classList.add('hovering');
                  }}
                />



                {listObj.sub.length <= 0 ? undefined : props.isDropDownOpen &&
                  index === subIndex ? (
                  <ExpandLess
                    className="arrow"
                    fontSize="large"
                    style={{ color: '#606060' }}
                    onClick={() => {
                      handleCloseSubList();
                    }}
                  />
                ) : (
                  <ExpandMore
                    className="arrow"
                    fontSize="large"
                    style={{ color: '#606060' }}
                    onClick={() => {
                      handleOpenSubList(index);
                    }}
                  />
                )}
              </ListItem>
              {index !== subIndex
                ? undefined
                : renderSubList(props.listContent[subIndex].sub)}
            </div>
          ))}
        </List>
      </div>
    );
  };

  const WhiteTextTypography = withStyles({
    root: {
      // color: "red"
      color: "blue",
      fontWeight: "bold",
      // marginLeft:"2px",
      fontSize: "30px"
    }
  })(Typography);

  return (
    <div>
      <Drawer
        open={isDrawerOpen}
        anchor={props.anchor}
        variant={props.variant}

        className={clsx(classes.drawer, {
          [classes.drawerOpen]: isDrawerOpen,
          [classes.drawerClose]: !isDrawerOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: isDrawerOpen,
            [classes.drawerClose]: !isDrawerOpen,
            [classes.paper]: true,
          }),
        }}
      >
        <div
          className={classes.toolbar}
          style={{
            // backgroundColor: "#2E3344",
            // color:"red",

            // marginLeft: "2rem",
            marginRight: "3rem",
          }}
        >
          
          <img src={PhysiomaticaLogo} alt="" style={{height:'40%',marginRight:'20px'}} />
          
          {/* <IconButton onClick={handleOnCLickChevron}> */}
          <IconButton style={{ marginRight: "-25px", color: "blue" }} onClick={handleOnCLickMenuIcon}>


            {theme.direction === "rtl" ? (

              <MenuIcon style={{color:'#26bf99'}}/>
            ) : (
              <MenuIcon style={{color:'#26bf99'}}/>
            )}
          </IconButton>
        </div>

        <ButtonBase>
          <div class="img1">
            <img src={url + path} />

            <p className="www ">{name}</p>

          </div>
          {/* <div className="userDiv"> */}
          {/* <p className="www ">{name}</p> */}

          {/* </div> */}
        </ButtonBase>



        {props.listContent ? renderList() : undefined}
        {props.cardData ? renderCard() : undefined}

      </Drawer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isDrawerOpen: state.sideBarState,
    isDropDownOpen: state.dropDownState,
    auth: state.auth
  };
};

export default connect(mapStateToProps, {
  closeSideBar,
  closeDropDown,
  openDropDown,
})(SideBar);
