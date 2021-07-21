import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Form, Field } from "react-final-form";
import BasicContainer from "../Container/BasicContainer";
import { FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import AppointmentTable from "../Tables/AppointmentTable";
import { diagnosisTableHeading } from "../../db";

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

function Diagnosis(props) {
  const classes = useStyles();

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  const validate = (formValues) => {
    const errors = {};
  };

  let tableData = [];
  const diagnosisTableHeading = [
    { id: "date", label: "Date" },
    { id: "category", label: "Category" },
    { id: "diagnosis", label: "Diagnosis" },
    { id: "actions", label: "Actions" },
  ];

  const renderTable = () => {
    return (
      <AppointmentTable headings={diagnosisTableHeading} rows={tableData} />
    );
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
            <div className="text-center">
              <div className="field">
                <Grid item xs={12}>
                  <div className="item">
                    <label>Date</label>
                    <Field name="date">
                      {({ input, meta }) => <input type="date" {...input} />}
                    </Field>
                  </div>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <div className="item">
                      <FormControl variant="outlined">
                        <InputLabel>Category</InputLabel>
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
                                    props.setCategory(category);
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
                    <div className="item">
                      <FormControl variant="outlined">
                        <InputLabel>Diagnosis</InputLabel>
                        <Field name="diagnosis" type="select">
                          {({ input, meta }) => (
                            <Select
                              // id="daignosis"
                              className={classes.selectEmpty}
                              {...input}
                              // onChange={handleChange}
                              label="Select Diagnosis"
                            >
                              {props.diagnosis.map((d) => (
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
                </Grid>
              </div>

              <div style={{ textAlign: "center" }}>
                <button className="ui primary button">Submit</button>
              </div>
            </div>
          </form>
        )}
      </Form>
      <br />
      <br />
      <div>{renderTable()}</div>
    </BasicContainer>
  );
}

export default Diagnosis;
