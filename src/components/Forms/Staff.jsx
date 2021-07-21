import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Button, Dialog } from "@material-ui/core";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import CreateIcon from "@material-ui/icons/Create";
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from "@material-ui/icons/Save";
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from "@material-ui/core/styles";

import AppointmentTable from "../Tables/AppointmentTable";
import { connect } from "react-redux";
import { addStaffData, deleteStaffData, editStaff, getStaffData } from "../../actions/staffAction";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import { Form, Field } from "react-final-form";
const useStyles = makeStyles((theme) => ({
  btns: {
    color: 'red',

  },
  addd: {
    width: "260px",
    height: "30px",
    fontSize: "15px",
    textAlign: "center",
    backgroundColor: "orange",


  },
  outline: {
    color: "black"
  }


}));


function Staff(props) {
  const classes = useStyles();

  React.useEffect(() => {
    props.getStaffData();
  }, []);

  const onSubmit = (formValues) => {
    console.log(formValues);
    props.addStaffData(formValues);
    window.location.reload();
  };


  const [open, setOpen] = React.useState(false);
  const [iden, setIden] = React.useState();
  const [openStaff, setOpenStaff] = React.useState(false);

  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  const handleClose = () => {
    setOpen(false);
    setOpenStaff(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const editOnSubmit = (formValues) => {
    setOpenStaff(false);
    console.log(formValues);
    props.editStaff(iden, formValues);
    window.location.reload();
  };

  const deleteStaffHandler = (id) => {
    console.log(id);
    props.deleteStaffData(id);
    window.location.reload();
  }
  const staffTableHeading = [
    { id: "name", label: "Name" },
    { id: "designation", label: "Designation" },
    { id: "mobile", label: "Mobile" },
    { id: "email", label: "Email" },
    { id: "address", label: "Address" },
    { id: "joiningDate", label: "Joining Date" },
    { id: "actions", label: "Actions" },

  ];
  const staffData = [];


  props.staffData &&
    props.staffData.forEach((staff, index) => {
      staff.forEach((s) => {
        const data = {
          name: `${s.name}`,
          designation: `${s.designation}`,
          mobile: `${s.mobile}`,
          email: `${s.email}`,
          address: `${s.address}`,
          joiningDate: `${s.date}`,
          actions: (
            <div className="ui compact menu">
              <div className="item">
                <EditIcon
                  color="secondary"
                  onClick={() => {
                    setOpenStaff(true);
                    setIden(s._id);
                  }}
                ></EditIcon>
              </div>
              <div className="item">
                <DeleteSweepIcon
                  color="primary"
                  onClick={() => {
                    deleteStaffHandler(s._id);
                  }}
                />
              </div>

            </div>
          )
        };
        staffData.push(data);
      })

    });

  return (
    <div>
      <Button className='btn3' variant="contained" onClick={handleOpen} style={{ float: 'right', marginTop: '-2.8rem' }}><div style={{ color: 'white', fontWeight: 'bold', marginRight: '0.2rem',fontSize:'15px' }}>Add New Staff</div>  </Button>

      <br />
      <br />
      <br />


      <div>
        <Dialog maxWidth="md" open={open} onClose={handleClose}>
          <DialogTitle style={{ color: "blue", fontSize: "bold" }} id="responsive-dialog-title" className="text-center">
            {"New Admin & Staff"}
          </DialogTitle >
          <div className="container my-3">
            <Form onSubmit={onSubmit} initialValues={initialValues}>
              {({ handleSubmit, form }) => (
                <form onSubmit={handleSubmit} className="ui form">
                  <Grid container alignItems="flex-start" spacing={4}>
                    <Grid item xs={12}>
                      <div>
                        <Field name="name">
                          {({ input }) => (
                            <div>
                              <label style={{ color: "blue" }} className="age">Name </label>

                              <input type="text" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>
                    </Grid>

                    <Grid item xs={12}>
                      <div>
                        <Field name="address">
                          {({ input }) => (
                            <div>
                              <label style={{ color: "blue" }} className="age">Address</label>

                              <textarea
                                {...input}
                                placeholder=""
                                rows="3"
                              ></textarea>
                            </div>
                          )}
                        </Field>
                      </div>
                    </Grid>

                    <Grid item xs={6}>
                      <div>
                        <Field name="mobile">
                          {({ input }) => (
                            <div>
                              <label style={{ color: "blue" }} className="name">Mobile No:</label>
                              <input type="number" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>
                      <br />
                      <div>
                        <Field name="designation">
                          {({ input }) => (
                            <div>
                              <label style={{ color: "blue" }} className="name">Designation:</label>
                              <input type="text" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>
                      <br />
                    </Grid>
                    <Grid item xs={6}>
                      <div>
                        <Field name="email">
                          {({ input }) => (
                            <div>
                              <label style={{ color: "blue" }} className="name">Email:</label>
                              <input type="text" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>

                      <br />
                      <div>
                        <Field name="date">
                          {({ input }) => (
                            <div>
                              <label style={{ color: "blue" }} className="name">Date Of joining</label>
                              <input type="date" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>
                      <br />
                    </Grid>
                  </Grid>
                  <br />

                  <div className="mb-3" style={{ textAlign: "center" }}>
                    <Button
                      className={classes.btns}
                      variant="contained"
                      // color="primary"
                      size="large"
                      type="submit"
                      autoFocus
                      onClick={handleClose}
                      startIcon={<SaveIcon />}
                      autoFocus
                    >
                      Save
                    </Button>
                    {/* <Button className={classes.btnss}  variant="contained" type="submit" onClick={handleClose}>
                      Save
                    </Button> */}
                  </div>
                </form>
              )}
            </Form>
          </div>
        </Dialog>
      </div>

      <div className="table-component">
        <AppointmentTable
          headings={staffTableHeading}
          rows={staffData}
        />
      </div>


      {openStaff && (
        <Dialog
          maxWidth="md"
          open={openStaff}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <Form onSubmit={editOnSubmit} initialValues={initialValues}>
            {({ handleSubmit, form }) => (
              <form onSubmit={handleSubmit} className="ui form">
                <Grid container alignItems="flex-start" spacing={4}>
                  <Grid item xs={12}>
                    <div>
                      <Field name="name">
                        {({ input }) => (
                          <div>
                            <label className="age">Name </label>

                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </div>
                  </Grid>

                  <Grid item xs={12}>
                    <div>
                      <Field name="address">
                        {({ input }) => (
                          <div>
                            <label className="age">Address</label>

                            <textarea
                              {...input}
                              placeholder=""
                              rows="3"
                            ></textarea>
                          </div>
                        )}
                      </Field>
                    </div>
                  </Grid>

                  <Grid item xs={6}>
                    <div>
                      <Field name="mobile">
                        {({ input }) => (
                          <div>
                            <label className="name">Mobile No:</label>
                            <input type="number" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </div>
                    <br />
                    <div>
                      <Field name="designation">
                        {({ input }) => (
                          <div>
                            <label className="name">Designation:</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </div>
                    <br />
                    <div>
                      <Field name="upload">
                        {({ input }) => (
                          <div>
                            <label className="name">Upload Photograph</label>
                            <input
                              type="file"
                              {...input}
                              placeholder=""
                              accept=".png, .jpg, .jpeg, .pdf"
                            />
                            <h6> File Should be in jpg & pdf Format</h6>
                          </div>
                        )}
                      </Field>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div>
                      <Field name="email">
                        {({ input }) => (
                          <div>
                            <label className="name">Email:</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </div>

                    <br />
                    <div>
                      <Field name="date">
                        {({ input }) => (
                          <div>
                            <label className="name">Date Of joining</label>
                            <input type="date" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </div>
                    <br />
                    <div>
                      <Field name="document">
                        {({ input }) => (
                          <div>
                            <label className="name">Upload Documents</label>
                            <input type="file" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </div>
                  </Grid>
                </Grid>
                <br />

                <div className="mb-3" style={{ textAlign: "center" }}>
                  <Button variant="outlined" color="secondary" type="submit">
                    Edit
                  </Button>
                </div>
              </form>
            )}
          </Form>
        </Dialog>
      )}

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    staffData: state.staffData,


  };
};

export default connect(mapStateToProps, {

  addStaffData,
  getStaffData,
  deleteStaffData,
  editStaff

})(Staff);