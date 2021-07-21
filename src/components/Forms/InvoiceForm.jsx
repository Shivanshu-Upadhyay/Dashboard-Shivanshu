import React from "react";
import { Form, Field } from "react-final-form";
import Validator from 'validator';
import PointingError from "../LandingPage/ErrorComponent/PointingError";
import _ from "lodash";

function InvoiceForm({ open }) {
  const onInvoiceSubmit = (formValues) => {
    console.log(formValues);
  };
  const onGunnaSubmit = (formValues) => {
    console.log(formValues);
  };
  const validate = (formValues) => {
    const errors = {};
    // email


    if (!formValues.header) 
      errors.header = "Header is required";
      if (!formValues.termsAndCondition) 
      errors.termsAndCondition = "Terms and Condition are required";
      if (!formValues.notes) 
      errors.notes = "Notes is required";
      if (!formValues.footer) 
      errors.footer = " Footer is required";
      if (formValues.discount && !Validator.isDecimal(formValues.discount))
      errors.discount = "Only numerical values are allowed";
      if (!formValues.discount) errors.discount = "Discount is required";
      if (formValues.tax && !Validator.isDecimal(formValues.tax))
      errors.tax = "Only numerical values are allowed";
      if (!formValues.tax) errors.tax = "Tax is required";

   

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
        <Form onSubmit={onInvoiceSubmit} validate ={validate}>
          {({ handleSubmit, form, submitting, errors}) => (
            <form onSubmit={handleSubmit}>
              <div className="ui form">
                <h3 class="ui dividing header">Invoice Settings</h3>

                <Field name="header">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Header</label>
                      <input {...input}></input>
                      <PointingError input = {input } meta = {meta} />
                    </div>
                  )}
                </Field>
                <Field name="termsAndCondition">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Terms and Condition</label>
                      <textarea rows="4" {...input}></textarea>
                      <PointingError input = {input } meta = {meta} />
                    </div>
                  )}
                </Field>
                <Field name="notes">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Notes</label>
                      <input type="text" {...input} />
                      <PointingError input = {input } meta = {meta} />
                    </div>
                  )}
                </Field>
                <Field name="footer">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Footer</label>
                      <input type="text"  {...input} />
                      <PointingError input = {input } meta = {meta} />
                    </div>
                  )}
                </Field>
                <div style={{ textAlign: "center" }}>
                  <button  type="submit"  type="submit" className="ui primary button">
                    Save
                  </button>
                  <button   type="submit" 
                    type="reset"
                    onClick={form.reset}
                    className="ui button"
                  >
                    Discard
                  </button>
                </div>
              </div>
            </form>
          )}
        </Form>
        <Form onSubmit={onGunnaSubmit} validate ={validate} >
          {({ handleSubmit, form, errors, submitting }) => (
            <form onSubmit={handleSubmit}>
              <div className="ui form">
                <h3 class="ui dividing header">General Settings</h3>
                <Field name="discount">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Discount (%)</label>
                      <input type="text" {...input} />
                      <PointingError input = {input } meta = {meta} />
                 
                    </div>
                  )}
                </Field>
                <Field name="tax">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Tax (%)</label>
                      <input type="text" {...input} />
                      <PointingError input = {input } meta = {meta} />
                      
                    </div>
                  )}
                </Field>
                <div style={{ textAlign: "center" }}>
                  <button   type="submit" className="ui primary button">
                    Save
                  </button>
                  <button 
                    type="reset"
                    onClick={form.reset}
                    className="ui button"
                  >
                    Discard
                  </button>
                </div>
              </div>
            </form>
          )}
        </Form>
      </div>
    );
  };

  return open ? renderForm() : null;
}

export default InvoiceForm;
