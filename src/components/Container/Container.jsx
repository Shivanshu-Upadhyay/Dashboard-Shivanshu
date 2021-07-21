import { Button, Dialog } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CssBaseline from "@material-ui/core/CssBaseline";
import BasicContainer from "./BasicContainer";
import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from "@material-ui/icons/Create";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import EditIcon from '@material-ui/icons/Edit';
import FaceIcon from "@material-ui/icons/Face";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TextField from '@material-ui/core/TextField';
import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import { Grid } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { Form, Field } from 'react-final-form'
import { Tooltip } from "@material-ui/core";
import { connect } from "react-redux";
import {
  deleteAppointment, getAllApointments
} from "../../actions/appointmentAction";
import { getAllExpenseData, addExpenseData } from "../../actions/expenseAction";
import { getAllIncomeData, addIncomeData } from '../../actions/incomeAction';
import { deletePatient, getAllPatients } from "../../actions/patientAction";
import FormDialog from "../Forms/FormLayout";
import TreatmentCalender from "../Forms/TreatmentCalender";
import CenteredGrid from "../Grid/CenteredGrid";
import JumboButton from "../JumboButton/JumboButton";
import Divider from "../LandingPage/Dividers/VerticalDivider";
import OtherStepper from "../Stepper/OtherStepper";
import AppointmentTable from "../Tables/AppointmentTable";
import CenteredTabs from "../Tabs/CenteredTab";
import './button.css'


//icons
import SearchIcon from '@material-ui/icons/Search';
import DateRangeIcon from '@material-ui/icons/DateRange';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  // secondbutton: {
  //   width: "200px",
  //   height: "30px",
  //   fontSize: "17px",
  //   textAlign: "center",
  //   marginLeft: "4px",
  //   color: "#1a0000",
  //   fontWeight: 'bold',
  //   marginTop: "20px",
  //   paddingTop:"25px",
  //    paddingBottom:'25px',
  //    borderRadius:'25px', 
  //     background:'#DDDDDA'
  // },
  // firstsbutton: {
  //   width: "200px",
  //   height: "30px",
  //   fontSize: "17px",
  //   textAlign: "center",
  //   fontWeight: 'bold',
  //   marginLeft: "20px",
  //   marginTop: "20px",
  //   color: "#1a0000",
  //   paddingTop:"25px",
  //    paddingBottom:'25px',
  //    borderRadius:'25px', 
  //     background:'#DDDDDA'
  // },

  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 300,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 75,
  },
}));

function SimpleContainer(props) {
  React.useEffect(() => {
    props.getAllPatients();
    props.getAllApointments();
    props.getAllIncomeData();
    props.getAllExpenseData();
    checkForButtons();
  }, []);

  var alength = props.appointments.length;
  var plength = props.patients.length;
  var ilength = props.incomeData.length;
  var elength = props.expenseData.length;

  var appElement = document.getElementById('app');
  var patElement = document.getElementById('pat');
  var expElement = document.getElementById('exp');
  var incElement = document.getElementById('inc');

  const [openAddAppointment, setOpenAddAppointment] = React.useState(false);
  const [openAddPatient, setOpenAddPatient] = React.useState(false);
  const [startStr, setStartStr] = React.useState("");
  const [endStr, setEndStr] = React.useState("");
  const [iden, setIden] = React.useState();
  const [selectDays, setSelectDays] = React.useState([]);
  const [appointment, setAppointment] = React.useState(alength);
  const [patient, setPatient] = React.useState(plength);
  const [income, setIncome] = React.useState(ilength);
  const [expense, setExpense] = React.useState(elength);
  const [showCalender, setShowCalender] = React.useState(false);
  const [incomeRegisterData, setIncomeRegisterData] = React.useState([]);
  const [expenseRegisterData, setExpenseRegisterData] = React.useState([]);
  const [patientRegisterData, setPatientRegisterData] = React.useState([]);
  const [appointmentRegisterData, setAppointmentRegisterData] = React.useState([]);
  const [openAddIncome, setOpenAddIncome] = React.useState(false);
  const [openAddExpense, setOpenAddExpense] = React.useState(false);

  const handleClose = () => {
    setOpenAddAppointment(false);
    setOpenAddExpense(false);
    setOpenAddIncome(false);
    setShowCalender(false);
  };

  const patientClose = () => {
    setOpenAddPatient(false);
    setOpenAddExpense(false);
    setOpenAddIncome(false);
  }

  const handleIncomeSubmit = (formValues) => {
    props.addIncomeData(formValues);
  }

  const handleExpenseSubmit = (formValues) => {
    props.addExpenseData(formValues);
  }

  const handleShowIncome = () => {
    setOpenAddIncome(true)
  }

  const handleShowExpense = () => {
    setOpenAddExpense(true)
  }

  function checkForButtons() {
    if (appElement != null) {
      if (props.heading === 'PATIENTS') {
        expElement.classList.remove('show');
        incElement.classList.remove('show');
        appElement.classList.remove('show');
        appElement.classList.add('hide');
        patElement.classList.add('show');
        patElement.classList.remove('hide');
        expElement.classList.add('hide');
        incElement.classList.add('hide');

      }
      if (props.heading === 'INCOME') {

        appElement.classList.add('hide');
        patElement.classList.add('hide');
        incElement.classList.remove('hide');
        expElement.classList.add('hide');
        incElement.classList.add('show');
        appElement.classList.remove('show');
        patElement.classList.remove('show');
        expElement.classList.remove('show');

      }
      if (props.heading === 'EXPENSES') {

        appElement.classList.add('hide');
        patElement.classList.add('hide');
        expElement.classList.add('show');
        expElement.classList.remove('hide');
        incElement.classList.add('hide');
        incElement.classList.remove('show');
        appElement.classList.remove('show');
        patElement.classList.remove('show');

      }
      if (props.heading === 'APPOINTMENTS') {

        appElement.classList.add('show');
        appElement.classList.remove('hide');
        patElement.classList.add('hide');
        expElement.classList.add('hide');
        incElement.classList.add('hide');
        incElement.classList.remove('show');
        patElement.classList.remove('show');
        expElement.classList.remove('show');

      }
    }

  }

  var month = new Date().getMonth() + 1;
  var todayDate = new Date().getDate() + '/' + month + '/' + new Date().getFullYear();
  var myArr = [];
  function filterData() {
    setAppointment(filterAppointment());
    setPatient(filterPatient());
    setIncome(filterIncome());
    setExpense(filterExpense());
    setAppointmentRegisterData(filterAppointmentByDate());
    setIncomeRegisterData(filterIncomeByDate());
    setPatientRegisterData(filterPatientByDate());
    setExpenseRegisterData(filterExpenseByDate());
    myArr = [];
  }

  function filterPatientByDate() {
    const patientRegisterData = [];
    props.patients &&
      props.patients.forEach((patient, index) => {
        if (myArr != null) {
          myArr.forEach((date) => {
            if (patient.date == date) {
              const phone = `91${patient.mobile}`;
              const data = {
                image: <FaceIcon />,
                date: `${patient.date}`,
                patientId: patient._id,
                name: `${patient.firstName} ${patient.lastName} `,
                mobileNumber: `${patient.mobile}`,
                email: `${patient.email}`,
                actions: (
                  <div className="ui compact menu">
                    <div className="item">
                      <EditIcon
                        color="secondary"
                        onClick={() => {
                          setOpenAddPatient(true);
                          setIden(patient._id);
                        }}></EditIcon>
                    </div>
                    <div className="item">
                      <DeleteSweepIcon
                        color="primary"
                        onClick={() => {
                          deletePatientHandler(patient._id);
                        }}
                      />
                    </div>
                    <div className="item">
                      <a href={'https://wa.me/' + phone}
                        target="_blank"><WhatsAppIcon
                          color="primary"
                        ></WhatsAppIcon></a>
                    </div>
                    <div className="item">
                      <MailOutlineIcon
                        color="primary"
                      ></MailOutlineIcon>
                    </div>
                  </div>
                ),
              };
              patientRegisterData.push(data);
            }
          })
        }

      });
    return patientRegisterData;
  }

  function filterAppointmentByDate() {
    const appointmentRegisterData = [];

    props.appointments &&
      props.appointments.forEach((appointment, index) => {
        let visitStatus = "";
        if (appointment.status === 0) visitStatus = "Scheduled";
        else if (appointment.status === 1) visitStatus = "Visited";
        else if (appointment.status === -1) visitStatus = "Rescheduled";
        else if (appointment.status === 2) visitStatus = "Cancelled";
        if (myArr != null) {
          myArr.forEach((date) => {
            if (appointment.date == date) {
              const data = {
                date: `${appointment.date}`,
                name: `${appointment.patient.firstName} ${appointment.patient.lastName} `,
                time: `${new Date(appointment.start).toLocaleTimeString()} to ${new Date(appointment.end).toLocaleTimeString()}`,
                visitStatus,
                billStatus: "",
                treatment: `${appointment.formData.treatment}`,
                consultant: appointment.consultant,
                action: (
                  <div className="ui compact menu">
                    <div className="item">
                      <CreateIcon
                        color="secondary"

                        onClick={() => {
                          setStartStr(appointment.start);
                          setEndStr(appointment.end);
                          setOpenAddAppointment(true);
                        }}
                      />
                    </div>
                    <div className="item">
                      <DeleteSweepIcon
                        color="primary"

                        onClick={() => {
                          deleteAppointmentHandler(appointment._id);
                        }}
                      />
                    </div>
                    <div className="item">
                      <WhatsAppIcon color="primary"
                      ></WhatsAppIcon>
                    </div>

                    <div className="item">
                      <MailOutlineIcon color="primary"
                      ></MailOutlineIcon>
                    </div>
                  </div>
                ),
              };
              appointmentRegisterData.push(data);
            }
          })
        }

      });

    return appointmentRegisterData;

  }

  function filterIncomeByDate() {
    var iTotal = 0;
    const incomeRegisterData = [];
    props.incomeData &&
      props.incomeData.forEach((income, index) => {
        if (myArr != null) {
          myArr.forEach((date) => {
            if (income.date == date) {
              iTotal += Number(income.amount);
              const data = {
                date: `${income.date}`,
                itemName: `${income.itemName}`,
                description: `${income.description}`,
                amount: `${income.amount}`,
                totalAmount: iTotal
              };
              incomeRegisterData.push(data);
            }
          })
        }

      });
    return incomeRegisterData;
  }

  function filterExpenseByDate() {
    const expenseRegisterData = [];
    var eTotal = 0;

    props.expenseData &&
      props.expenseData.forEach((expense, index) => {
        if (myArr != null) {
          myArr.forEach((date) => {
            if (expense.date == date) {
              eTotal += Number(expense.amount);
              const data = {
                date: `${expense.date}`,
                itemName: `${expense.itemName}`,
                description: `${expense.description}`,
                amount: `${expense.amount}`,
                totalAmount: eTotal

              };
              expenseRegisterData.push(data);
            }
          })
        }

      });
    return expenseRegisterData;
  }

  var filterTotalAppointments = 0
  function filterAppointment() {
    props.appointments.forEach((appointment) => {
      myArr.forEach((date) => {
        if (appointment.date == date) ++filterTotalAppointments;
      })
    })
    return filterTotalAppointments;
  }


  function filterPatient() {
    var filterTotalPatients = 0;
    props.patients.forEach((patient) => {
      myArr.forEach((date) => {
        if (patient.date == date) ++filterTotalPatients;
      })
    })
    return filterTotalPatients;
  }

  var filterTotalIncome = 0;
  function filterIncome() {
    props.incomeData.forEach((income) => {
      myArr.forEach((date) => {
        if (income.date == date) {
          ++filterTotalIncome
        };
      })
    })
    return filterTotalIncome;
  }


  function filterExpense() {
    var filterTotalExpense = 0;
    props.expenseData.forEach((expense) => {
      myArr.forEach((date) => {
        if (expense.date == date) ++filterTotalExpense;
      })
    })
    return filterTotalExpense;
  }

  var todayAppointmentCount = 0;
  function todayAppointment() {
    props.appointments.forEach((appointment) => {
      if (appointment.date === todayDate) {
        ++todayAppointmentCount;
      }
    })
    return todayAppointmentCount;
  }

  var todayPatientCount = 0;
  function todayPatient() {
    props.patients.forEach((patient) => {
      if (patient.date === todayDate) {
        ++todayPatientCount;
      }
    })
    return todayPatientCount;
  }

  var todayIncomeCount = 0;
  function todayIncome() {
    props.incomeData.forEach((income) => {
      if (income.date === todayDate) {
        ++todayIncomeCount;
      }
    })
    return todayIncomeCount;
  }

  var todayExpenseCount = 0;
  function todayExpense() {
    props.expenseData.forEach((expense) => {
      if (expense.date === todayDate) {
        ++todayExpenseCount;
      }
    })
    return todayExpenseCount;
  }

  var todayExpenseData = todayExpense();
  var todayIncomeData = todayIncome();
  var todayAppointmentData = todayAppointment();
  var todayPatientData = todayPatient();

  const todaysData = [
    {
      heading: "APPOINTMENTS",
      data: { count: todayAppointmentData },
    },
    { heading: "PATIENTS", data: { count: todayPatientData } },
    { heading: "INCOME", data: { count: todayIncomeData } },
    { heading: "EXPENSES", data: { count: todayExpenseData } },
  ];

  const allTimeData = [
    {
      heading: "APPOINTMENTS",
      data: { count: appointment },
    },
    { heading: "PATIENTS", data: { count: patient } },
    { heading: "INCOME", data: { count: income } },
    { heading: "EXPENSES", data: { count: expense } },
  ];

  const classes = useStyles();
  const [activeTab, setActiveTab] = React.useState(0);

  const headingArray = ["APPOINTMENTS", "PATIENTS", "INCOME", "EXPENSES"];
  // if (!props.isLogedIn) {
  //   return <Divider />;
  // }


  const appointmentTableHeading = [
    { id: "date", label: "Date" },
    { id: "name", label: "Patient Name" },
    { id: "time", label: "Time" },
    { id: "visitStatus", label: "Visit Status" },
    { id: "billStatus", label: "Bill Status" },
    { id: "treatment", label: "Treatment" },
    { id: "consultant", label: "Consultant" },
    { id: "action", label: "Actions" },
  ];


  function backToDefault() {
    setAppointmentRegisterData(defaultAppointment());
    setPatientRegisterData(defaultPatient());
    setIncomeRegisterData(defaultIncome());
    setExpenseRegisterData(defaultExpense());
  }

  function defaultAppointment() {
    const appointmentData = [];

    props.appointments &&
      props.appointments.forEach((appointment, index) => {
        let visitStatus = "";
        if (appointment.status === 0) visitStatus = "Scheduled";
        else if (appointment.status === 1) visitStatus = "Visited";
        else if (appointment.status === -1) visitStatus = "Rescheduled";
        else if (appointment.status === 2) visitStatus = "Cancelled";
        const data = {
          date: `${appointment.date}`,
          name: `${appointment.patient.firstName} ${appointment.patient.lastName} `,
          time: `${new Date(appointment.start).toLocaleTimeString()} to ${new Date(appointment.end).toLocaleTimeString()}`,
          visitStatus,
          billStatus: "",
          treatment: `${appointment.formData.treatment}`,
          consultant: appointment.consultant,
          action: (
            <div className="ui compact menu">
              <div className="item">
                <CreateIcon
                  color="secondary"

                  onClick={() => {
                    setStartStr(appointment.start);
                    setEndStr(appointment.end);
                    setOpenAddAppointment(true);
                  }}
                />
              </div>
              <div className="item">
                <DeleteSweepIcon
                  color="primary"

                  onClick={() => {
                    deleteAppointmentHandler(appointment._id);
                  }}
                />
              </div>
              <div className="item">
                <WhatsAppIcon color="primary"
                ></WhatsAppIcon>
              </div>

              <div className="item">
                <MailOutlineIcon color="primary"
                ></MailOutlineIcon>
              </div>
            </div>
          ),
        };
        appointmentData.push(data);
      });
    return appointmentData;
  }


  function defaultPatient() {
    const patientData = [];
    props.patients &&
      props.patients.forEach((patient, index) => {
        var phone = '91' + patient.mobile;
        const data = {
          image: <FaceIcon />,
          date: `${patient.date}`,
          patientId: patient._id,
          name: `${patient.firstName} ${patient.lastName} `,
          mobileNumber: `${patient.mobile}`,
          email: `${patient.email}`,
          actions: (
            <div className="ui compact menu">
              <div className="item">
                <EditIcon
                  color="secondary"

                  onClick={() => {
                    setOpenAddPatient(true);
                    setIden(patient._id);
                  }}></EditIcon>
              </div>
              <div className="item">
                <DeleteSweepIcon
                  color="primary"

                  onClick={() => {
                    deletePatientHandler(patient._id);
                  }}
                />
              </div>
              <div className="item">
                <a href={'https://wa.me/' + phone}
                  target="_blank"><WhatsAppIcon
                    color="primary"
                  ></WhatsAppIcon></a>
              </div>
              <div className="item">
                <MailOutlineIcon color="primary"
                ></MailOutlineIcon>
              </div>
            </div>
          ),
        };
        patientData.push(data);
      });
    return patientData;
  }

  const appointmentData = [];

  const deleteAppointmentHandler = (id) => {
    props.deleteAppointment(id);
  };
  props.appointments &&
    props.appointments.forEach((appointment, index) => {
      let visitStatus = "";
      if (appointment.status === 0) visitStatus = "Scheduled";
      else if (appointment.status === 1) visitStatus = "Visited";
      else if (appointment.status === -1) visitStatus = "Rescheduled";
      else if (appointment.status === 2) visitStatus = "Cancelled";
      if (appointment.date === todayDate) {
        const data = {
          date: `${appointment.date}`,
          name: `${appointment.patient.firstName} ${appointment.patient.lastName} `,
          time: `${new Date(appointment.start).toLocaleTimeString()} to ${new Date(appointment.end).toLocaleTimeString()}`,
          visitStatus,
          billStatus: "",
          treatment: `${appointment.formData.treatment}`,
          consultant: appointment.consultant,
          action: (
            <div className="ui compact menu">
              <div className="item">
                <CreateIcon
                  color="secondary"

                  onClick={() => {
                    setStartStr(appointment.start);
                    setEndStr(appointment.end);
                    setOpenAddAppointment(true);
                  }}
                />
              </div>
              <div className="item">
                <DeleteSweepIcon
                  color="primary"

                  onClick={() => {
                    deleteAppointmentHandler(appointment._id);
                  }}
                />
              </div>
              <div className="item">
                <WhatsAppIcon color="primary"
                ></WhatsAppIcon>
              </div>

              <div className="item">
                <MailOutlineIcon color="primary"
                ></MailOutlineIcon>
              </div>
            </div>
          ),
        };
        appointmentData.push(data);
      }
    });

  const patientTableHeading = [
    { id: "image", label: "Image" },
    { id: "date", label: "Date" },
    { id: "patientId", label: "Patient Id" },
    { id: "name", label: "Name" },
    { id: "mobileNumber", label: "Mobile Number" },
    { id: "email", label: "Email" },
    { id: "actions", label: "Actions" },
  ];

  const patientData = [];
  const deletePatientHandler = (id) => {
    props.deletePatient(id);
  };
  props.patients &&
    props.patients.forEach((patient, index) => {
      if (patient.date === todayDate) {
        const data = {
          image: <FaceIcon />,
          date: `${patient.date}`,
          patientId: patient._id,
          name: `${patient.firstName} ${patient.lastName} `,
          mobileNumber: `${patient.mobile}`,
          email: `${patient.email}`,
          actions: (
            <div className="ui compact menu">
              <div className="item">
                <EditIcon
                  color="secondary"

                  onClick={() => {
                    setOpenAddPatient(true);
                    setIden(patient._id);
                  }}></EditIcon>
              </div>
              <div className="item">
                <DeleteSweepIcon
                  color="primary"

                  onClick={() => {
                    deletePatientHandler(patient._id);
                  }}
                />
              </div>
              <div className="item">
                <WhatsAppIcon color="primary"
                ></WhatsAppIcon>
              </div>
              <div className="item">
                <MailOutlineIcon color="primary"
                ></MailOutlineIcon>
              </div>
            </div>
          ),
        };
        patientData.push(data);
      }
    });

  const incomeTableHeading = [
    { id: "date", label: "Date" },
    { id: "itemName", label: "Patient Name" },
    { id: "description", label: "Description (Recieved Form)" },
    { id: "amount", label: "Amount" },
    { id: "totalAmount", label: "Total Amount" },

  ];

  function defaultIncome() {
    const incomeData = [];
    var iTotal = 0;

    props.incomeData &&
      props.incomeData.forEach((income, index) => {
        iTotal += Number(income.amount);
        const data = {
          date: `${income.date}`,
          itemName: `${income.itemName}`,
          description: `${income.description}`,
          amount: `${income.amount}`,
          totalAmount: iTotal
        };
        incomeData.push(data);
      });
    return incomeData;
  }

  const incomeData = [];
  var iTotal = 0;

  props.incomeData &&
    props.incomeData.forEach((income, index) => {
      if (income.date === todayDate) {
        iTotal += Number(income.amount);
        const data = {
          date: `${income.date}`,
          itemName: `${income.itemName}`,
          description: `${income.description}`,
          amount: `${income.amount}`,
          totalAmount: iTotal
        };
        incomeData.push(data);
      }
    });


  const expenseTableHeading = [
    { id: "date", label: "Date" },
    { id: "itemName", label: "Name" },
    { id: "description", label: "Description (Recieved Form)" },
    { id: "amount", label: "Amount" },
    { id: "totalAmount", label: "Total Amount" },

  ];


  function defaultExpense() {
    const expenseData = [];
    var eTotal = 0;
    props.expenseData &&
      props.expenseData.forEach((expense, index) => {
        eTotal += Number(expense.amount);
        const data = {
          date: `${expense.date}`,
          itemName: `${expense.itemName}`,
          description: `${expense.description}`,
          amount: `${expense.amount}`,
          totalAmount: eTotal

        };
        expenseData.push(data);
      });
    return expenseData;
  }
  const expenseData = [];
  var eTotal = 0;
  props.expenseData &&
    props.expenseData.forEach((expense, index) => {
      if (expense.date === todayDate) {
        eTotal += Number(expense.amount);
        const data = {
          date: `${expense.date}`,
          itemName: `${expense.itemName}`,
          description: `${expense.description}`,
          amount: `${expense.amount}`,
          totalAmount: eTotal

        };
        expenseData.push(data);
      }
    });

  const renderTable = () => {
    const i = headingArray.indexOf(props.heading);

    if (i === 0) {
      return (
        <AppointmentTable
          title={headingArray[i]}
          headings={appointmentTableHeading}
          rows={appointmentData}
        />
      );
    }
    if (i === 1) {
      return (
        <AppointmentTable
          title={headingArray[i]}
          headings={patientTableHeading}
          rows={patientData}
        />
      );
    }
    if (i === 2) {
      return (
        <AppointmentTable
          title={headingArray[i]}
          headings={incomeTableHeading}
          rows={incomeData}
        />
      );
    }
    if (i === 3) {
      return (
        <AppointmentTable
          title={headingArray[i]}
          headings={expenseTableHeading}
          rows={expenseData}
        />
      );
    }
  };

  const renderRegisterTable = () => {
    const i = headingArray.indexOf(props.heading);

    if (i === 0) {
      return (
        <AppointmentTable
          title={headingArray[i]}
          headings={appointmentTableHeading}
          rows={appointmentRegisterData}
        />
      );
    }
    if (i === 1) {
      return (
        <AppointmentTable
          title={headingArray[i]}
          headings={patientTableHeading}
          rows={patientRegisterData}
        />
      );
    }
    if (i === 2) {
      return (
        <AppointmentTable
          title={headingArray[i]}
          headings={incomeTableHeading}
          rows={incomeRegisterData}
        />
      );
    }
    if (i === 3) {
      return (
        <AppointmentTable
          title={headingArray[i]}
          headings={expenseTableHeading}
          rows={expenseRegisterData}
        />
      );
    }
  };

  const renderButtons = () => {
    return (
      <div className="buttons" style={{ marginTop: '3vh', marginBottom: '3vh' }}>
        <Link to="/add-appointment"> <Button variant="outlined" id="app" className="hide" style={{ background: "linear-gradient(to right, #493240, #f09)", color: "#fff", textTransform: "capitalize" }}>Add Appointment</Button></Link>
        <Link to="/add-patient"><Button variant="outlined" color="primary" id="pat" className="hide" style={{ background: "linear-gradient(to right, #373b44, #4286f4)", color: "#fff", textTransform: "capitalize" }}>Add Patient</Button></Link>
        <Button variant="outlined" color="primary" onClick={handleShowExpense} id='exp' className="hide" style={{ background: "linear-gradient(to right, #a86008, #ffba56)", color: "#fff", textTransform: "capitalize" }}>Add Expense</Button>
        <Button variant="outlined" color="primary" onClick={handleShowIncome} id="inc" className="hide" style={{ background: "linear-gradient(to right, #0a504a, #38ef7d)", color: "#fff", textTransform: "capitalize" }}>Add Income</Button>
      </div>
    );
  }

  // const renderTodaysTask = () => {
  //   return (
  //     <div>
  //       <JumboButton count={4} width={3} data={todaysData} showBox={true} />

  //       <CenteredGrid />

  //       <CssBaseline />

  //       {renderButtons()}

  //       {renderTable()}
  //     </div>
  //   );
  // };

  // const renderClinicalStats = () => {
  //   return (
  //     <div>

  //       <Button className="showCalender" variant="contained" color="primary" onClick={() => {
  //         setShowCalender(!showCalender);
  //       }}>Sort Data</Button>

  //       <Button variant="contained" color="secondary"
  //         style={{ marginLeft: '30px' }}
  //         onClick={() => {
  //           setAppointment(alength);
  //           setPatient(plength);
  //           setIncome(ilength);
  //           setExpense(elength);
  //           backToDefault();
  //         }}>Reset</Button>

  //       {showCalender &&
  //         <div>
  //           <TreatmentCalender
  //             selectDays={selectDays}
  //             setSelectDays={setSelectDays}
  //           />
  //           <Button
  //             variant="outlined"
  //             color="primary"
  //             onClick={() => {
  //               setShowCalender(false);
  //               selectDays.forEach((day) => {
  //                 var d = JSON.stringify(day);
  //                 var q = d.slice(1);
  //                 var anotherDate = q.slice(0, -15);
  //                 var p = anotherDate.replace(/-/g, '/');
  //                 var day = p.substr(8, 10) + '/';
  //                 var year = p.substr(0, 4);
  //                 var month = p.substr(5, 3);
  //                 var l;
  //                 var er;
  //                 var c;
  //                 var n;
  //                 var m;
  //                 var o;
  //                 var finalDate = day + month + year;

  //                 if (finalDate.charAt(3) == '0') {
  //                   l = finalDate.substr(0, 3);
  //                   er = finalDate.substr(4, 9);
  //                   c = l + er;
  //                 }
  //                 else {
  //                   c = finalDate;
  //                 }

  //                 if (finalDate.charAt(0) == '0') {
  //                   n = c.substr(0, 3);
  //                   m = c.substr(4, 9);
  //                   o = n + m;
  //                 }
  //                 else {
  //                   o = c;
  //                 }
  //                 myArr.push(o);

  //               })
  //               filterData();
  //             }}>Search Data</Button>
  //         </div>
  //       }

  //       <div style={{ paddingTop: "10px" }}>
  //         <JumboButton
  //           count={4}
  //           width={3}
  //           data={allTimeData}
  //           arrowIcon={true}
  //         ></JumboButton>
  //         <CenteredGrid />

  //         <CssBaseline />
  //         {renderButtons()}

  //         {renderRegisterTable()}
  //       </div>
  //     </div>
  //   )
  // }


  const renderForm = () => {
    if (activeTab === 0)
      return (
        <div>
          <JumboButton count={4} width={3} data={todaysData} showBox={true} />

          <CenteredGrid />

          <CssBaseline />

          {renderButtons()}

          {renderTable()}
        </div>
      );

    if (activeTab === 1)
      return (
        <div>
        <Tooltip title="Short Data" placement="top">
          <Button
            className="showCalender"
            variant="contained"
            
            onClick={() => {
              setShowCalender(true);
            }}
          >
            <DateRangeIcon />
          </Button>
          </Tooltip>
         <Tooltip title="Reset" placement="top">
          <Button
            variant="contained"
            
            style={{ marginLeft: "30px" }}
            onClick={() => {
              setAppointment(alength);
              setPatient(plength);
              setIncome(ilength);
              setExpense(elength);
              backToDefault();

            }}
          >
            <RotateLeftIcon />
          </Button>
          </Tooltip>
          <div style={{ paddingTop: "10px" }}></div>
          <div style={{ paddingTop: "10px" }}>
            <JumboButton
              count={4}
              width={3}
              data={allTimeData}
              arrowIcon={true}
            ></JumboButton>
            <CenteredGrid />

            <CssBaseline />
            {renderButtons()}

            {renderRegisterTable()}
          </div>
        </div>
      );
  };


var physio;
  var staff;

  const handleClickPhysio = () => {
    setActiveTab(0);

    physio = document.getElementById('physio');
    staff = document.getElementById('staff');

    physio.classList.add('clickButton');
    staff.classList.remove('clickButton');
    physio.classList.remove('button1');
    staff.classList.add('button1');

  }

  const handleClickStaff = () => {
    setActiveTab(1);

    staff = document.getElementById('staff');
    physio = document.getElementById('physio');
    staff.classList.add('clickButton');
    physio.classList.remove('clickButton');
    staff.classList.remove('button1');
    physio.classList.add('button1');

  }


  return (
    <BasicContainer>
      <div style={{ alignItems: 'center', alignContent: 'center', marginLeft: '30vw' }}>
        <Button
          onClick={() => {
            setActiveTab(0)
            checkForButtons();
            handleClickPhysio();
          }}
          className="clickButton"
          variant="contained"
          style={{marginRight:'20px'}}
        id='physio'>
           Today's Wall
        </Button>
        
        <Button
          onClick={() => {
            setActiveTab(1)
            checkForButtons();
            handleClickStaff();
          }}
          className="button1"
          variant="contained"
          
        id='staff'>
          Clinic Register
        </Button>
      </div>
      <br />
      <br />

      {renderForm()}
      <Container
        maxWidth="lg"
        onClick={checkForButtons()}
        className={clsx(classes.content, {
          [classes.contentShift]: !props.isOpen,
        })}
      >
        {openAddAppointment && (
          <Dialog
            maxWidth="md"
            open={openAddAppointment}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <FormDialog
              onClose={handleClose}
              startStr={startStr}
              endStr={endStr}
            />
          </Dialog>
        )}

        {openAddPatient && (
          <Dialog
            maxWidth="md"
            open={openAddPatient}
            onClose={patientClose}
            aria-labelledby="form-dialog-title"
          >
            <OtherStepper onClose={patientClose} id={iden} />
          </Dialog>
        )}

        {showCalender && (
          <div>
            <Dialog
              maxWidth="md"
              open={showCalender}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle style={{ color: "blue", fontSize: "bold" }} id="responsive-dialog-title" className="text-center">
                {"Sort Data"}
              </DialogTitle>
              <DialogContent>
                <TreatmentCalender
                  selectDays={selectDays}
                  setSelectDays={setSelectDays}
                />
                <DialogActions>
                  <Button className={classes.btnss}
                    autoFocus
                    onClick={handleClose}
                    variant="contained"
                    // color="secondary"
                    size="large"
                  >
                    <CloseIcon />
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      setShowCalender(false);
                      selectDays.forEach((day) => {
                        var d = JSON.stringify(day);
                        var q = d.slice(1);
                        var anotherDate = q.slice(0, -15);
                        var p = anotherDate.replace(/-/g, "/");
                        var day = p.substr(8, 10) + "/";
                        var year = p.substr(0, 4);
                        var month = p.substr(5, 3);
                        var l;
                        var er;
                        var c;
                        var n;
                        var m;
                        var o;
                        var finalDate = day + month + year;

                        if (finalDate.charAt(3) == "0") {
                          l = finalDate.substr(0, 3);
                          er = finalDate.substr(4, 9);
                          c = l + er;
                        } else {
                          c = finalDate;
                        }

                        if (finalDate.charAt(0) == "0") {
                          n = c.substr(0, 3);
                          m = c.substr(4, 9);
                          o = n + m;
                        } else {
                          o = c;
                        }
                        myArr.push(o);
                      });
                      filterData();
                    }}
                  >
                    <SearchIcon />
                  </Button>
                </DialogActions>
              </DialogContent>

            </Dialog>

          </div>
        )}


        <div className="incomeForm">
          <Dialog
            fullWidth="xl"
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
      </Container>
    </BasicContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.sideBarState,
    heading: state.tableHeading,
    appointments: state.appointments,
    incomeData: state.incomeData,
    expenseData: state.expenseData,
    patients: state.patients,
    isLogedIn: state.auth.isLogedIn,
    user: state.auth.user,
    heading: state.tableHeading
  };
};

export default connect(mapStateToProps, {
  getAllApointments,
  getAllPatients,
  deletePatient,
  deleteAppointment,
  getAllIncomeData,
  getAllExpenseData,
  addExpenseData,
  addIncomeData
})(SimpleContainer);