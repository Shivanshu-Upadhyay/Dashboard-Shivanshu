import HistoryIcon from "@material-ui/icons/History";
import React, { Component } from "react";
import { MetaTags } from 'react-meta-tags';
import './App.css';
import { connect } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { getAllApointments } from "./actions/appointmentAction";
import { getAllPatients } from "./actions/patientAction";
import { closeDropDown, closeSideBar } from "./actions/sideBarAction";
import AddApointment from "./components/Container/AddApointmentContainer";
import Assessment from "./components/Container/Assessment";
import HomePage from "./homepage/homePage";
import Register from './components/LandingPage/Register/Register';
import DashboardContainer from "./components/Container/Container";
import Intervention from "./components/Container/Intervention";
import Patient from "./components/Container/Patient";
import ScheduleContainer from "./components/Container/ScheduleManagment";
import SettingContainer from "./components/Container/SettingContainer";
import EhrMngmnt from "./components/EhrComponent/EhrMngmnt";
import Feedback from "./components/Feedback/Feedback";
import ClinicManager from "./components/Container/ClinicManager";
import FeedbackForm from "./components/Feedback/FeedbackForm";
import AddPatientDetails from "./components/Forms/AddPatientDetails";
import Exercise from "./components/Forms/Exercise_Prescription/Exercise";
import AccountManager from "./components/Container/AccountManager";
import ExercisePrescription from "./components/Forms/Exercise_Prescription/ExercisePrescription";
import ProgramBuilder from "./components/Forms/Exercise_Prescription/ProgramBuilder";
import NavBar from "./components/NavBar";
import Plan from "./components/Plan/Plan";
import LeftSideBar from "./components/SideBar/Left";
import TopDrawer from "./components/SideBar/TopDrawer";
import { walletData } from "./db";
import EhrContainer from "./components/EhrComponent/EhrContainer";
import PatientDetails from "./components/EhrComponent/PatientDetails";
import Consent from "./components/EhrComponent/consent/Template";
import Template from "./components/EhrComponent/consent/Template";

class App extends Component {
  state = { isOpenDialog: false, popup: false };

  closeSideBarHandler = () => {
    if (this.props.isDrawerOpen) {
      if (this.props.isDropDownOpen) this.props.closeDropDown();
      this.props.closeSideBar();
    }
  };
  setpopup = (value) => {
    console.log(value);
    this.setState({ popup: value });
  };

  onBodyClick = () => {
    if (this.state.popup) this.setState({ popup: false });
  };

  walletPopup = () => {
    if (this.state.popup)
      return (
        <div
          class="ui cards"
          style={{
            position: "absolute",
            zIndex: "5",
            marginTop: "-50px",
            marginLeft: "80%",
            marginBottom: "-65px",
          }}
        >
          <div className="card">
            <div className="content">
              <div className="header">Amount: ₹ {walletData.balance}</div>
              <div
                className="description"
                style={{
                  backgroundColor: "rgb(200,200,200)",
                  cursor: "pointer",
                  padding: "5px",
                }}
              >
                <HistoryIcon /> Transaction History
              </div>
            </div>
            <div className="ui bottom attached button">
              {walletData.remainingDays} days Remaining
            </div>
          </div>
        </div>
      );
    else return undefined;
  };
  render() {

    return (
      <div onClick={this.onBodyClick}>
        <MetaTags>
          <meta name="viewport" content="width=1024"></meta>
        </MetaTags>
        <BrowserRouter>
          <Switch>
            <Route path="/signUp" component={Register} />
            <Route path="/settings">
              <div onClick={this.onBodyClick}>
                <div onClick={this.closeSideBarHandler}>
                  <NavBar
                    setWalletDialog={this.setWalletDialog}
                    setPopup={this.setpopup}
                  />
                  {this.walletPopup()}
                  <TopDrawer />
                  <SettingContainer />
                </div>
                <LeftSideBar />
              </div>
            </Route>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/clinictoday">
              <div onClick={this.onBodyClick}>
                <div onClick={this.closeSideBarHandler}>
                  <NavBar
                    setWalletDialog={this.setWalletDialog}
                    setPopup={this.setpopup}
                  />
                  {this.walletPopup()}
                  <TopDrawer />
                  <DashboardContainer />
                </div>
                <LeftSideBar />
              </div>
            </Route>

            <Route
              path="/appointmentmanager"
            >
              <div onClick={this.onBodyClick}>
                <div onClick={this.closeSideBarHandler}>
                  <NavBar
                    setWalletDialog={this.setWalletDialog}
                    setPopup={this.setpopup}
                  />
                  {this.walletPopup()}
                  <TopDrawer />
                  <ScheduleContainer />
                </div>
                <LeftSideBar />
              </div>
            </Route>
            <Route exact path="/add-appointment">
              <div onClick={this.onBodyClick}>
                <div onClick={this.closeSideBarHandler}>
                  <NavBar
                    setWalletDialog={this.setWalletDialog}
                    setPopup={this.setpopup}
                  />
                  {this.walletPopup()}
                  <TopDrawer />
                  <AddApointment />
                </div>
                <LeftSideBar />
              </div>
            </Route>
            <Route exact path="/assessment">
              <div onClick={this.onBodyClick}>
                <div onClick={this.closeSideBarHandler}>
                  <NavBar
                    setWalletDialog={this.setWalletDialog}
                    setPopup={this.setpopup}
                  />
                  {this.walletPopup()}
                  <TopDrawer />
                  <Assessment />
                </div>
                <LeftSideBar />
              </div>
            </Route>
            <Route exact path="/patients/:id">
              <div onClick={this.onBodyClick}>
                <div onClick={this.closeSideBarHandler}>
                  <NavBar
                    setWalletDialog={this.setWalletDialog}
                    setPopup={this.setpopup}
                  />
                  {this.walletPopup()}
                  <TopDrawer />
                  <EhrContainer />
                </div>
                <LeftSideBar />
              </div>
            </Route>
            <Route path="/patients">
              <div onClick={this.onBodyClick}>
                <div onClick={this.closeSideBarHandler}>
                  <NavBar
                    setWalletDialog={this.setWalletDialog}
                    setPopup={this.setpopup}
                  />
                  {this.walletPopup()}
                  <TopDrawer />
                  <EhrMngmnt />
                </div>
                <LeftSideBar />
              </div>
            </Route>
            <Route exact path="/patientDetails">
              <div onClick={this.onBodyClick}>
                <div onClick={this.closeSideBarHandler}>
                  <NavBar
                    setWalletDialog={this.setWalletDialog}
                    setPopup={this.setpopup}
                  />
                  {this.walletPopup()}
                  <TopDrawer />
                  <PatientDetails />
                </div>
                <LeftSideBar />
              </div>
            </Route>
            <Route exact path="/consent/:id">
              <div onClick={this.onBodyClick}>
                <div onClick={this.closeSideBarHandler}>
                  <NavBar
                    setWalletDialog={this.setWalletDialog}
                    setPopup={this.setpopup}
                  />
                  {this.walletPopup()}
                  <TopDrawer />
                  <Template />
                </div>
                <LeftSideBar />
              </div>
            </Route>
            <Route exact path="/add-patient">
              <div onClick={this.onBodyClick}>
                <div onClick={this.closeSideBarHandler}>
                  <NavBar
                    setWalletDialog={this.setWalletDialog}
                    setPopup={this.setpopup}
                  />
                  {this.walletPopup()}
                  <TopDrawer />
                  <AddPatientDetails />
                </div>
                <LeftSideBar />
              </div>
            </Route>
            <Route exact path="/feedback">
              <div onClick={this.onBodyClick}>
                <div onClick={this.closeSideBarHandler}>
                  <NavBar
                    setWalletDialog={this.setWalletDialog}
                    setPopup={this.setpopup}
                  />
                  {this.walletPopup()}
                  <TopDrawer />
                  <Feedback />
                </div>
                <LeftSideBar />
              </div>
            </Route>
            <Route exact path="/add-new-feedback">
              <div onClick={this.onBodyClick}>
                <div onClick={this.closeSideBarHandler}>
                  <NavBar
                    setWalletDialog={this.setWalletDialog}
                    setPopup={this.setpopup}
                  />
                  {this.walletPopup()}
                  <TopDrawer />
                  <FeedbackForm />
                </div>
                <LeftSideBar />
              </div>
            </Route>
            <Route exact path="/test" component={Patient} />
            <Route exact path="/clinicmanager">
              <div onClick={this.onBodyClick}>
                <div onClick={this.closeSideBarHandler}>
                  <NavBar
                    setWalletDialog={this.setWalletDialog}
                    setPopup={this.setpopup}
                  />
                  {this.walletPopup()}
                  <TopDrawer />
                  <ClinicManager />
                </div>
                <LeftSideBar />
              </div>
            </Route>
            <Route exact path="/accountmanager">
              <div onClick={this.onBodyClick}>
                <div onClick={this.closeSideBarHandler}>
                  <NavBar
                    setWalletDialog={this.setWalletDialog}
                    setPopup={this.setpopup}
                  />
                  {this.walletPopup()}
                  <TopDrawer />
                  <AccountManager />
                </div>
                <LeftSideBar />
              </div>
            </Route>
            <Route exact path="/billing">
              <div onClick={this.onBodyClick}>
                <div onClick={this.closeSideBarHandler}>
                  <NavBar
                    setWalletDialog={this.setWalletDialog}
                    setPopup={this.setpopup}
                  />
                  {this.walletPopup()}
                  <TopDrawer />
                  <Intervention />
                </div>
                <LeftSideBar />
              </div>
            </Route>
            <Route exact path="/exercise" component={ExercisePrescription} />
            <Route exact path="/programBuilder" component={ProgramBuilder} />
            <Route exact path="/programBuilder/:id" component={Exercise} />
            <Route path="*" exact={true}>
              <div onClick={this.onBodyClick}>
                <div onClick={this.closeSideBarHandler}>
                  <NavBar
                    setWalletDialog={this.setWalletDialog}
                    setPopup={this.setpopup}
                  />
                  {this.walletPopup()}
                  <TopDrawer />
                  <Plan />
                </div>
                <LeftSideBar />
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDrawerOpen: state.sideBarState,
    isDropDownOpen: state.dropDownState,
  };
};

export default connect(mapStateToProps, {
  closeSideBar,
  closeDropDown,
  getAllApointments,
  getAllPatients
})(App);