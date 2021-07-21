import React from "react";
import { Form, Field } from "react-final-form";
import Validator from "validator";
import _ from "lodash";
import PointingError from "../LandingPage/ErrorComponent/PointingError";
function MyProfileForm({ open }) {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };
  const validate = (formValues) => {
    const errors = {};
    // email

    if (formValues.name && formValues.name.length < 5)
    errors.name = "First Name should be 5 characters long";
    if (!formValues.name) 
      errors.name = "First Name is required";
    if (formValues.lastName && formValues.lastName.length < 5)
      errors.lastName = "Last Name should be 5 characters long";
    if (!formValues.lastName) 
      errors.lastName = "Last Name is required";
      if (!formValues.clinicName) errors.clinicName = "Clinic Name is required";
      if (!formValues.branchName) errors.branchName = "Branch Name is required";

      if (formValues.email && !Validator.isEmail(formValues.email))
      errors.email = "Enter correct email";
      if (!formValues.email) errors.email = "Email is required";

   
     if (!formValues.mobileNumber) errors.mobileNumber = "Mobile number is required";
    if (formValues.mobileNumber && !Validator.isDecimal(formValues.mobileNumber))
    errors.mobileNumber = "Only numerical values are allowed";
    if (!formValues.bankDetails) 
    errors.bankDetails = "Bank Details are required";

    return errors;
  };
  const renderError = (meta) => {
    if (meta.touched && meta.error)
      return <div className="ui pointing red basic label">{meta.error}</div>;
    return undefined;
  };

  const renderForm = () => {
    return (
      <div>
        <div>
          <Form onSubmit={onSubmit} validate={validate}>
            {({ handleSubmit, errors, submitting, form }) => (
              <form className="ui form" onSubmit={handleSubmit}>
                <Field name="name">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>First Name</label>
                      <input type="text" {...input} placeholder="First Name" />
                      <PointingError input = {input } meta = {meta} />
                    </div>
                  )}
                </Field>
                <Field name="lastName">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Last Name</label>
                      <input type="text" {...input} placeholder="Last Name" />
                      <PointingError input = {input } meta = {meta} />
                    </div>
                  )}
                </Field>
                <Field name="branchName">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Branch Name</label>
                      <input type="text" {...input} placeholder="Branch Name" />
                      <PointingError input = {input } meta = {meta} />
                    </div>
                  )}
                </Field>
                <Field name="clinicName">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Clinic Name</label>
                      <input type="text" {...input} placeholder="Clinic Name" />
                      <PointingError input = {input } meta = {meta} />
                    </div>
                  )}
                </Field>
                <Field name="email">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Email</label>
                      <input
                        type="text"
                        {...input}
                        placeholder="Email"
                    
                      />
                        <PointingError input = {input } meta = {meta} />
                    </div>
                  )}
                </Field>
                <Field name="mobileNumber">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Mobile Number</label>
                      <input
                        type="text"
                        {...input}
                        placeholder="Mobile Number"
                      />
                    <PointingError input = {input } meta = {meta} />
                    </div>
                  )}
                </Field>
                <Field name="phoneNumber">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        {...input}
                        placeholder="Phone Number"
                      />
                         <PointingError input = {input } meta = {meta} />
                    </div>
                  )}
                </Field>
                <Field name="bankDetails">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Bank Details</label>
                      <textarea rows="2" {...input} />
                      <PointingError input = {input } meta = {meta} />
                    </div>
                  )}
                </Field>
                <div style={{ textAlign: "center" }}>
                  <button    disabled={!_.isEmpty(errors) || submitting} className="ui primary button">Save</button>
                  <button disabled={!_.isEmpty(errors) || submitting}
                    className="ui button"
                    type="reset"
                    onClick={form.reset}
                  >
                    Discard
                  </button>
                </div>
              </form>
            )}
          </Form>
        </div>
      </div>
    );
  };

  return open ? renderForm() : null;
}

export default MyProfileForm;
