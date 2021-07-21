import React from "react";
import BasicContainer from "../../Container/BasicContainer";
import { Form, Field } from "react-final-form";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AppointmentTable from "../../Tables/AppointmentTable";
import { TextareaAutosize } from "@material-ui/core";
import ProgramBuilder from "./ProgramBuilder";
import { Link } from "react-router-dom";

function ExercisePrescription() {
  const onSubmit = (formValues) => {
    const formData = {
      ...formValues,
    };
  };
  const treatmentProtocolHeading = [
    { id: "date", label: "Date" },
    { id: "treatment", label: "Treatment" },
    { id: "quantity", label: "Quantity" },
    { id: "price", label: "Price" },
    { id: "consultant", label: "Consultant" },
    { id: "action", label: "Action" },
  ];

  let tableData = [];

  const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(() => {
  //     return (
  //       <div>
  //         <ProgramBuilder />
  //       </div>
  //     );
  //   });
  // };

  const renderTable = () => {
    return (
      <AppointmentTable headings={treatmentProtocolHeading} rows={tableData} />
    );
  };

  return (
    <BasicContainer>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
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
                        {/* <PointingError input={input} meta={meta} /> */}
                      </div>
                    )}
                  </Field>
                  <div>
                    <Field name="age">
                      {({ input, meta }) => (
                        <div className="field">
                          <label>Age</label>
                          <input type="text" {...input} placeholder="Age" />
                          {/* <PointingError input={input} meta={meta} /> */}
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />

                  <div>
                    <Field name="diagnosis">
                      {({ input, meta }) => (
                        <div className="field">
                          <label>Diagnosis</label>
                          <input
                            type="text"
                            {...input}
                            placeholder="Diagnosis"
                          />
                          {/* <PointingError input={input} meta={meta} /> */}
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                </div>
              </Grid>
              <Grid item xs>
                <div className="text-center">
                  <div>
                    <Field name="number">
                      {({ input, meta }) => (
                        <div className="field">
                          <label>Contact Number</label>
                          <input
                            type="text"
                            {...input}
                            placeholder="Contact Number"
                          />
                          {/* <PointingError input={input} meta={meta} /> */}
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="email">
                      {({ input, meta }) => (
                        <div className="field">
                          <label>Email</label>
                          <input type="text" {...input} placeholder="Email" />
                          {/* <PointingError input={input} meta={meta} /> */}
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="consultant">
                      {({ input, meta }) => (
                        <div className="field">
                          <label>Consultant</label>
                          <input
                            type="text"
                            {...input}
                            placeholder="Consultant"
                          />
                          {/* <PointingError input={input} meta={meta} /> */}
                        </div>
                      )}
                    </Field>
                  </div>
                </div>
              </Grid>
              <Grid item xs>
                <div className="text-center">
                  <Field name="patient_id">
                    {({ input, meta }) => (
                      <div className="field">
                        <label>Patient Id</label>
                        <input
                          type="text"
                          {...input}
                          placeholder="Patient Id"
                        />
                        {/* <PointingError input={input} meta={meta} /> */}
                      </div>
                    )}
                  </Field>

                  <br />
                  <br />

                  <div style={{ textAlign: "center" }}>
                    <button
                      // disabled={!_.isEmpty(errors) || submitting}
                      className="ui primary button"
                    >
                      Show Details
                    </button>
                  </div>
                  <br />
                  <br />
                  <div style={{ textAlign: "center" }}>
                    <Link to="/programBuilder">
                      <button
                        // disabled={!_.isEmpty(errors) || submitting}
                        className="ui primary button"
                      >
                        Create Exercise Program
                      </button>
                    </Link>
                  </div>
                </div>
              </Grid>
            </Grid>
            <br />
            <br />
            <br />
            <Grid xs={12}>
              <div className={Field}>
                <Field name="prognosis">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Prognosis :</label>
                      <input type="text" {...input} placeholder="Prognosis" />
                      {/* <PointingError input={input} meta={meta} /> */}
                    </div>
                  )}
                </Field>
              </div>
            </Grid>
            <br />
            <br />
            <br />
            <Grid xs={12}>
              <div>
                <label>Session History :</label>
                {renderTable()}
              </div>
            </Grid>
            <Grid xs={12}>
              <div className={Field}>{/* Assigned Program list */}</div>
            </Grid>
            <br />
            <br />
            <br />

            <Grid xs={12}>
              <div className="item">
                <label> Notes</label>
                <Field name="notes">
                  {({ input, meta }) => (
                    <TextareaAutosize
                      type="text"
                      placeholder="Notes"
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
              {/* <button
                // disabled={!_.isEmpty(errors) || submitting}
                className="ui button"
              >
                Discard
              </button> */}
            </div>
            <br />
            <br />
          </form>
        )}
      </Form>
    </BasicContainer>
  );
}

export default ExercisePrescription;
