import React from "react";
import { Grid, FormControlLabel, Radio } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { TextareaAutosize } from "@material-ui/core";
import { ButtonGroup, Button } from "@material-ui/core";
import BasicContainer from "../../Container/BasicContainer";
import PointingError from "../../LandingPage/ErrorComponent/PointingError";

function History() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const [historyData, setHistoryData] = React.useState({
    t1: {},
    t2: {},
    t3: {},
  });

  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  const validate = (formValues) => {
    const errors = {};
    // email

    // if (formValues.name && formValues.name.length < 5)
    //   errors.name = "Name should be 5 characters long";
    // if (!formValues.name) errors.name = "Patient Name is required";
    // if (formValues.firstName && formValues.firstName.length < 5)
    //   errors.firstName = "First Name should be 5 characters long";
    // if (!formValues.firstName) errors.firstName = "First Name is required";
    // if (formValues.lastName && formValues.lastName.length < 5)
    //   errors.lastName = "Last Name should be 5 characters long";
    // if (!formValues.lastName) errors.lastName = "Last Name is required";
    // if (!formValues.height) errors.height = "Height is required";
    // if (!formValues.weight) errors.weight = "weight is required";

    // if (!formValues.mobileNumber)
    //   errors.mobileNumber = "Mobile number is required";
    // if (
    //   formValues.mobileNumber &&
    //   !Validator.isDecimal(formValues.mobileNumber)
    // )
    //   errors.mobileNumber = "Only numerical values are allowed";

    // return errors;
  };

  return (
    <BasicContainer>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialValues}
      >
        {({ handleSubmit }, form) => (
          <form onSubmit={handleSubmit} className="ui form">
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <div className="text-center">
                  <div className="item">
                    <label>Date</label>
                    <Field name="date">
                      {({ input, meta }) => <input type="date" {...input} />}
                    </Field>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="item">
                    <label> Present Medical History </label>
                    <Field name="presentHistory">
                      {({ input, meta }) => (
                        <TextareaAutosize
                          type="text"
                          placeholder="Present Medical History"
                          {...input}
                        />
                      )}
                    </Field>
                  </div>
                </div>
              </Grid>
              <Grid item xs="6">
                <div className="text-center">
                  <div className="item">
                    <label> Past Medical History </label>
                    <Field name="pastHistory">
                      {({ input, meta }) => (
                        <TextareaAutosize
                          type="text"
                          {...input}
                          placeholder="Surgical History"
                        />
                      )}
                    </Field>
                  </div>

                  <br />

                  <div className="item">
                    <label> Other Disease </label>
                    <Field name="pastHistory">
                      {({ input, meta }) => (
                        <TextareaAutosize
                          type="text"
                          {...input}
                          placeholder="Other Disease"
                        />
                      )}
                    </Field>
                  </div>

                  <br />
                </div>
              </Grid>
            </Grid>
            <br />
            <br />
            <br />
            <div>
              <table className="ui very basic table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td>
                      Diabetes
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t1: { ...historyData.t1, 1: 1 },
                            });
                          }}
                          variant={
                            historyData.t1["1"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t1: { ...historyData.t1, 1: 2 },
                            });
                          }}
                          variant={
                            historyData.t1["1"] === 2 ? "contained" : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      Smoking
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t1: { ...historyData.t1, 2: 1 },
                            });
                          }}
                          variant={
                            historyData.t1["2"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t1: { ...historyData.t1, 2: 2 },
                            });
                          }}
                          variant={
                            historyData.t1["2"] === 2 ? "contained" : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      Tuberculosis
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t1: { ...historyData.t1, 3: 1 },
                            });
                          }}
                          variant={
                            historyData.t1["3"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t1: { ...historyData.t1, 3: 2 },
                            });
                          }}
                          variant={
                            historyData.t1["3"] === 2 ? "contained" : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Blood Pressure
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t2: { ...historyData.t2, 1: 1 },
                            });
                          }}
                          variant={
                            historyData.t2["1"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t2: { ...historyData.t2, 1: 2 },
                            });
                          }}
                          variant={
                            historyData.t2["1"] === 2 ? "contained" : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      Alcohol
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t2: { ...historyData.t2, 2: 1 },
                            });
                          }}
                          variant={
                            historyData.t2["2"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t2: { ...historyData.t2, 2: 2 },
                            });
                          }}
                          variant={
                            historyData.t2["2"] === 2 ? "contained" : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      Cancer
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t2: { ...historyData.t2, 3: 1 },
                            });
                          }}
                          variant={
                            historyData.t2["3"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t2: { ...historyData.t2, 3: 2 },
                            });
                          }}
                          variant={
                            historyData.t2["3"] === 2 ? "contained" : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Hypertension
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t3: { ...historyData.t3, 1: 1 },
                            });
                          }}
                          variant={
                            historyData.t3["1"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t3: { ...historyData.t3, 1: 2 },
                            });
                          }}
                          variant={
                            historyData.t3["1"] === 2 ? "contained" : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      Heart Disease
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t3: { ...historyData.t3, 2: 1 },
                            });
                          }}
                          variant={
                            historyData.t3["2"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t3: { ...historyData.t3, 2: 2 },
                            });
                          }}
                          variant={
                            historyData.t3["2"] === 2 ? "contained" : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      Pregnancy
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t3: { ...historyData.t3, 3: 1 },
                            });
                          }}
                          variant={
                            historyData.t3["3"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t3: { ...historyData.t3, 3: 2 },
                            });
                          }}
                          variant={
                            historyData.t3["3"] === 2 ? "contained" : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                  // onClick={form.reset}
                >
                  Discard
                </button>
              </div>
            </div>
          </form>
        )}
      </Form>
    </BasicContainer>
  );
}

export default History;
