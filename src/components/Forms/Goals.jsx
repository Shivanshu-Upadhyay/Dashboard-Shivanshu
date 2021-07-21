import React from "react";
import BasicContainer from "../Container/BasicContainer";
import { TextareaAutosize } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Form, Field } from "react-final-form";

function Goals() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  return (
    <BasicContainer>
      <Form onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <Grid item xs={12}>
              <div className="text-center">
                <div className="item">
                  <label>Date</label>
                  <Field name="date" type="date">
                    {({ input, meta }) => (
                      <div className="field">
                        <input type="date" {...input} />
                      </div>
                    )}
                  </Field>
                </div>
              </div>
            </Grid>
            <br />
            <br />
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <div className="item">
                  <label> Short Term Goals 1</label>
                  <Field name="shortTermGoals1">
                    {({ input, meta }) => (
                      <TextareaAutosize
                        type="text"
                        placeholder="Short Term Goals 1"
                        {...input}
                      />
                    )}
                  </Field>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="item">
                  <label> Short Term Goals 2</label>
                  <Field name="shortTermGoals2">
                    {({ input, meta }) => (
                      <TextareaAutosize
                        type="text"
                        placeholder="Short Term Goals 2"
                        {...input}
                      />
                    )}
                  </Field>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <div className="item">
                  <label> Long Term Goals 1</label>
                  <Field name="longTermGoals1">
                    {({ input, meta }) => (
                      <TextareaAutosize
                        type="text"
                        placeholder="Long Term Goals 1"
                        {...input}
                      />
                    )}
                  </Field>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="item">
                  <label> Long Term Goals 2</label>
                  <Field name="longTermGoals2">
                    {({ input, meta }) => (
                      <TextareaAutosize
                        type="text"
                        placeholder="Long Term Goals 2"
                        {...input}
                      />
                    )}
                  </Field>
                </div>
              </Grid>
            </Grid>
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

export default Goals;
