import React, { useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import Dialog from "@material-ui/core/Dialog";

import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { addInvestigationData } from "../../../actions/investigationAction";
import AddReport from "./AddReport";

function Investigation(props) {
  const [data, setData] = useState();
  var a;

  var myVar = setInterval(() => {
    if(a !== undefined) {
        setData(a);
        console.log(data, 'data');
        stop();
    }
  }, 1000);

  function stop() {
    clearInterval(myVar);
}

  const onSubmit = (formValues) => {
    console.log(formValues);
    a = formValues;
  };


  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Form onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <div className="text-center">
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <div>
                    <Field name="date" type="date">
                      {({ input }) => (
                        <div className="cardio4">
                          <label className="ass">Date</label>
                          <input type="date" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <button type="button" onClick={handleOpen}>
                    ADD REPORT
                        </button>
                </Grid>
              </Grid>
            </div>
          </form>
        )}
      </Form>
      <div>
        <Dialog maxWidth="md" open={open} onClose={handleClose}>
      <Form onSubmit={onSubmit} initialValues={initialValues}>
                    {({ handleSubmit, form }) => (
                      <form onSubmit={handleSubmit} className="ui form">
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Date</th>

                              <th>Report Type</th>
                              <th>Document</th>
                              <th>Findings</th>
                            </tr>

                            <tr>
                              <th>
                                <Field name="date">
                                  {({ input }) => (
                                    <div>
                                      <input
                                        type="date"
                                        {...input}
                                        placeholder="date"
                                      />
                                    </div>
                                  )}
                                </Field>

                              </th>
                              <th>
                                <Field
                                  name="select"
                                  component="select"
                                >
                                  <option />
                                  <option value="Blood Report">Blood Report</option>
                                  <option value="X-Ray">X-Ray</option>
                                  <option value="Scan Report">Scan Report</option>
                                  <option value="Others">Others</option>
                                </Field>

                              </th>
                              <th>
                                <Field name="document">
                                  {({ input }) => (
                                    <div>
                                      <input
                                        type="file"
                                        {...input}
                                        placeholder="choose document"
                                      />
                                    </div>
                                  )}
                                </Field>
                              </th>
                              <th>
                                <Field name="findings">
                                  {({ input }) => (
                                    <div>
                                      <input
                                        type="text"
                                        {...input}
                                        placeholder="findings"
                                      />
                                      </div>
                                  )}
                                      </Field>
                                  </th>
                                </tr>
                               </thead>
                            </Table>
                            <br />

                            <div style={{ textAlign: "center" }}>
                              <Button type="submit" onClick={handleClose}>Save</Button>
                            </div>
          </form>
        )}
      </Form>
      </Dialog>
      </div>
      <div className="table-component">
      <AddReport values={data} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    // consultant:state.auth.user.name,
    investigationData: state.investigationData,
  };
};

export default connect(mapStateToProps, { addInvestigationData })(
  Investigation
);
