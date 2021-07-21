import React from "react";
import Switch from "@material-ui/core/Switch";
import CenteredTab from "../Tabs/CenteredTab";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Form, Field } from "react-final-form";
import Validator from "validator";
import { validate } from "uuid";
import PointingError from "../LandingPage/ErrorComponent/PointingError";

const smsHeadingData = [
  "To all patients With Appointments",
  "To Specific patient only",
  "Announcment opening to specific patients",
];

function SMSForm({ open }) {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const [currentTab, setcurrentTab] = React.useState(0);
  const changeCurrentTab = (index) => {
    setcurrentTab(index);
  };

  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);
  const [checked3, setChecked3] = React.useState(true);

  const handleSwitch1Change = () => {
    setChecked1(!checked1);
  };

  const handleSwitch2Change = () => {
    setChecked2(!checked2);
  };

  const handleSwitch3Change = () => {
    setChecked3(!checked3);
  };



  const validate = (formValues) => {
    const errors = {};
    // email
   
    if (!formValues.reason) errors.reason= "Reason is required";
    // if (!formValues.description) errors.description = "Item Code  is required";
    // if (!formValues.noOfItems) errors.noOfItems = "No. of items is required";
    // if (!formValues.amount) errors.amount = "Amount  is required";
    // if (!formValues.discount) errors.discount = "Discount  is required";
    // if (!formValues.total) errors.total = "Total is required";

   

    return errors;
  };
  const renderError = (meta) => {
    if (meta.touched && meta.error)
      return <div className="ui pointing red basic label">{meta.error}</div>;
    return undefined;
  };



  const renderSwitches = () => {
    return (
      <div className="ui-form" style={{ alignContent: "space-between" }}>
        <h3 class="ui dividing header">SMS Notification</h3>
        <div class="form-group row">
          <label Htmlfor="staticEmail" class="col-sm-5 col-form-label">
            Daily Notification for Consultants
          </label>
          <div class="col-sm-7">
            <Switch
              checked={checked1}
              onChange={handleSwitch1Change}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </div>
        </div>

        <div class="form-group row">
          <label Htmlfor="staticEmail" class="col-sm-5 col-form-label">
            Daily Notification for Patients
          </label>
          <div class="col-sm-7">
            <Switch
              checked={checked2}
              onChange={handleSwitch2Change}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </div>
        </div>

        <div class="form-group row">
          <label Htmlfor="staticEmail" class="col-sm-5 col-form-label">
            SMS Notification for Patients (Welcome to Clinic)
          </label>
          <div class="col-sm-7">
            <Switch
              checked={checked3}
              onChange={handleSwitch3Change}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderToAllPatients = () => (
    <div>
      <div>
        <Form onSubmit={onSubmit} validate ={validate}>
          {({ handleSubmit, form }) => (
            <form class="ui form" onSubmit={handleSubmit}>
              <Field name="leaveDate">
                {({ input, meta }) => (
                  <div class="field">
                    <label>Leave Date</label>
                    <TextField
                      id="date"
                      type="date"
                      defaultValue="2017-05-24"
                      {...input}
                      // className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                     <PointingError input = {input } meta = {meta} />
                  </div>
                )}
              </Field>
              <Field name="reason">
                {({ input, meta }) => (
                  <div class="field">
                    <label>Reason</label>
                    <textarea rows="2" {...input}></textarea>
                    <PointingError input = {input } meta = {meta} />
                  </div>
                )}
              </Field>
              <Field name="smsNow" type="checkbox">
                {({ input, meta }) => (
                  <div class="field">
                    <FormControlLabel
                      control={<Checkbox {...input} color="secondary" />}
                      label="Notify Me"
                      labelPlacement="end"
                    />
                     <PointingError input = {input } meta = {meta} />
                  </div>
                )}
              </Field>
              <Field name="hoursbefore24" type="checkbox">
                {({ input, meta }) => (
                  <div class="field">
                    <FormControlLabel
                      control={<Checkbox {...input} color="secondary" />}
                      label="24 Hrs Before"
                      labelPlacement="end"
                    />
                     <PointingError input = {input } meta = {meta} />
                  </div>
                )}
              </Field>
              <Field name="onDayOfAppointment" type="checkbox">
                {({ input, meta }) => (
                  <div class="field ui 16 column wide">
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...input}
                          color="secondary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        />
                      }
                      labelPlacement="end"
                      label="SMS on the day of Appointment"
                    />

                   <PointingError input = {input } meta = {meta} />
                  </div>
                )}
              </Field>
              <div style={{ textAlign: "center" }}>
                <button type="submit" className="ui primary button">
                  Save
                </button>
                <button type="reset" className="ui button" onClick={form.reset}>
                  Discard
                </button>
              </div>
            </form>
          )}
        </Form>
      </div>
    </div>
  );

  const renderToSpecificPatients = () => (
    <div>
      <div>
        <Form onSubmit={onSubmit}>
          {({ handleSubmit, form }) => (
            <form class="ui form" onSubmit={handleSubmit}>
              <Field name="name">
                {({ input, meta }) => (
                  <div class="field">
                    <label>Leave Date</label>
                    <TextField
                      id="date"
                      type="date"
                      defaultValue="2017-05-24"
                      {...input}
                      // className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                )}
              </Field>
              <Field name="name">
                {({ input, meta }) => (
                  <div class="field">
                    <label>Patient Name</label>
                    <input type="text" {...input} placeholder="Patient Name" />
                  </div>
                )}
              </Field>
              <Field name="reasons">
                {({ input, meta }) => (
                  <div class="field">
                    <label>Reason</label>
                    <textarea rows="2" {...input}></textarea>
                  </div>
                )}
              </Field>
              <Field type="checkbox" name="notifyMe">
                {({ input, meta }) => (
                  <div class="field">
                    <FormControlLabel
                      control={<Checkbox {...input} color="secondary" />}
                      label="Notify Me"
                      labelPlacement="end"
                    />
                    {console.log(input)}
                  </div>
                )}
              </Field>
              <Field name="smsOnDateOfAppointment">
                {({ input, meta }) => (
                  <div className="field">
                    <FormControlLabel
                      value={true}
                      control={<Checkbox {...input} color="secondary" />}
                      label="SMS ON THE DAY OF APPOINTMENT"
                      labelPlacement="end"
                    />
                  </div>
                )}
              </Field>
              <Field name="24hrsbefore">
                {({ input, meta }) => (
                  <div className="field">
                    <FormControlLabel
                      value={true}
                      control={<Checkbox {...input} color="secondary" />}
                      label="24 Hrs Before"
                      labelPlacement="end"
                    />
                  </div>
                )}
              </Field>
              <div style={{ textAlign: "center" }}>
                <button type="submit" className="ui primary button">
                  Save
                </button>
                <button type="reset" className="ui button" onClick={form.reset}>
                  Discard
                </button>
              </div>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
  const renderAnnounceToSpecificPatients = () => (
    <div>
      <Form onSubmit={onSubmit} initialValues={{ smsOn: true }}>
        {({ handleSubmit, form }) => (
          <form class="ui form" onSubmit={handleSubmit}>
            <Field name="openingDate">
              {({ input, meta }) => (
                <div class="field">
                  <label>Opening Date</label>
                  <TextField
                    id="date"
                    type="date"
                    {...input}
                    // className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
              )}
            </Field>
            <Field name="patientName">
              {({ input, meta }) => (
                <div class="field">
                  <label>Patient Name</label>
                  <input type="text" {...input} placeholder="Patient Name" />
                </div>
              )}
            </Field>
            <div class="field">
              <label>Reason</label>
              <TextareaAutosize
                rowsMax={4}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                defaultValue="Ring Road Physiotherapy Centre  is reopening our services to the public after this COVID-19 disaster"
                readOnly
              />
            </div>
            <Field name="smsOn" type="checkbox">
              {({ input, meta }) => (
                <div class="field " style={{ flexDirection: "row" }}>
                  <FormControlLabel
                    control={
                      <Checkbox {...input} color="secondary" label="SMS NOW" />
                    }
                    label="SMS Now"
                    labelPlacement="end"
                  />
                </div>
              )}
            </Field>
            <div style={{ textAlign: "center" }}>
              <button type="submit" className="ui primary button">
                Save
              </button>
              <button type="reset" className="ui button" onClick={form.reset}>
                Discard
              </button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );

  const renderTabs = () => {
    if (currentTab === 0) return renderToAllPatients();
    if (currentTab === 1) return renderToSpecificPatients();
    if (currentTab === 2) return renderAnnounceToSpecificPatients();
  };

  const renderForm = () => {
    return (
      <div>
        <div>
          {renderSwitches()}

          <h3 class="ui dividing header">Announce Holiday</h3>
          <CenteredTab
            headings={smsHeadingData}
            changeActiveTab={changeCurrentTab}
          />
          {renderTabs()}
        </div>
      </div>
    );
  };

  return open ? renderForm() : null;
}

export default SMSForm;
