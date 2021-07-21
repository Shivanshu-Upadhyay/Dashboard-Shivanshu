import React from "react";
import BasicContainer from "./BasicContainer";
import AppointmentTable from "../Tables/AppointmentTable";
import CenteredTabs from "../Tabs/CenteredTab";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Dialog } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CreateIcon from "@material-ui/icons/Create";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import VideocamIcon from "@material-ui/icons/Videocam";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import './button.css'
import DoneIcon from "@material-ui/icons/Done";
import WarningIcon from "@material-ui/icons/Warning";
import { editStatus, deleteAppointment } from "../../actions/appointmentAction";
import {
  appointmentsTableHeading,
  rescheduledAppointmentsTableHeadings,
  cancelledAppointmentsTableHeadings,
} from "../../db";
import { connect } from "react-redux";
import FormLayout2 from "../Forms/FormLayout2";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appoint: {
    width: "260px",
    height: "30px",
    fontSize: "15px",
    textAlign: "center",

    marginTop: "20px",
    "&:hover": {
      backgroundColor: "#3f51b5",
      color: "white",
    },
  },
  appoints: {
    width: "260px",
    height: "30px",
    fontSize: "15px",
    textAlign: "center",
    backgroundColor: "#FFA500",
    color: "white",

    marginTop: "20px",
    "&:hover": {
      backgroundColor: "#FFA500",
    },
  },
  buttoncontainer: {
    display: "inline-block",
    display: "flex",

    justifyContent: "space-around",
    flexDirection: "row",
  },
}));

const ScheduleManagment = (props) => {
  const classes = useStyles();

  const [activeTab, setActiveTab] = React.useState(0);
  const [openChangeStatus, setOpenChangeStatus] = React.useState(false);
  const [name, setName] = React.useState("");
  const [iden, setIden] = React.useState();
  const [appData, setAppData] = React.useState({});

  const [openAppointmentForm, setOpenAppointmentForm] = React.useState(false);

  const table1Data = [];
  const table2Data = [];
  const table3Data = [];

  const handleClose = () => {
    setOpenChangeStatus(false);
    setOpenAppointmentForm(false);
  };

  const changeStatus = () => {
    console.log("hello");
    console.log(iden, appData);
    props.editStatus(iden, appData);
  };

  setInterval(() => {
    props.appointments.map((appointment) => {
      var startTime = new Date(appointment.start);
      var deadline = new Date(startTime);
      deadline.setMinutes(startTime.getMinutes() + 15);
      var nowTime = new Date().toLocaleTimeString();
      if (nowTime > deadline.toLocaleTimeString()) {
        setIden(appointment._id);
        setAppData({ status: 2 });
        props.editStatus(iden, appData);
      }
    });
  }, 60000);

  props.appointments &&
    props.appointments.forEach((appointment, index) => {
      let visitStatus = "";

      if (appointment.status === 0) {
        visitStatus = "Scheduled";
        const data = {
          date: new Date(appointment.start).toDateString(),
          ptName: `${appointment.patient.firstName} ${appointment.patient.lastName} `,
          time: `${new Date(
            appointment.start
          ).toLocaleTimeString()} to ${new Date(
            appointment.end
          ).toLocaleTimeString()}`,
          visitStatus,
          billStatus: "Pending",
          ctName: `${appointment.consultant}`,
          actions: (
            <div className="ui compact menu">
              <div className="item">
                <CreateIcon
                  color="secondary"
                  onClick={() => {
                    setIden(appointment._id);
                    setOpenAppointmentForm(true);
                  }}
                />
              </div>
              <div className="item">
                <VideocamIcon color="secondary" />
              </div>

              <div className="item">
                <DoneIcon
                  color="primary"
                  onClick={() => {
                    setName(
                      `${appointment.patient.firstName} ${appointment.patient.lastName} `
                    );
                    setAppData({ status: 1 });
                    setIden(appointment._id);
                    setOpenChangeStatus(true);
                  }}
                />
              </div>
              <div className="item">
                <WhatsAppIcon color="primary"></WhatsAppIcon>
              </div>
              <div className="item">
                <DeleteSweepIcon
                  color="primary"
                  onClick={() => {
                    setIden(appointment._id);
                    console.log(iden);
                    props.deleteAppointment(iden);
                  }}
                />
              </div>
            </div>
          ),
        };
        table1Data.push(data);
      }

      if (appointment.status === 1) {
        visitStatus = "Visited";
        const data = {
          date: new Date(appointment.start).toDateString(),
          ptName: `${appointment.patient.firstName} ${appointment.patient.lastName} `,
          time: `${new Date(
            appointment.start
          ).toLocaleTimeString()} to ${new Date(
            appointment.end
          ).toLocaleTimeString()}`,
          visitStatus,
          billStatus: "Pending",
          ctName: `${appointment.consultant}`,
          actions: (
            <div className="ui compact menu">
              <div className="item">
                <CreateIcon
                  color="secondary"
                  onClick={() => {
                    setIden(appointment._id);
                    setOpenAppointmentForm(true);
                  }}
                />
              </div>
              <div className="item">
                <VideocamIcon color="secondary" />
              </div>

              <div className="item">
                <WhatsAppIcon color="primary"></WhatsAppIcon>
              </div>
              <div className="item">
                <DeleteSweepIcon
                  color="primary"
                  onClick={() => {
                    setIden(appointment._id);
                    console.log(iden);
                    props.deleteAppointment(iden);
                  }}
                />
              </div>
            </div>
          ),
        };
        table1Data.push(data);
      }

      if (appointment.status === -1) {
        visitStatus = "Rescheduled";
        const data = {
          date: new Date(appointment.start).toDateString(),
          ptName: `${appointment.patient.firstName} ${appointment.patient.lastName} `,
          time: `${new Date(
            appointment.start
          ).toLocaleTimeString()} to ${new Date(
            appointment.end
          ).toLocaleTimeString()}`,
          visitStatus,
          billStatus: "Pending",
          ctName: `${appointment.consultant}`,
          actions: (
            <div className="ui compact menu">
              <div className="item">
                <CreateIcon
                  color="secondary"
                  onClick={() => {
                    setIden(appointment._id);
                    setOpenAppointmentForm(true);
                  }}
                />
              </div>
              <div className="item">
                <VideocamIcon color="secondary" />
              </div>

              <div className="item">
                <DoneIcon
                  color="secondary"
                  onClick={() => {
                    setName(
                      `${appointment.patient.firstName} ${appointment.patient.lastName} `
                    );
                    setAppData({ status: 1 });
                    setIden(appointment._id);
                    setOpenChangeStatus(true);
                  }}
                />
              </div>
              <div className="item">
                <WhatsAppIcon color="secondary"></WhatsAppIcon>
              </div>
              <div className="item">
                <DeleteSweepIcon
                  color="secondary"
                  onClick={() => {
                    setIden(appointment._id);
                    props.deleteAppointment(iden);
                  }}
                />
              </div>
            </div>
          ),
        };
        table2Data.push(data);
      }

      if (appointment.status === 2) {
        visitStatus = "Cancelled";
        const data = {
          date: new Date(appointment.start).toDateString(),
          ptName: `${appointment.patient.firstName} ${appointment.patient.lastName} `,
          time: `${new Date(
            appointment.start
          ).toLocaleTimeString()} to ${new Date(
            appointment.end
          ).toLocaleTimeString()}`,
          visitStatus,
          billStatus: "Pending",
          ctName: `${appointment.consultant}`,
          actions: (
            <div className="ui compact menu">
              <div className="item">
                <DoneIcon
                  color="secondary"
                  onClick={() => {
                    setName(
                      `${appointment.patient.firstName} ${appointment.patient.lastName} `
                    );
                    setAppData({ status: 1 });
                    setIden(appointment._id);
                    setOpenChangeStatus(true);
                  }}
                />
              </div>
              <div className="item">
                <WhatsAppIcon color="primary"></WhatsAppIcon>
              </div>
              <div className="item">
                <DeleteSweepIcon
                  color="primary"
                  onClick={() => {
                    setIden(appointment._id);
                    console.log(iden);
                    props.deleteAppointment(iden);
                  }}
                />
              </div>
            </div>
          ),
        };
        table3Data.push(data);
      }
    });

  const headings = [
    "Appointments List",
    "Request Appointments",
    "Cancelled Appointments",
  ];

  let tableHeading = [];
  let tableData = [];
  if (activeTab === 0) {
    tableHeading = appointmentsTableHeading;
    tableData = table1Data;
  }
  if (activeTab === 1) {
    tableHeading = rescheduledAppointmentsTableHeadings;
    tableData = table2Data;
  }
  if (activeTab === 2) {
    tableHeading = cancelledAppointmentsTableHeadings;
    tableData = table3Data;
  }

  var appo;
  var requst;
  var cancell;
  const handleClickappo = () => {
    setActiveTab(0);

   appo = document.getElementById('appo');
   requst = document.getElementById('requst');
   cancell = document.getElementById('cancell');
   
   appo.classList.add('clickButton');
   requst.classList.remove('clickButton');
   cancell.classList.remove('clickButton');
   appo.classList.remove('button1');
   requst.classList.add('button1');
   cancell.classList.add('button1');

  }

  const handleClickrequst = () => {
    setActiveTab(1);

   requst = document.getElementById('requst');
   appo = document.getElementById('appo');
   cancell = document.getElementById('cancell');
   requst.classList.add('clickButton');
   appo.classList.remove('clickButton');
   cancell.classList.remove('clickButton');
   requst.classList.remove('button1');
   appo.classList.add('button1');
   cancell.classList.add('button1');

  }

  const handleClickcancell = () => {
    setActiveTab(2);

   requst = document.getElementById('requst');
   appo = document.getElementById('appo');
   cancell = document.getElementById('cancell');
   cancell.classList.add('clickButton');
   appo.classList.remove('clickButton');
   requst.classList.remove('clickButton');
   cancell.classList.remove('button1');
   appo.classList.add('button1');
   requst.classList.add('button1');

  }

  




  const renderTable = () => {
    return <AppointmentTable headings={tableHeading} rows={tableData} />;
  };

  return (
    <BasicContainer className="hhh">
      <div className='space'>
        <Button
          onClick={handleClickappo}
          className='clickButton'
          variant="contained"
          color="primary"
        id='appo'>
          Appointments List{" "}
        </Button>

        <Button
          
          onClick={handleClickrequst}
          className='button1'
          variant="contained"
          color="primary"
         id='requst'
        >
          Request List
        </Button>
        <Button
          onClick={handleClickcancell}
          className='button1'
          variant="contained"
          color="white "
          color="primary"
           id='cancell'
        >
          Cancelled List
        </Button>
        <Link
          style={{ marginLeft: "130px", textDecoration: "none" }}
          to="/add-appointment"
        >
          <Button className='btn3' variant="contained" style={{marginTop:'2.3rem'}}>
            {" "}
            <div style={{ color: 'white', fontWeight: 'bold',fontSize:'15px' }}>Add New Appointments</div> {" "}
          </Button>
        </Link>
      </div>

      <br />
      <br />
      {/* <br/> */}

      {/* <CenteredTabs headings={headings} changeActiveTab={setActiveTab} /> */}
      <div>{renderTable()}</div>
      <div className="dialog-for-status">
        <Dialog
          maxWidth="md"
          open={openChangeStatus}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <div className="pop-up" style={{ height: "30vh", width: "30vw" }}>
            <div className="icon-danger">
              <WarningIcon />
            </div>
            <div className="sure">Are You Sure ?</div>
            <div className="patient">{name} has been arrived</div>
            <div className="buttons">
              <Button variant="text" color="default" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={changeStatus}
              >
                Save
              </Button>
            </div>
          </div>
        </Dialog>
      </div>
      <div className="appointment-form">
        <Dialog
          maxWidth="md"
          open={openAppointmentForm}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <FormLayout2 id={iden} edit={true} />
        </Dialog>
      </div>
    </BasicContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    appointments: state.appointments,
  };
};

export default connect(mapStateToProps, {
  editStatus,
  deleteAppointment,
})(ScheduleManagment);
