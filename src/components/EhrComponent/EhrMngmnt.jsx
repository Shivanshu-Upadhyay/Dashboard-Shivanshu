import React from "react";
import BasicContainer from "../Container/BasicContainer";
import CenteredTabs from "../Tabs/CenteredTab";
import AppointmentTable from "../Tables/AppointmentTable";
import { ehrTableData, ehrmngmntTableHeading } from "../../db";
import AddPatientDetails from "../Forms/AddPatientDetails";
import { connect } from "react-redux";
import FaceIcon from "@material-ui/icons/Face";
import { Link } from "react-router-dom";
import { getPatientById } from "../../actions/patientAction";

const EhrMngmnt = (props) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const table1Data = [];
  const table2Data = [];
  const table3Data = [];

  props.appointments &&
    props.appointments.forEach((appointment, index) => {
      if (appointment.status === 2) {
        const newTo = {
          pathname: `patients/${appointment.patient._id}`,
          state: appointment.patient._id
        }
        const data = {
          patientId: appointment.patient._id,
          date: new Date(appointment.patient.date).toDateString(),
          name: (
            <Link
              to={newTo}
              onClick={() => {
                props.getPatientById(appointment.patient._id);
              }}
            >
              <div style={{ color: 'blue' }}>
                {`${appointment.patient.firstName} ${appointment.patient.lastName}`}
              </div>
            </Link>
          ),

          mobileNumber: `${appointment.patient.mobile}`,
          email: `${appointment.patient.email}`,

          actions: "Pending",
        };
        table3Data.push(data);
      }
    });


  props.patients &&
    props.patients.forEach((patient, index) => {
      if (patient.patientType === "home") {
        const newTo = {
          pathname: `patients/${patient._id}`,
          state: patient._id
        }
        const data = {
          patientId: patient._id,
          date: new Date(patient.date).toDateString(),
          name: (
            <Link
              to={newTo}
              onClick={() => {
                props.getPatientById(patient._id);
              }}
            >
              <div style={{ color: 'blue' }}>
                {`${patient.firstName} ${patient.lastName}`}
              </div>
            </Link>
          ),

          mobileNumber: `${patient.mobile}`,
          email: `${patient.email}`,

          actions: "Pending",
        };
        table1Data.push(data);
      }

      if (patient.patientType === "opd") {
        const newTo = {
          pathname: `patients/${patient._id}`,
          state: patient._id
        }
        const data = {
          patientId: patient._id,
          date: new Date(patient.date).toDateString(),

          name: (
            <Link
              to={newTo}
              onClick={() => {
                props.getPatientById(patient._id);
              }}
            >
              <div style={{ color: 'blue' }}>
                {`${patient.firstName} ${patient.lastName}`}
              </div>
            </Link>
          ),

          mobileNumber: `${patient.mobile}`,
          email: `${patient.email}`,

          actions: "Pending",
        };
        table2Data.push(data);
      }
    });

  const headings = [
    "Home Patients",
    "Out Patients",
    "Patients Request",
  ];

  let tableHeading = [];
  let tableData = [];
  if (activeTab === 0) {
    tableHeading = ehrmngmntTableHeading;
    tableData = table1Data;
  }
  if (activeTab === 1) {
    tableHeading = ehrmngmntTableHeading;
    tableData = table2Data;
  }
  if (activeTab === 2) {
    tableHeading = ehrmngmntTableHeading;
    tableData = table3Data;
  }

  const renderTable = () => {
    return <AppointmentTable headings={tableHeading} rows={tableData} />;
  };

  return (
    <BasicContainer>
      <CenteredTabs headings={headings} changeActiveTab={setActiveTab} />
      <div>{renderTable()}</div>
    </BasicContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    patients: state.patients,
    appointments: state.appointments
  };
};

export default connect(mapStateToProps, { getPatientById })(EhrMngmnt);
