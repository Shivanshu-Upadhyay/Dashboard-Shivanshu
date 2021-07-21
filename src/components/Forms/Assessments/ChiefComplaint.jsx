import React from "react";
import { Grid } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import PointingError from "../../LandingPage/ErrorComponent/PointingError";
import { ButtonGroup, Button } from "@material-ui/core";
import BasicContainer from "../../Container/BasicContainer";

function History() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const [chiefComplaintData, setChiefComplaintData] = React.useState({
    t1: {},
    t2: {},
    t3: {},
  });

  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  const validate = (formValues) => {
    const errors = {};

    if (!formValues.symptoms) errors.symptoms = "This field is required";
    if (!formValues.problems) errors.problems = "This field is required";

    return errors;
  };

  return (
    <BasicContainer>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialValues}
      >
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <div className="text-center">
                  <div className="item">
                    <Field name="date" type="date">
                      {({ input, meta }) => (
                        <div className="field">
                          <label>Date</label>
                          <input type="date" {...input} />
                        </div>
                      )}
                    </Field>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="text-center">
                  <div className="item">
                    <Field name="symptoms">
                      {({ input, meta }) => (
                        <div className="field">
                          <label>
                            How long have you had aggravated symptoms
                          </label>
                          <textarea rows="2" {...input}></textarea>
                          <PointingError input={input} meta={meta} />
                        </div>
                      )}
                    </Field>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="text-center">
                  <div className="item">
                    <Field name="problems">
                      {({ input, meta }) => (
                        <div className="field">
                          <label>How long you had this problem</label>
                          <textarea rows="2" {...input}></textarea>
                          <PointingError input={input} meta={meta} />
                        </div>
                      )}
                    </Field>
                  </div>
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
                      Pain
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setChiefComplaintData({
                              ...chiefComplaintData,
                              t1: { ...chiefComplaintData.t1, 1: 1 },
                            });
                          }}
                          variant={
                            chiefComplaintData.t1["1"] === 1
                              ? "contained"
                              : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setChiefComplaintData({
                              ...chiefComplaintData,
                              t1: { ...chiefComplaintData.t1, 1: 2 },
                            });
                          }}
                          variant={
                            chiefComplaintData.t1["1"] === 2
                              ? "contained"
                              : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      Swelling
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setChiefComplaintData({
                              ...chiefComplaintData,
                              t1: { ...chiefComplaintData.t1, 2: 1 },
                            });
                          }}
                          variant={
                            chiefComplaintData.t1["2"] === 1
                              ? "contained"
                              : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setChiefComplaintData({
                              ...chiefComplaintData,
                              t1: { ...chiefComplaintData.t1, 2: 2 },
                            });
                          }}
                          variant={
                            chiefComplaintData.t1["2"] === 2
                              ? "contained"
                              : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      Stiffness
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setChiefComplaintData({
                              ...chiefComplaintData,
                              t1: { ...chiefComplaintData.t1, 3: 1 },
                            });
                          }}
                          variant={
                            chiefComplaintData.t1["3"] === 1
                              ? "contained"
                              : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setChiefComplaintData({
                              ...chiefComplaintData,
                              t1: { ...chiefComplaintData.t1, 3: 2 },
                            });
                          }}
                          variant={
                            chiefComplaintData.t1["3"] === 2
                              ? "contained"
                              : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Loss Of Motion
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setChiefComplaintData({
                              ...chiefComplaintData,
                              t2: { ...chiefComplaintData.t2, 1: 1 },
                            });
                          }}
                          variant={
                            chiefComplaintData.t2["1"] === 1
                              ? "contained"
                              : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setChiefComplaintData({
                              ...chiefComplaintData,
                              t2: { ...chiefComplaintData.t2, 1: 2 },
                            });
                          }}
                          variant={
                            chiefComplaintData.t2["1"] === 2
                              ? "contained"
                              : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      Abnormal Sensation
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setChiefComplaintData({
                              ...chiefComplaintData,
                              t2: { ...chiefComplaintData.t2, 2: 1 },
                            });
                          }}
                          variant={
                            chiefComplaintData.t2["2"] === 1
                              ? "contained"
                              : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setChiefComplaintData({
                              ...chiefComplaintData,
                              t2: { ...chiefComplaintData.t2, 2: 2 },
                            });
                          }}
                          variant={
                            chiefComplaintData.t2["2"] === 2
                              ? "contained"
                              : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      Instability
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setChiefComplaintData({
                              ...chiefComplaintData,
                              t2: { ...chiefComplaintData.t2, 3: 1 },
                            });
                          }}
                          variant={
                            chiefComplaintData.t2["3"] === 1
                              ? "contained"
                              : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setChiefComplaintData({
                              ...chiefComplaintData,
                              t2: { ...chiefComplaintData.t2, 3: 2 },
                            });
                          }}
                          variant={
                            chiefComplaintData.t2["3"] === 2
                              ? "contained"
                              : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
          </form>
        )}
      </Form>
    </BasicContainer>
  );
}

export default History;
