import React from "react";
import BasicContainer from "../Container/BasicContainer";
import { TextareaAutosize } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { v4 as uuidv4 } from "uuid";
import { FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    minWidth: 150,
  },
}));

function AddNewTreatment(props) {
  const classes = useStyles();

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  return (
    <div>
      <div>
        <h3 className="ui center aligned icon header">
          <i class="circular user md icon"></i>
          Add New Treatment
        </h3>
      </div>
      <Form onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit, form }) => (
          <form
            onSubmit={handleSubmit}
            className="ui form"
            style={{
              height: "70vh",
              width: "30vw",
              margin: "5rem",
            }}
          >
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

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <div className="item">
                  <FormControl variant="outlined">
                    <InputLabel>Modalities</InputLabel>
                    <Field name="category" type="select">
                      {({ input, meta }) => (
                        <Select
                          // id="category"
                          className={classes.selectEmpty}
                          {...input}
                          // onChange={handleChange}
                        >
                          {props.categories.map((category) => (
                            <MenuItem
                              key={category}
                              value={category}
                              onClick={() => {
                                props.setTreatment(category);
                              }}
                            >
                              {category}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    </Field>
                  </FormControl>
                </div>
                <br />
                <br />
              </Grid>
              <Grid item xs={6}>
                <div className="item">
                  <FormControl variant="outlined">
                    <InputLabel>Item Name</InputLabel>
                    <Field name="treatment" type="select">
                      {({ input, meta }) => (
                        <Select
                          className={classes.selectEmpty}
                          {...input}
                          // onChange={handleChange}
                        >
                          {props.treatment.map((d) => (
                            <MenuItem key={uuidv4()} value={d}>
                              {d}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    </Field>
                  </FormControl>
                </div>
              </Grid>
              <br />
              <br />
              <Grid item xs={12}>
                <Field name="price">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Price</label>
                      <input type="text" {...input} placeholder="Price" />
                      {/* <PointingError input = {input } meta = {meta} /> */}
                    </div>
                  )}
                </Field>
              </Grid>
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <div className="item">
                <label> Description</label>
                <Field name="description">
                  {({ input, meta }) => (
                    <TextareaAutosize
                      type="text"
                      placeholder="Description"
                      {...input}
                    />
                  )}
                </Field>
              </div>
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
    </div>
  );
}

export default AddNewTreatment;
