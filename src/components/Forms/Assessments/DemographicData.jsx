import React from "react";
import { Form, Field } from "react-final-form";
import { Grid } from "@material-ui/core";
import Validator from "validator";
import _ from "lodash";
import PointingError from "../../LandingPage/ErrorComponent/PointingError";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import BasicContainer from "../../Container/BasicContainer";

function DemographicData() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const [demographicData, setDemographicData] = React.useState({
    c1: {},
    c2: {},
  });

  const validate = (formValues) => {
    const errors = {};
    // email

    if (formValues.name && formValues.name.length < 5)
      errors.name = "Name should be 5 characters long";
    if (!formValues.name) errors.name = "Patient Name is required";
    if (formValues.firstName && formValues.firstName.length < 5)
      errors.firstName = "First Name should be 5 characters long";
    if (!formValues.firstName) errors.firstName = "First Name is required";
    if (formValues.lastName && formValues.lastName.length < 5)
      errors.lastName = "Last Name should be 5 characters long";
    if (!formValues.lastName) errors.lastName = "Last Name is required";
    if (!formValues.height) errors.height = "Height is required";
    if (!formValues.weight) errors.weight = "weight is required";

    if (!formValues.mobileNumber)
      errors.mobileNumber = "Mobile number is required";
    if (
      formValues.mobileNumber &&
      !Validator.isDecimal(formValues.mobileNumber)
    )
      errors.mobileNumber = "Only numerical values are allowed";

    return errors;
  };

  const renderError = (meta) => {
    if (meta.touched && meta.error)
      return <div className="ui pointing red basic label">{meta.error}</div>;
    return undefined;
  };

  return (
    <BasicContainer>
      <div>
        <div>
          <Form onSubmit={onSubmit} validate={validate}>
            {({ handleSubmit, errors, submitting, form }) => (
              <form className="ui form" onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                  <Grid item xs>
                    <div className="text-center">
                      <Field name="name">
                        {({ input, meta }) => (
                          <div className="field">
                            <label>Patient's Name</label>
                            <input
                              type="text"
                              {...input}
                              placeholder="Patient Name"
                            />
                            <PointingError input={input} meta={meta} />
                          </div>
                        )}
                      </Field>
                      <div>
                        <Field name="firstName">
                          {({ input, meta }) => (
                            <div className="field">
                              <label>First Name</label>
                              <input
                                type="text"
                                {...input}
                                placeholder="First Name"
                              />
                              <PointingError input={input} meta={meta} />
                            </div>
                          )}
                        </Field>
                      </div>
                      <br />

                      <div>
                        <Field name="lastName">
                          {({ input, meta }) => (
                            <div className="field">
                              <label>Last Name</label>
                              <input
                                type="text"
                                {...input}
                                placeholder="Last Name"
                              />
                              <PointingError input={input} meta={meta} />
                            </div>
                          )}
                        </Field>
                      </div>
                      <br />
                      <div>
                        <Field name="dob" type="date">
                          {({ input, meta }) => (
                            <div className="field">
                              <label>Date Of Birth</label>
                              <input type="date" {...input} />
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs>
                    <div className="text-center">
                      <div class="field">
                        <label> Gender </label>
                        <ButtonGroup color="primary">
                          <Button
                            onClick={() => {
                              setDemographicData({
                                ...demographicData,
                                c1: { ...demographicData.c1, 1: 1 },
                              });
                            }}
                            variant={
                              demographicData.c1["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                          >
                            Male
                          </Button>
                          <Button
                            onClick={() => {
                              setDemographicData({
                                ...demographicData,
                                c1: { ...demographicData.c1, 1: 2 },
                              });
                            }}
                            variant={
                              demographicData.c1["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                          >
                            Female
                          </Button>
                          <Button
                            onClick={() => {
                              setDemographicData({
                                ...demographicData,
                                c1: { ...demographicData.c1, 1: 3 },
                              });
                            }}
                            variant={
                              demographicData.c1["1"] === 3
                                ? "contained"
                                : "outlined"
                            }
                          >
                            Others
                          </Button>
                        </ButtonGroup>
                      </div>

                      <div class="field">
                        <label> Patient Type </label>
                        <ButtonGroup color="primary">
                          <Button
                            onClick={() => {
                              setDemographicData({
                                ...demographicData,
                                c2: { ...demographicData.c2, 1: 1 },
                              });
                            }}
                            variant={
                              demographicData.c2["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                          >
                            OPD Patient
                          </Button>
                          <Button
                            onClick={() => {
                              setDemographicData({
                                ...demographicData,
                                c2: { ...demographicData.c2, 1: 2 },
                              });
                            }}
                            variant={
                              demographicData.c2["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                          >
                            IPD Patient
                          </Button>
                        </ButtonGroup>
                      </div>
                      <br />
                      <div>
                        <Field name="height">
                          {({ input, meta }) => (
                            <div className="field">
                              <label>Height</label>
                              <input
                                type="text"
                                {...input}
                                placeholder="Height"
                              />
                              <PointingError input={input} meta={meta} />
                            </div>
                          )}
                        </Field>
                      </div>
                      <br />
                      <div>
                        <Field name="weight">
                          {({ input, meta }) => (
                            <div className="field">
                              <label>Weight</label>
                              <input
                                type="text"
                                {...input}
                                placeholder="Weight"
                              />
                              <PointingError input={input} meta={meta} />
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs>
                    <div className="text-center">
                      <Field name="bmi">
                        {({ input, meta }) => (
                          <div className="field">
                            <label>BMI</label>
                            <input type="text" {...input} placeholder="BMI" />
                            <PointingError input={input} meta={meta} />
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
                            <PointingError input={input} meta={meta} />
                          </div>
                        )}
                      </Field>

                      <div>
                        <Field name="clinicalReferenceNumber">
                          {({ input, meta }) => (
                            <div className="field">
                              <label>Clinical Reference Number</label>
                              <textarea rows={6} {...input} />
                              <PointingError input={input} meta={meta} />
                            </div>
                          )}
                        </Field>
                      </div>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <div style={{ textAlign: "center" }}>
                        <button
                          // disabled={!_.isEmpty(errors) || submitting}
                          className="ui primary button"
                        >
                          Save
                        </button>
                        <button
                          // disabled={!_.isEmpty(errors) || submitting}
                          className="ui button"
                          type="reset"
                          onClick={form.reset}
                        >
                          Discard
                        </button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </form>
            )}
          </Form>
        </div>
      </div>
    </BasicContainer>
  );
}

export default DemographicData;
