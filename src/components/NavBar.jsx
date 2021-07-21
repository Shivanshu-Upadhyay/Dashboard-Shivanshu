import { Tooltip, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { fade, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

import { Form, Field } from "react-final-form";
import SaveIcon from "@material-ui/icons/Save";
import { Paper, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import VideocamIcon from "@material-ui/icons/Videocam";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import clsx from "clsx";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import related to redux
import { openSideBar, openTopDrawer } from "../actions/sideBarAction";
import { addIncomeData } from "../actions/incomeAction";
import { addExpenseData } from "../actions/expenseAction";
import { logout } from "../actions/userAction";
// import { editIncomeData } from "../actions/incomeAction";
// import img from "./photos/sidebar.jpg";
import img1 from "../assets/photos/whatsapp.png";
// import img2 from "./photos/meet1.png";
import LockIcon from '@material-ui/icons/Lock';

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

// styling of the components
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.95),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.75),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),

    // backgroundColor:"6728a1",
    //necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,


    }),
  },

  hide: {
    display: "none",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 75,
  },
  contentss: {
    // width:"100%",
    marginLeft: "140px",
    marginTop: "10px"

  },
  // contentss:{
  //   marginLeft:"140px",
  //   marginTop:"10px"

  // },
  btns: {
    color: "red",
    marginRight: "120px",
    // backgroundColor:"red",
  },
  btnss: {
    color: "black",
    marginLeft: "120px",

  },

}));

//Starting of NavBar Component
function NavBar(props) {
  //  (() => {
  //       console.log(props.id);
  //       props.getIncomeDataById(props.id);
  //   }, []);

  // const onSubmit = (formvalues) => {
  //     console.log('form submitted')
  //     props.editIncomeData(props.id, formvalues);
  // };

  const initialState = {
    mouseX: null,
    mouseY: null,
  };
  const [cordinate, setCordinate] = useState(initialState);
  const [mailCounter, setMailCounter] = useState(0);
  // const [openIncomeForm, setOpenIncomeForm] = useState(false);
  // const [openExpenseForm, setOpenExpenseForm] = useState(false);

  const [openAddIncome, setOpenAddIncome] = React.useState(false);
  const [openAddExpense, setOpenAddExpense] = React.useState(false);
  const [startStr, setStartStr] = React.useState("");
  const [endStr, setEndStr] = React.useState("");

  const handleClickMail = () => {
    setMailCounter(mailCounter + 1);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);

  const handleIncomeSubmit = (formValues) => {
    props.addIncomeData(formValues);
    // props.editIncomeData(props.id, formValues)

  };

  const handleExpenseSubmit = (formValues) => {
    props.addExpenseData(formValues);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isAddMenuOpen = Boolean(anchorE2);

  const handleProfileMenuOpen = (event) => {
    // console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleShowIncome = () => {
    setOpenAddIncome(true);
  };

  const handleShowExpense = () => {
    setOpenAddExpense(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setOpenAddExpense(false);
    setOpenAddIncome(false);
  };

  const menuId = "primary-search-account-menu";
  const addMenuId = "add-menu";
  const renderMenu = (
    <Menu
      style={{ width: "500px", marginTop: "64px" }}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div>
        <div className="centerdiv">
          <h4 style={{ fontWeight: "bold", color: "gray" }}>Name</h4>
        </div>
        <p style={{ textAlign: "center" }}>Delhi,India</p>
      </div>

      <div className="maindiv">
        <div className="Leftdiv">
          <MenuItem onClick={handleMenuClose}>
            <SettingsIcon color="primary" fontSize="medium" />
           <b> Setting</b>
          </MenuItem>
        </div>

        <div className="Rightdiv">
          <MenuItem onClick={handleMenuClose}>
            < PersonIcon color="primary" fontSize="medium" />
           <b> Profile</b>
          </MenuItem>
        </div>

        <div style={{ clear: "both" }}></div>
      </div>

      <div className="maindiv">
        <div className="Leftdiv">
          <MenuItem onClick={logout}>
            <ExitToAppIcon  fontSize="medium" style={{ color: 'red'}}/>
           <b>Logout</b>
          </MenuItem>
        </div>

        <div className="Rightdiv">
          <MenuItem onClick={logout}>
            <LockIcon color="primary" fontSize="medium" />
           <b> Change Password</b>
          </MenuItem>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
    </Menu>
  );

  const handleAddMenuClose = () => {
    setAnchorE2(null);
  };

  const renderRightClickMenu = () => {
    return (
      <Menu
        keepMounted
        anchorEl={anchorE2}
        id={addMenuId}
        open={isAddMenuOpen}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={handleAddMenuClose}
      >
        <MenuItem component={Link} to="/add-patient">
          Add Patient
        </MenuItem>
        <MenuItem component={Link} to="/add-appointment">
          Add Apointment
        </MenuItem>
        <MenuItem onClick={handleShowIncome}>Add Income</MenuItem>
        <MenuItem onClick={handleShowExpense}>Add Expenses</MenuItem>
      </Menu>
    );
  };
  const handleClick = (event) => {
    setAnchorE2(event.currentTarget);
  };

  return (
    <div>
      <div style={{ cursor: "context-menu" }}>
        <AppBar
          position="fixed"
          color="default"
           

          className={clsx(classes.appBar, {
            [classes.appBarShift]: props.isOpen,
          })}
        >
          <Toolbar>
            <IconButton
              onClick={() => {
                props.openSideBar();
              }}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: props.isOpen,
              })}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon style={{color:'#4c4d4f'}}/>
            </IconButton>
            <a target="_blank" href="https://calendar.google.com/calendar">
                

                  
                
              </a>
                  


            <div className={classes.grow} />

            <div className={classes.sectionDesktop}>
              <Link to="/exercise"></Link>
              <Link to="/billing"></Link>
              <Link to="/test"></Link>
              <Link to="/assessment"></Link>

              {props.user.isLogedIn && (
                <Typography>{props.user.user.name}</Typography>
              )}
                           

             <Tooltip title="11 days Remain">
                    <button className='btn2'><TrendingUpIcon style={{ color: 'white',fontSize: 35}} /> Upgrade Your Plan </button>
                  </Tooltip>

              <a target="_blank" href="https://calendar.google.com/calendar">
                <IconButton>

                  <Tooltip title="Video Consult">
                   

                    <VideocamIcon
                      style={{
                        color: "0047ab",
                       fontSize: 35,
                      }}
                      
                    />
                  </Tooltip>
                </IconButton>
              </a>

              <IconButton>
                <Tooltip title="WhatsApp" aria-label="todays appointments">
                  <WhatsAppIcon
                  style={{fontSize: 35,}} className="whats"/>
                </Tooltip>
              </IconButton>

              <IconButton onClick={handleClick} color="inherit">
                <Tooltip
                  style={{ color: "3a3939"}}
                  title="Add New"
                  aria-label="todays appointments"
                >
                  <GroupAddIcon style={{fontSize: 35,}} color="inherit" />
                </Tooltip>
              </IconButton>

              <IconButton
                onClick={() => {
                  props.setPopup(true);
                }}
                color="3a3939"
              >
                <Tooltip
                  title={
                    <>
                      <h6>₹500</h6>
                    </>
                  }
                >
                  <AccountBalanceWalletIcon
                    style={{ color: "3a3939",}}
                    fontSize="large"
                  />
                </Tooltip>
              </IconButton>

              <IconButton
               
              >
                <Badge badgeContent={4} color="error">
  
                  <Tooltip title="Notifications">
                  <NotificationsIcon
                    style={{ color: "3a3939", }}
                     
                fontSize="large"
                  /></Tooltip>
                </Badge>
              </IconButton>

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
              ><Tooltip title="Account">
                <AccountCircle
                  
                  style={{ color: "3a3939"}}
                  fontSize="large"
                />
                </Tooltip>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      {renderMenu}
      <div>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: !props.isOpen,
          })}
        >
          <div className={clsx(classes.toolbar)} />
          {renderRightClickMenu()}
        </main>
      </div>

      <div className="incomeForm">
        <Dialog
          fullWidth="xl"
          fullScreen={fullScreen}
          // open={openIncomeForm}
          open={openAddIncome}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle style={{ color: "blue", fontSize: "bold" }} id="responsive-dialog-title" className="text-center">
            {"Add Income Item"}
          </DialogTitle>
          <DialogContent className={classes.contentss}>

            <Form onSubmit={handleIncomeSubmit}>
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <Field name="patientname">
                      {({ input }) => (
                        <div className="cc">
                          <Grid container spacing={1} alignItems="flex-end">
                            <Grid item></Grid>
                            <Grid item>
                              <TextField
                                style={{ width: "300px" }}
                                id="input-with-icon-grid"
                                {...input}
                                label="Patient Name"
                              />
                            </Grid>
                          </Grid>
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />

                  <div className="mb-1">
                    <Field name="description">
                      {({ input }) => (
                        <div>
                          <Grid container spacing={1} alignItems="flex-start">
                            <Grid item></Grid>
                            <Grid item>
                              <TextField
                                style={{ width: "300px" }}

                                id="outlined-basic"
                                label="Description"
                                {...input}
                                variant="outlined"
                              />
                            </Grid>
                          </Grid>
                        </div>
                      )}
                    </Field>
                  </div>

                  <div>
                    <Field name="amount">
                      {({ input }) => (
                        <div>
                          <Grid container spacing={1} alignItems="flex-end">
                            <Grid item></Grid>
                            <Grid item>
                              <TextField
                                style={{ width: "300px" }}

                                id="input-with-icon-grid"
                                {...input}
                                label="Amount(Rs)"
                                placeholder="(₹)"
                              />
                            </Grid>
                          </Grid>
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />

                  <DialogActions>
                    <Button className={classes.btnss}
                      autoFocus
                      onClick={handleClose}
                      variant="contained"
                      // color="secondary"
                      size="large"
                    >
                      Cancel
                    </Button>
                    <Button
                      className={classes.btns}
                      variant="contained"
                      // color="primary"
                      size="large"
                      type="submit"
                      autoFocus
                      onClick={handleClose}
                      startIcon={<SaveIcon />}
                      autoFocus
                    >
                      Save
                    </Button>
                  </DialogActions>
                </form>
              )}
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="expenseForm">
        <Dialog
          fullWidth="xl"

          fullScreen={fullScreen}
          // open={openExpenseForm}
          open={openAddExpense}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle style={{ color: "blue", fontSize: "bold" }} id="responsive-dialog-title" className="text-center">
            {"Add Expense Item"}
          </DialogTitle >
          <DialogContent className={classes.contentss}>
            <Form onSubmit={handleExpenseSubmit}>
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <Field name="itemName">
                      {({ input }) => (
                        <div>
                          <Grid container spacing={1} alignItems="flex-end">
                            <Grid item></Grid>
                            <Grid item>
                              <TextField style={{ width: "300px" }}

                                id="input-with-icon-grid"
                                {...input}
                                label="Item Name"
                              />
                            </Grid>
                          </Grid>
                        </div>
                      )}
                    </Field>
                  </div>

                  <div className="mb-1">
                    <Field name="description">
                      {({ input }) => (
                        <div>
                          <Grid container spacing={1} alignItems="flex-start">
                            <Grid item></Grid>
                            <Grid item>
                              <TextField
                                style={{ width: "300px", color: "red" }}

                                id="outlined-basic"
                                label="Description"
                                {...input}
                                variant="outlined"
                              />
                            </Grid>
                          </Grid>
                        </div>
                      )}
                    </Field>
                  </div>

                  <div>
                    <Field name="amount">
                      {({ input }) => (
                        <div>
                          <Grid container spacing={1} alignItems="flex-end">
                            <Grid item></Grid>
                            <Grid item>
                              <TextField style={{ width: "300px" }}

                                id="input-with-icon-grid"
                                {...input}
                                label="Amount(Rs)"
                                placeholder="(₹)"
                              />
                            </Grid>
                          </Grid>
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />

                  <DialogActions>
                    <Button className={classes.btnss}
                      autoFocus
                      onClick={handleClose}
                      variant="contained"
                      // color="primary"
                      size="large"
                    >
                      Cancel
                    </Button>
                    <Button className={classes.btns}
                      variant="contained"
                      // color="primary"
                      size="large"
                      type="submit"
                      autoFocus
                      onClick={handleClose}
                      startIcon={<SaveIcon />}
                      autoFocus
                    >
                      Save
                    </Button>
                  </DialogActions>
                </form>
              )}
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.sideBarState,
    user: state.auth,
    incomeData: state.incomeData,

    // selectedIncomeData: state.selectedIncomeData ,
  };
};

export default connect(mapStateToProps, {
  openSideBar,
  openTopDrawer,
  addIncomeData,
  // editIncomeData,
  addExpenseData,
})(NavBar);
