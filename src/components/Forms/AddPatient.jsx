import React from "react";
import Validator from "validator";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Form, Field } from "react-final-form";
import PointingError from "../LandingPage/ErrorComponent/PointingError";
const AddPatients = (props) => {
  const onSubmit = (formValues) => {
    console.log(formValues);
    props.closeForm();
  };
  const validate = (formValues) => {
    const errors = {};
    // email

    if (formValues.patientName && formValues.patientName.length < 5)
      errors.patientName = "Patient Name should me minimum 5 characters long";
    if (!formValues.patientName)
      errors.patientName = "Patient Name is required";
    if (formValues.mobile && !Validator.isDecimal(formValues.mobile))
      errors.mobile = "Only numerical values allowed";
    if (!formValues.mobile) errors.mobile = "Mobile is required";
    if (formValues.email && !Validator.isEmail(formValues.email))
      errors.email = "Enter correct email";
    if (!formValues.email) errors.email = "Email is required";

    //   errors.password = "Password should be at minimum of 5 character long";
    // if (!formValues.password) errors.password = "Password should not be empty";
    return errors;
  };

  // const renderError = (meta) => {
  //   if (meta.touched && meta.error)
  //     return <div className="ui pointing red basic label">{meta.error}</div>;
  //   return undefined;
  // };

  const RadioComponent = ({ input }) => <Radio {...input} />;

  return (
    <div style={{ margin: "1rem" }}>
      <div>
        <h3 className="ui center aligned icon header">
          <i class="circular wheelchair icon"></i>
          Add Patient
        </h3>
      </div>
      <Form onSubmit={onSubmit} validate={validate}>
        {({ handleSubmit, form }) => (
          <form
            class=" ui fluid form error"
            onSubmit={(evt) => {
              handleSubmit(evt);
              form.reset();
            }}
            className="ui fluid form error"
          >
            <Field name="patientName">
              {({ input, meta }) => (
                <div class="field">
                  <label>Patient Name</label>
                  <input type="text" placeholder="Enter Name" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>

            <div class="field">
              <label>Patient Type *</label>
              <RadioGroup row>
                <FormControlLabel
                  label="OP Patient"
                  control={
                    <Field
                      name="patient"
                      component={RadioComponent}
                      type="radio"
                      value="op"
                    />
                  }
                />
                <FormControlLabel
                  label="Home Patient"
                  control={
                    <Field
                      name="patient"
                      component={RadioComponent}
                      type="radio"
                      value="home"
                    />
                  }
                />
              </RadioGroup>
            </div>

            <div class="field">
              <label>Gender </label>
              <RadioGroup row>
                <FormControlLabel
                  label="Male"
                  control={
                    <Field
                      name="gender"
                      component={RadioComponent}
                      type="radio"
                      value="male"
                    />
                  }
                />
                <FormControlLabel
                  label="Female"
                  control={
                    <Field
                      name="gender"
                      component={RadioComponent}
                      type="radio"
                      value="female"
                    />
                  }
                />
              </RadioGroup>
            </div>

            <Field name="mobile">
              {({ input, meta }) => (
                <div class="field">
                  <label>Mobile Number </label>
                  <input
                    type="text"
                    placeholder="Enter Mobile no."
                    {...input}
                  />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>

            <Field name="email">
              {({ input, meta }) => (
                <div class="field">
                  <label>Email</label>
                  <input type="text" placeholder="Enter Email" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>

            <div style={{ textAlign: "center" }}>
              <button type="submit" className="ui primary button">
                Save
              </button>
              <button type="reset" onClick={form.reset} className="ui button">
                Discard
              </button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

export default AddPatients;
