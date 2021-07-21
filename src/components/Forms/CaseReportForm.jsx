import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Form, Field } from "react-final-form";
import { DataGrid } from "@material-ui/data-grid";
import PointingError from "../LandingPage/ErrorComponent/PointingError";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function ConsentForm({ open }) {
  const test = () => (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const renderForm = () => {
    return (
      <div>
        <div>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, form }) => (
              <form onSubmit={handleSubmit}>
                <div className="ui form">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n",
                    }}
                  />
                  <h3>Select Below For Case Report Print Out </h3>
                  <table>
                    <tbody>
                      <tr>
                        <th>Assessments</th>
                        <th>Option</th>
                      </tr>
                      <tr>
                        <td>Subjective</td>
                        <td>
                          <Field name="subjective" type="checkbox">
                            {({ input, meta }) => (
                              <Checkbox color="secondary" {...input} />
                             
                            )}
                         
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>Objective</td>
                        <td>
                          <Field name="objectives" type="checkbox">
                            {({ input, meta }) => (
                              <Checkbox color="secondary" {...input} />
                            )}
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>Assessment</td>
                        <td>
                          <Field name="assessment" type="checkbox">
                            {({ input, meta }) => (
                              <Checkbox color="secondary" {...input} />
                            )}
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>Plan</td>
                        <td>
                          <Field name="plan">
                            {({ input, meta }) => (
                              <Checkbox
                                color="secondary"
                                {...input}
                                type="checkbox"
                              />
                            )}
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>History</td>
                        <td>
                          <Field name="history">
                            {({ input, meta }) => (
                              <Checkbox
                                color="secondary"
                                {...input}
                                type="checkbox"
                              />
                            )}
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>Chief Complaints</td>
                        <td>
                          <Field name="chiefComplaints" type="checkbox">
                            {({ input, meta }) => (
                              <Checkbox color="secondary" {...input} />
                            )}
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>Pain</td>
                        <td>
                          <Field name="pain" type="checkbox">
                            {({ input, meta }) => (
                              <Checkbox color="secondary" {...input} />
                            )}
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>Body Chart</td>
                        <td>
                          <Field name="bodyChart" type="checkbox">
                            {({ input, meta }) => (
                              <Checkbox color="secondary" {...input} />
                            )}
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>Examination</td>
                        <td>
                          <Field name="examination" type="checkbox">
                            {({ input, meta }) => (
                              <Checkbox color="secondary" {...input} />
                            )}
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>Motor Examination</td>
                        <td>
                          <Field name="motorExamination" type="checkbox">
                            {({ input, meta }) => (
                              <Checkbox color="secondary" {...input} />
                            )}
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>Sensory Examination</td>
                        <td>
                          <Field name="sensoryExamination" type="checkbox">
                            {({ input, meta }) => (
                              <Checkbox color="secondary" {...input} />
                            )}
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>Pediatric Examination</td>
                        <td>
                          <Field name="pediatricExamination" type="checkbox">
                            {({ input, meta }) => (
                              <Checkbox color="Primary" {...input} />
                            )}
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>Neuro Examination</td>
                        <td>
                          <Field name="neuroExamination" type="checkbox">
                            {({ input, meta }) => (
                              <Checkbox color="secondary" {...input} />
                            )}
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>Investigation</td>
                        <td>
                          <Field name="investigation" type="checkbox">
                            {({ input, meta }) => (
                              <Checkbox color="secondary" {...input} />
                            )}
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>Provisional Diagnosis</td>
                        <td>
                          <Field name="provisionalDiagnosis" type="checkbox">
                            {({ input, meta }) => (
                              <Checkbox color="secondary" {...input} />
                            )}
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>Medical Diagnosis</td>
                        <td>
                          <Field name="medicalDiagnosis" type="checkbox">
                            {({ input, meta }) => (
                              <Checkbox color="secondary" {...input} />
                            )}
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>Goals</td>
                        <td>
                          <Field name="goals" type="checkbox">
                            {({ input, meta }) => (
                              <Checkbox color="secondary" {...input} />
                            )}
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>Treatment Protocols</td>
                        <td>
                          <Field name="treatmentDetails" type="checkbox">
                            {({ input, meta }) => (
                              <Checkbox color="secondary" {...input} />
                            )}
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>Treatment Encounter</td>
                        <td>
                          <Field name="treatmentEncounter">
                            {({ input, meta }) => (
                              <Checkbox color="secondary" {...input} />
                            )}
                          </Field>
                        </td>
                      </tr>
                      <tr>
                        <td>Exercise Prescription</td>
                        <td>
                          <Field name="exercisePrescription">
                            {({ input, meta }) => (
                              <Checkbox color="secondary" {...input} />
                            )}
                          </Field>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div style={{ textAlign: "center" }}>
                  <button className="ui primary button">Save</button>
                  <button
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

export default ConsentForm;
