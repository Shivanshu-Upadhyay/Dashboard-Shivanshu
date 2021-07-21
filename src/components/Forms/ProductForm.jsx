import React from "react";
import { Form, Field } from "react-final-form";
import Validator from 'validator';
import _ from "lodash";
import PointingError from "../LandingPage/ErrorComponent/PointingError";

function ProductForm({ open }) {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const validate = (formValues) => {
    const errors = {};
    // email
   
    if (!formValues.name) errors.name= "Item name  is required";

    if (formValues.itemCode && !Validator.isDecimal(formValues.itemCode))
    errors.itemCode = "Only numerical values are allowed";
    if (!formValues.itemCode) errors.itemCode = "Item Code is required";

    if (formValues.noOfItems && !Validator.isDecimal(formValues.noOfItems))
    errors.noOfItems = "Only numerical values are allowed";
    if (!formValues.noOfItems) errors.noOfItems = "No. of items are required";

    if (formValues.amount && !Validator.isDecimal(formValues.amount))
    errors.amount = "Only numerical values are allowed";
    if (!formValues.amount) errors.amount = "Amount is required";

    if (formValues.discount && !Validator.isDecimal(formValues.discount))
    errors.height = "Only numerical values are allowed";
    if (!formValues.discount) errors.discount = "Discount is required";

    if (formValues.total && !Validator.isDecimal(formValues.total))
    errors.total = "Only numerical values are allowed";
    if (!formValues.total) errors.total = "Total is required";

   

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
          <Form onSubmit={onSubmit} validate ={validate}>
            {({ handleSubmit, form, errors, submitting }) => (
              <form className="ui form" onSubmit={handleSubmit}>
                <Field name="name">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Item Name</label>
                      <input type="text" {...input} placeholder="Item Name" />
                      <PointingError input = {input } meta = {meta} />
                    </div>
                  )}
                </Field>
                <Field name="itemCode">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Item Code</label>
                      <input type="text" {...input} placeholder="Item Code" />
                      <PointingError input = {input } meta = {meta} />
                    </div>
                  )}
                </Field>
                <Field name="noOfItems">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>No. of Items</label>
                      <input
                        type="text"
                        {...input}
                        placeholder="No. of Items"
                      />
                       <PointingError input = {input } meta = {meta} />
                    </div>
                  )}
                </Field>
                <Field name="amount">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Amount</label>
                      <input
                        type="text"
                        {...input}
                        name="amount"
                        placeholder="Amount"
                      />
                      <PointingError input = {input } meta = {meta} />
                    </div>
                  )}
                </Field>
                <Field name="discount">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Discount</label>
                      <input type="text" {...input} placeholder="Discount" />
                      <PointingError input = {input } meta = {meta} />
                    </div>
                  )}
                </Field>
                <Field name="total">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Total</label>
                      <input type="text" {...input} placeholder="Total" />
                      <PointingError input = {input } meta = {meta} />
                    </div>
                  )}
                </Field>
                <div style={{ textAlign: "center" }}>
                  <button disabled={!_.isEmpty(errors) || submitting} className="ui primary button" type="submit">
                    Save
                  </button>
                  <button  disabled={!_.isEmpty(errors) || submitting}
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

export default ProductForm;
