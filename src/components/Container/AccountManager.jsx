import React from "react";
import BasicContainer from "./BasicContainer";
import CenteredTabs from "../Tabs/CenteredTab";
import Treatment from "../Forms/Treatment";
import AppointmentTable from "../Tables/AppointmentTable";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Form, Field } from "react-final-form";
import SaveIcon from "@material-ui/icons/Save";
import { Button, Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CreditCardIcon from '@material-ui/icons/CreditCard';
import TreatmentCalender from "../Forms/TreatmentCalender";
import Consultation from "../Forms/Consultation";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import DialogActions from "@material-ui/core/DialogActions";
// import Navbar from "../Forms/Navbar";
import { Tooltip } from "@material-ui/core";
import './button.css'


//icons
import SearchIcon from '@material-ui/icons/Search';
import DateRangeIcon from '@material-ui/icons/DateRange';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import CloseIcon from '@material-ui/icons/Close';



import {
  addExpenseData,
  getAllExpenseData,
  deleteExpenseData,
  editExpenseData,
} from "../../actions/expenseAction";
import {
  addIncomeData,
  editIncomeData,
  deleteIncomeData,
  getAllIncomeData,
} from "../../actions/incomeAction";
const useStyles = makeStyles((theme) => ({
  consultant: {
    width: "260px",
    height: "30px",
    fontSize: "15px",
    textAlign: "center",

    marginTop: "20px",
    '&:hover': {
      backgroundColor: '#3f51b5',
      color: "white",
    }

  },


  wallet: {
    float: "right",
    width: "218px",
    marginTop: "5px",
    backgroundColor: "#FFA500",
    color: "white",
    '&:hover': {
      backgroundColor: '#FFA500',
      color: "white",
    }
  },
  // searchs:{
  //   backgroundColor: "red",
  //   width:"50px",
  // }


}));




function AccountManager(props) {
  const classes = useStyles();

  React.useEffect(() => {
    props.getAllIncomeData();
    props.getAllExpenseData();
    // props.getIncomeDataById(props.id);
    // console.log(props.id);
  }, []);

  // const onSubmit = (formValues) => {
  //     console.log(formValues)
  //     props.addIncomeData(formValues);
  //     props.addExpenseData(formValues);
  // }

  var ilength = props.incomeData.length;
  var elength = props.expenseData.length;

  const [showCalender, setShowCalender] = React.useState(false);
  const [selectDays, setSelectDays] = React.useState([]);

  const [openAddIncome, setOpenAddIncome] = React.useState(false);
  const [openAddExpense, setOpenAddExpense] = React.useState(false);

  const [iden, setIden] = React.useState();
  const [incomeRegisterData, setIncomeRegisterData] = React.useState([]);
  const [expenseRegisterData, setExpenseRegisterData] = React.useState([]);


  const [activeTab, setActiveTab] = React.useState(0);

  const headingsAccountManager = ["CONSULTATIONS", "TREATMENT SESSIONS"];

  const renderForm = () => {
    if (activeTab === 0) return <Consultation />;
    if (activeTab === 1) return <Treatment />;
  };
  // const renderTreatment = ()=>{
  //   if (activeTab === 1) return <Treatment />;


  // }

  const handleClose = () => {
    setOpenAddIncome(false);
    setOpenAddExpense(false);
    setShowCalender(false);
  };
  const handleIncomeSubmit = (formValues) => {
    props.editIncomeData(iden, formValues);
    window.location.reload();

  };

  const handleExpenseSubmit = (formValues) => {
    props.editExpenseData(iden, formValues);
    window.location.reload();

  };

  function filterData() {

    setIncomeRegisterData(filterIncomeByDate());
    setExpenseRegisterData(filterExpenseByDate());
    myArr = [];
  }

  function backToDefault() {
    setIncomeRegisterData(defaultIncome());
    setExpenseRegisterData(defaultExpense());
  }

  const deleteIncomeHandler = (id) => {
    console.log(id);
    props.deleteIncomeData(id);
    window.location.reload();
  };

  const deleteExpenseHandler = (id) => {
    console.log(id);
    props.deleteExpenseData(id);
    window.location.reload();
  };

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
                totalAmount: iTotal,
                actions: (
                  <div className="ui compact menu">
                    <div className="item">
                      <DeleteSweepIcon
                        onClick={() => {
                          deleteIncomeHandler(income._id);
                        }}
                      />
                    </div>
                    <div className="item">
                      <EditIcon
                        onClick={() => {
                          setOpenAddIncome(true);
                          setIden(income._id);
                        }}
                      ></EditIcon>
                    </div>
                  </div>
                )
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
          console.log(myArr);
          myArr.forEach((date) => {
            if (expense.date == date) {
              console.log('match found');
              eTotal += Number(expense.amount);
              const data = {
                date: `${expense.date}`,
                itemName: `${expense.itemName}`,
                description: `${expense.description}`,
                amount: `${expense.amount}`,
                totalAmount: eTotal,
                actions: (
                  <div className="ui compact menu">
                    <div className="item">
                      <DeleteSweepIcon
                        onClick={() => {
                          deleteExpenseHandler(expense._id);
                        }}
                      />
                    </div>
                    <div className="item">
                      <EditIcon
                        onClick={() => {
                          setOpenAddExpense(true);
                          setIden(expense._id);
                        }}
                      ></EditIcon>
                    </div>
                  </div>
                )

              };
              expenseRegisterData.push(data);
            }
          })
        }

      });
    return expenseRegisterData;
  }


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
          totalAmount: iTotal,
          actions: (
            <div className="ui compact menu">
              <div className="item">
                <EditIcon
                  color="secondary"
                  onClick={() => {
                    setOpenAddIncome(true);
                    setIden(income._id);
                  }}
                ></EditIcon>
              </div>
              <div className="item">
                <DeleteSweepIcon
                  color="primary"
                  onClick={() => {
                    deleteIncomeHandler(income._id);
                  }}
                />
              </div>

            </div>
          )
        };
        incomeData.push(data);
      });
    return incomeData;
  }

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
          totalAmount: eTotal,
          actions: (
            <div className="ui compact menu">
              <div className="item">
                <EditIcon
                  color="secondary"
                  onClick={() => {
                    setOpenAddIncome(true);
                    setIden(expense._id);
                  }}
                ></EditIcon>
              </div>
              <div className="item">
                <DeleteSweepIcon
                  color="primary"
                  onClick={() => {
                    deleteIncomeHandler(expense._id);
                  }}
                />
              </div>

            </div>
          )

        };
        expenseData.push(data);
      });
    return expenseData;
  }

  // calendar
  var month = new Date().getMonth() + 1;
  var todayDate =
    new Date().getDate() + "/" + month + "/" + new Date().getFullYear();
  var myArr = [];

  const incomeTableHeading = [
    { id: "date", label: "Date" },
    { id: "itemName", label: "Item Name" },
    { id: "amount", label: "Amount" },
    { id: "actions", label: "Actions" },
  ];

  const expenseTableHeading = [
    { id: "date", label: "Date" },
    { id: "itemName", label: " Item Name" },
    { id: "amount", label: "Amount" },

    { id: "actions", label: "Action" },
  ];


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
      <h3 style={{ paddingLeft: "5px", textAlign: "center" }}>BILLING & PAYMENT </h3>
 
      <Button
        onClick={handleClickPhysio}
        className='clickButton'
        variant="contained"
      style={{marginRight:'2.3rem'}}
      id='physio'>
        Consultations
      </Button>

      <Button
        onClick={handleClickStaff}
        className='button1'
        variant="contained"

        id='staff'
      >
        Treatment
      </Button>
      <br />
      <br />



      {renderForm()}


      <br />
      <br />
      <br />

      <h3 style={{ paddingLeft: "5px", textAlign: "center" }}>
        DAY BOOK
      </h3>

      <Button
        onClick={() => setActiveTab(0)}
        className='btn4'
        variant="contained">
        <CreditCardIcon style={{paddingRight:'10px',fontSize: 40}} /><div style={{ fontWeight: 'bolder', fontSize:'19px' }}> <b> Wallet</b> </div>
      </Button>
      {/* <br /> */}
      {/* <div style={{textAlign: "center"}}> */}
<Tooltip title="Short Data" placement="top">
      <Button
        className="showCalender"
        variant="contained"
        // style={{ marginLeft: "30px" }}

        
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
        style={{ marginLeft: "30px", }}
        
        onClick={() => {
          backToDefault();
        }}
      >
        <RotateLeftIcon />
        
      </Button>
      </Tooltip>
      {/* </div> */}

      <br />
      <br />
      <br />

      <Grid container spacing={2}>
        <Grid item xs="6">
          <h6 style={{ textAlign: "center" }}>Income-Recieved From</h6>
          {/* <div className="table-component"> */}

          <AppointmentTable headings={incomeTableHeading} rows={incomeRegisterData} />

          {/* </div> */}
        </Grid>

        <Grid item xs={6}>
          <h6 style={{ textAlign: "center" }}>Expense-Paid To</h6>

          <AppointmentTable headings={expenseTableHeading} rows={expenseRegisterData} />

          {openAddIncome && (
            <Dialog
              maxWidth="md"
              open={openAddIncome}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <Form onSubmit={handleIncomeSubmit} >
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                      <Field name="itemName">
                        {({ input }) => (
                          <div>
                            <Grid container spacing={1} alignItems="flex-end">
                              <Grid item></Grid>
                              <Grid item>
                                <TextField
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
                      <Button
                        autoFocus
                        onClick={handleClose}
                        variant="contained"
                        color="primary"
                        size="small"
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        type="submit"
                        autoFocus
                        startIcon={<SaveIcon />}
                        autoFocus
                      >
                        Save
                      </Button>
                    </DialogActions>
                  </form>
                )}
              </Form>
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



          {openAddExpense && (
            <Dialog
              maxWidth="md"
              open={openAddExpense}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <Form onSubmit={handleExpenseSubmit}  >
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                      <Field name="itemName">
                        {({ input }) => (
                          <div>
                            <Grid container spacing={1} alignItems="flex-end">
                              <Grid item></Grid>
                              <Grid item>
                                <TextField
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
                      <Button
                        autoFocus
                        onClick={handleClose}
                        variant="contained"
                        color="primary"
                        size="small"
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        type="submit"
                        autoFocus
                        startIcon={<SaveIcon />}
                        autoFocus
                      >
                        Save
                      </Button>
                    </DialogActions>
                  </form>
                )}
              </Form>
            </Dialog>
          )}
        </Grid>
      </Grid>
    </BasicContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    // recievedData: state.recievedData,
    incomeData: state.incomeData,
    expenseData: state.expenseData,
    //  selectedIncomeData: state.selectedIncomeData ,

  };
};

export default connect(mapStateToProps, {
  addIncomeData,
  addExpenseData,

  getAllIncomeData,

  getAllExpenseData,
  deleteIncomeData,
  deleteExpenseData,

  editIncomeData,
  editExpenseData,
})(AccountManager);
