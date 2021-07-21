import React from "react";
import BasicContainer from "../Container/BasicContainer";
import { TextareaAutosize } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import Dialog from "@material-ui/core/Dialog";
import AddNewTreatmentCategory from "./AddNewTreatmentCategory";
import TreatmentCalender from "./TreatmentCalender";
import AppointmentTable from "../Tables/AppointmentTable";
import { connect } from "react-redux";
import { addInvoice } from "../../actions/invoiceAction";
import { getInvoicesByPatientID } from "../../actions/invoiceAction";
import { useLocation } from "react-router-dom";
import { invoices } from "../../reducers/invoiceReducer";

function TreatmentProtocol(props) {
  const [selectDays, setSelectDays] = React.useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  React.useEffect(() => {
    props.getInvoicesByPatientID(id);
  }, []);

  const onSubmit = (formValues) => {
    const formData = {
      ...formValues,
      patient: props.selectedPatient._id,
      date: selectDays,
    };
    // console.log(formData);
    props.addInvoice(formData);
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // const initialValues = { date: new Date().toISOString().substr(0, 10) };

  const treatmentProtocolHeading = [
    { id: "date", label: "Date" },
    { id: "treatment", label: "Treatment" },
    { id: "quantity", label: "Quantity" },
    { id: "price", label: "Price" },
    { id: "consultant", label: "Consultant" },
    { id: "action", label: "Action" },
  ];

  function sortByKey(array, key) {
    return array.sort(function (a, b) {
      var x = new Date(a[key]).getTime();
      var y = new Date(b[key]).getTime();
      return x < y ? 1 : x > y ? -1 : 0;
    });
  }

  let tableData = [];

  if (props.invoices.length > 0) {
    for (let i = 0; i < props.invoices.length; i++) {
      const data = { ...props.invoices[i], date: undefined, action: "actions" };
      props.invoices[i].date.forEach((d) => {
        tableData.push({ ...data, date: d, consultant: props.consultant });
      });
    }
    sortByKey(tableData, "date");
  }
  tableData = tableData.map((row) => {
    return { ...row, date: new Date(row.date).toDateString() };
  });

  console.log(tableData, "data in invoice table", props.invoices);
  const renderTable = () => {
    return (
      <AppointmentTable headings={treatmentProtocolHeading} rows={tableData} />
    );
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <div className="text-center">
              <div
                className="ui segment"
                style={{ backgroundColor: "inherit" }}
              >
                <div className="ui two column very relaxed grid ">
                  <div class="ui vertical divider">AND</div>
                  <div className="column">
                    <div className="field">
                      <Grid container spacing={10}>
                        <Grid item xs={6}>
                          <div className="item">
                            <Field name="treatment">
                              {({ input, meta }) => (
                                <div className="field">
                                  <label>Treatments</label>
                                  <input type="text" {...input} />
                                  {/* <PointingError input = {input } meta = {meta} /> */}
                                </div>
                              )}
                            </Field>
                          </div>
                          <div className="item">
                            <Field name="sessions">
                              {({ input, meta }) => (
                                <div className="field">
                                  <label>
                                    No. Of Sessions ( For Each Day )
                                  </label>
                                  <input type="text" {...input} />
                                  {/* <PointingError input = {input } meta = {meta} /> */}
                                </div>
                              )}
                            </Field>
                          </div>
                          <div className="item">
                            <Field name="price">
                              {({ input, meta }) => (
                                <div className="field">
                                  <label>Price</label>
                                  <input type="text" {...input} />
                                  {/* <PointingError input = {input } meta = {meta} /> */}
                                </div>
                              )}
                            </Field>
                          </div>
                          <br />
                          <br />
                          <div className="item">
                            <Field name="consultant">
                              {({ input, meta }) => (
                                <div className="field">
                                  <label>Consultant Name</label>
                                  <input type="text" {...input} />
                                  {/* <PointingError input = {input } meta = {meta} /> */}
                                </div>
                              )}
                            </Field>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                  <div className="column">
                    <div className="field">
                      <Grid item xs={6}>
                        <div style={{ textAlign: "center" }}>
                          <button
                            className="ui primary button"
                            onClick={handleOpen}
                          >
                            Add New Treatment
                          </button>
                          <Dialog
                            maxWidth="md"
                            open={open}
                            onClose={handleClose}
                          >
                            <AddNewTreatmentCategory />
                          </Dialog>
                        </div>
                        <br />
                        <br />
                        <div className="item">
                          <TreatmentCalender
                            selectDays={selectDays}
                            setSelectDays={setSelectDays}
                          />
                        </div>
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <br />
                <br />
                <div style={{ textAlign: "center" }}>
                  <button
                    // disabled={!_.isEmpty(errors) || submitting}
                    className="ui primary button"
                  >
                    Submit
                  </button>
                  <button
                    // disabled={!_.isEmpty(errors) || submitting}
                    className="ui button"
                  >
                    Discard
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Form>
      <br />
      <br />
      <div>{renderTable()}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    invoices: state.invoices,
    selectedPatient: state.selectedPatient,
    consultant: state.auth.user.name,
  };
};

export default connect(mapStateToProps, { addInvoice, getInvoicesByPatientID })(
  TreatmentProtocol
);
