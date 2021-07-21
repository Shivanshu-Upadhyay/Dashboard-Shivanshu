import React from "react";
import Slide from "@material-ui/core/Slide";
import PointingError from "../LandingPage/ErrorComponent/PointingError";
import { makeStyles } from "@material-ui/core/styles";
import Validator from "validator";

import _ from "lodash";

import {
  TextField,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
  Radio,
  Tooltip,
  Dialog,
  ListItem,
} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TreatmentForm from "./TreatmentForm";
import AddPatientForm from "./AddPatient";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";


import { Form, Field } from "react-final-form";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import findOne from "../../helpers/findOne";
import { getTreatments } from "../../actions/treatmentAction";
import { getAllPatients } from "../../actions/patientAction";
import { addApointment, getAppointmentById, editAppointment } from '../../actions/appointmentAction';
import { getRandomTreatments } from '../../actions/randomTreatmentAction';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  btns: {
    color: 'red',
    marginLeft: "11px"


  },
  btnsss: {
    color: "black",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    minWidth: 150,
  },
}));

function FormLayout(props) {
  const classes = useStyles();
  React.useEffect(() => {
    props.getAllPatients();
    props.getTreatments();
    props.getRandomTreatments();
    props.getAppointmentById(props.id);
  }, []);

  var month = new Date().getMonth() + 1;
  var todayDate = new Date().getDate() + '/' + month + '/' + new Date().getFullYear();

  const onSubmit = (formValues) => {

    if (props.edit == true) {
      const data = { ...formValues };
      data.date = todayDate;
      data.start = startStr;
      data.end = endStr;
      if (startStr || endStr != null) data.status = -1;
      console.log(data);
      props.editAppointment(props.id, data);
    }
    else {
      // console.log("treatment", formValues.treatment);
      // console.log("patient", formValues.patient);
      const data = { ...formValues };
      data.formData = { patient: data.patient, treatment: data.treatment }
      data.patient = findOne(props.patients, { _id: formValues.patient });
      data.treatment = findOne(props.randomTreatmentData, { _id: formValues.treatment });

      data.date = todayDate;
      data.start = startStr;
      data.end = endStr;
      console.log(data);
      // console.log("form values ", data);
      props.addApointment(data);
    }
  };

  const [startStr, setStartStr] = React.useState(props.startStr);
  const [form, setForm] = React.useState(0);

  const handleStartTimeChange = (date) => {
    setStartStr(date);
  };

  const [endStr, setEndStr] = React.useState(props.endStr);

  const handleEndTimeChange = (date) => {
    setEndStr(date);
  };

  const renderForm = () => {
    if (form === 2) return showAddTreatmentForm();
    if (form === 1) return showAddPatientForm();
  };

  const RadioComponent = ({ input, children }) => (
    <label>
      <Radio {...input} />
      {children}
    </label>
  );

  const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) errors.title = "title is required";
    if (_.isEmpty(formValues.generate)) errors.generate = "this is required";
    if (!formValues.encounterType) errors.encounterType = "this is required";
    if (!formValues.visitType) errors.visitType = "this is required";
    return errors;
  };

  const renderAddAppointmentContent = () => {
    return (
      <div style={{ margin: "1rem" }}>
        <div className="field">
          <Field name="consultant">
            {({ input, meta }) => (
              <div class="field">
                <label style={{ color: "blue" }}>Consultant Name </label>
                <input
                  type="text"
                  placeholder="Consultant"
                  {...input}
                />
                <PointingError input={input} meta={meta} />
              </div>
            )}
          </Field>
        </div>
        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date On"
                  value={startStr}
                  onChange={handleStartTimeChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>

              <KeyboardTimePicker
                margin="normal"
                id="time-picker1"
                label="Time From"
                value={startStr}
                onChange={handleStartTimeChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />

              <KeyboardTimePicker
                margin="normal"
                id="time-picker2"
                label="Time To"
                value={endStr}
                onChange={handleEndTimeChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </div>
        <br />

        <div className="ui form">
          <Field name="notes">
            {({ input, meta }) => (
              <div class="field">
                <label style={{ color: "blue" }}>Notes</label>
                <textarea rows="3" {...input}></textarea>
                <PointingError input={input} meta={meta} />
              </div>
            )}
          </Field>

          <div className="field">
            <label style={{ color: "blue" }}>Generate</label>

            <div className="inline fields">
              <Field name="generate.treatmentProtocol" type="checkbox">
                {({ input, meta }) => (
                  <div>
                    <FormControlLabel
                      control={<Checkbox name="checkedC" {...input} />}
                      label="Treatment Protocol"
                    />
                    <PointingError input={input} meta={meta} />
                  </div>
                )}
              </Field>
              <Field name="generate.dailyRegister" type="checkbox">
                {({ input, meta }) => (
                  <FormControlLabel
                    control={<Checkbox name="checkedD" {...input} />}
                    label="Daily Register"
                  />
                )}
              </Field>
              <Field name="generate.invoice" type="checkbox">
                {({ input, meta }) => (
                  <FormControlLabel
                    control={<Checkbox name="checkedE" {...input} />}
                    label="Invoice"
                  />
                )}
              </Field>
            </div>
          </div>
          <div className="ui segment" style={{ backgroundColor: "inherit" }}>
            <div className="ui two column very relaxed grid ">
              <div class="ui vertical divider"></div>
              <div className="column">
                <div className="field">
                  <label style={{ color: "blue" }}>Visit Type</label>
                  <div className="inline fields">
                    <Field
                      name="visitType"
                      value="0"
                      type="radio"
                      component={RadioComponent}
                    >
                      First Visit
                    </Field>
                    <Field
                      name="visitType"
                      value="1"
                      type="radio"
                      component={RadioComponent}
                    >
                      Follow Up
                    </Field>
                  </div>
                </div>
                <div className="field">
                  <label style={{ color: "blue" }}>Encounter Type</label>
                  <div className="inline fields">
                    <Field
                      name="encounterType"
                      type="radio"
                      value="0"
                      component={RadioComponent}
                    >
                      In Person
                    </Field>
                    <Field
                      name="encounterType"
                      type="radio"
                      value="1"
                      component={RadioComponent}
                    >
                      Online
                    </Field>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label style={{ color: "blue" }}>Notify Consultant</label>
                  <div className="inline fields">
                    <Field name="notifyConsultant.email" type="checkbox">
                      {({ input, meta }) => (
                        <FormControlLabel
                          control={<Checkbox name="checkedC" {...input} />}
                          label="Email"
                        />
                      )}
                    </Field>
                    <Field name="notifyConsultant.sms" type="checkbox">
                      {({ input, meta }) => (
                        <FormControlLabel
                          control={<Checkbox name="checkedC" {...input} />}
                          label="SMS"
                        />
                      )}
                    </Field>
                  </div>
                </div>
                <div>
                  <div className="field">
                    <label style={{ color: "blue" }}>Notify Patient</label>
                    <div className="inline fields">
                      <Field name="notifyPatient.email" type="checkbox">
                        {({ input, meta }) => (
                          <FormControlLabel
                            control={<Checkbox name="checkedC" {...input} />}
                            label="Email"
                          />
                        )}
                      </Field>
                      <Field name="notifyPatient.sms" type="checkbox">
                        {({ input, meta }) => (
                          <FormControlLabel
                            control={<Checkbox name="checkedC" {...input} />}
                            label="SMS"
                          />
                        )}
                      </Field>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const TransitionRight = React.forwardRef(function Transition(props, ref) {
    return (
      <Slide direction="right" timeout={{ appear: 200 }} ref={ref} {...props} />
    );
  });

  const showAddTreatmentForm = () => {
    return (
      <Dialog
        TransitionComponent={TransitionLeft}
        maxWidth="md"
        open={form === 2}
        onClose={() => setForm(0)}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            backgroundColor: "rgb(240,240,240)",
          },
        }}
      >
        <div style={{ height: "40rem", width: "30rem" }}>
          <TreatmentForm closeForm={() => setForm(0)} />
        </div>
      </Dialog>
    );
  };
  const TransitionLeft = React.forwardRef(function Transition(props, ref) {
    return (
      <Slide direction="left" timeout={{ appear: 200 }} ref={ref} {...props} />
    );
  });

  const showAddPatientForm = () => {
    return (
      <Dialog
        TransitionComponent={TransitionRight}
        maxWidth="md"
        open={form === 1}
        onClose={() => setForm(0)}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            backgroundColor: "rgb(240,240,240)",
          },
        }}
      >
        <div style={{ height: "40rem", width: "30rem" }}>
          <AddPatientForm closeForm={() => setForm(0)} />
        </div>
      </Dialog>
    );
  };

  return (
    <div
      style={{
        borderRadius: "5rem",
        height: "100vh",
        width: "100vh",
      }}
    >
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, errors, submitting, form }) => (
          <form className="ui form" onSubmit={handleSubmit}>
            <div
              style={{
                marginLeft: "1rem",
              }}
            >
              <div>
                <h2 className="ui center aligned icon header">
                  <i className="circular users icon"></i>
                  Add Appointment
                </h2>
                <div>
                  <h4 class="ui horizontal divider header">
                    <i class="wpforms icon"></i>
                    Fill the form
                  </h4>
                </div>
              </div>
              <div>
                <div
                  class="ui left floated segment"
                  style={{
                    backgroundColor: "inherit",
                    borderWidth: "0px",
                    boxShadow: "none",
                    marginRight: "-5rem",
                    marginTop: "0rem",
                  }}
                >
                  <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Select Patient
                    </InputLabel>
                    <Field name="patient" type="select">
                      {({ input, meta }) => (
                        <Select
                          className={classes.selectEmpty}
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          {...input}
                          // onChange={handleChange}
                          label="Select Patient"
                        >
                          {/* <MenuItem>
                            <input
                              type="text"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            />
                          </MenuItem> */}
                          {props.patients.map((patient) => (
                            <MenuItem key={patient._id} value={patient._id}>
                              {patient.firstName}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    </Field>
                  </FormControl>
                  <Tooltip title="Add Patient">
                    <Fab
                      aria-label="add"
                      style={{ marginTop: "1rem", marginLeft: "1rem" }}
                      onClick={() => setForm(1)}
                    >
                      <AddIcon />
                    </Fab>
                  </Tooltip>
                </div>

                <div
                  class="ui right floated segment"
                  style={{
                    backgroundColor: "inherit",
                    borderWidth: "0px",
                    boxShadow: "none",
                    marginTop: "-0rem",
                    marginLeft: "-5rem",
                  }}
                >
                  <Tooltip title="Add Treatment">
                    <Fab
                      aria-label="add"
                      style={{ marginTop: "1rem", marginRight: "1rem" }}
                      onClick={() => setForm(2)}
                    >
                      <AddIcon />
                    </Fab>
                  </Tooltip>

                  <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Select Treatment
                    </InputLabel>
                    <Field name="treatment" type="select">
                      {({ input, meta }) => (
                        <Select
                          className={classes.selectEmpty}
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          {...input}
                          // onChange={handleChange}
                          label="Select Treatment"
                        >
                          {props.randomTreatmentData.map((treatment) => (
                            <MenuItem key={treatment._id} value={treatment._id}>
                              {treatment.name}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    </Field>
                  </FormControl>
                </div>
              </div>
              {renderAddAppointmentContent()}

              <div style={{ textAlign: "center" }}>
                <Button
                  className={classes.btnsss}
                  variant="contained"
                  // color="primary"
                  size="large"
                  autoFocus
                  onClick={props.handleClose}
                  // startIcon={<SaveIcon />}
                  autoFocus
                >
                  Discard
                </Button>
                <Button
                  className={classes.btns}
                  variant="contained"
                  // color="primary"
                  size="large"
                  type="submit"
                  autoFocus
                  startIcon={<SaveIcon />}
                  autoFocus
                >
                  Save
                </Button>

              </div>
            </div>
          </form>
        )}
      </Form>

      {renderForm()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    patients: state.patients,
    randomTreatmentData: state.randomTreatmentData,
    selectedAppointment: state.selectedAppointment
  };
};

export default connect(mapStateToProps, {
  getAllPatients,
  getTreatments,
  addApointment,
  getRandomTreatments,
  getAppointmentById,
  editAppointment
})(
  FormLayout
);
