import React from "react";
import { Form, Field } from "react-final-form";
import PointingError from "../LandingPage/ErrorComponent/PointingError";
import Validator from "validator";
import { connect } from "react-redux";
import { addTreatment } from "../../actions/treatmentAction";

const TreatmentForm = (props) => {
  const onSubmit = (formValues) => {
    console.log("treatment Data", formValues);
    props.addTreatment(formValues);
  };

  const validate = (formValues) => {
    const errors = {};
    // email
    if (!formValues.name) errors.name = "Treatment Name is required";
    if (formValues.description && formValues.description.length < 5)
      errors.description = "Description should me minimum 5 characters long";
    if (!formValues.description) errors.description = "Description is required";
    if (formValues.price && !Validator.isDecimal(formValues.price))
      errors.price = "Only numerical values are allowed";
    if (!formValues.itemprice) errors.itemprice = "Item price is required";

    //   errors.password = "Password should be at minimum of 5 character long";
    // if (!formValues.password) errors.password = "Password should not be empty";
    return errors;
  };

  return (
    <div
      style={{
        margin: "1rem",
      }}
    >
      <div>
        <h3 className="ui center aligned icon header">
          <i class="circular user md icon"></i>
          Add Treatment
        </h3>
      </div>
      <Form onSubmit={onSubmit} validate={validate}>
        {({ handleSubmit, form }) => (
          <form class="ui form" onSubmit={handleSubmit}>
            <Field name="name">
              {({ input, meta }) => (
                <div class="field">
                  <label>Treatment Name</label>
                  <input type="text" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
            <Field name="description">
              {({ input, meta }) => (
                <div class="field">
                  <label>Description</label>
                  <textarea rows="4" {...input}></textarea>
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
            <Field name="price">
              {({ input, meta }) => (
                <div class=" field">
                  <label>Item Price</label>
                  <input type="text" placeholder="Price..." {...input} />
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

export default connect(null, { addTreatment })(TreatmentForm);
