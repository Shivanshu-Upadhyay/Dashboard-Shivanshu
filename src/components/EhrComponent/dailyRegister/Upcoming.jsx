import React from 'react';
import AppointmentTable from "../../Tables/AppointmentTable";
import { connect } from "react-redux";
import {
    deleteAppointment, getAllApointments, editStatus
} from "../../../actions/appointmentAction";
import FormDialog from "../../Forms/FormLayout";
import { Dialog } from "@material-ui/core";

//icons
import DoneIcon from "@material-ui/icons/Done";
import CreateIcon from "@material-ui/icons/Create";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import { Grid } from '@material-ui/core';
import BasicContainer from '../../Container/BasicContainer';
import FormLayout2 from '../../Forms/FormLayout2';

function Upcoming(props) {

    const [iden, setIden] = React.useState();
    const [appData, setAppData] = React.useState({});
    const [openAddAppointment, setOpenAddAppointment] = React.useState(false);

    React.useState(() => {
        props.getAllApointments();
    }, []);

    const changeStatus = () => {
        console.log(iden, appData);
        props.editStatus(iden, appData);
    };


    const handleClose = () => {
        setOpenAddAppointment(false);
    };

    console.log(props.selectedPatient)

    const upcomingTableHeading = [
        { id: "date", label: "Date" },
        { id: "timeSlot", label: "Time Slot" },
        { id: "consultant", label: "Consultant" },
        { id: "attendance", label: "Attendance" },
        { id: "payment", label: "Payment Status" },
        { id: "action", label: "Actions" },
    ];

    const upcomingData = [];

    props.appointments &&
        props.appointments.forEach((appointment, index) => {
            if (props.selectedPatient._id === appointment.patient._id) {
                if ((appointment.status === 0) || (appointment.status === -1)) {
                    const data = {
                        date: `${appointment.date}`,
                        timeSlot: `${new Date(appointment.start).toLocaleTimeString()} to ${new Date(appointment.end).toLocaleTimeString()}`,
                        billStatus: "Pending",
                        attendance: (
                            <Grid container xs={12}>
                                <Grid item xs={6}>
                                    Not Visited

                                </Grid>
                                <Grid item xs={6}>
                                    <DoneIcon
                                        onClick={() => {
                                            setAppData({ status: 1 });
                                            setIden(appointment._id);
                                            changeStatus();
                                        }} />
                                </Grid>
                            </Grid>

                        ),
                        consultant: appointment.consultant,
                        action: (
                            <div className="ui compact menu">
                                <div className="item">
                                    <CreateIcon
                                        onClick={() => {
                                            setIden(appointment._id);
                                            setOpenAddAppointment(true);
                                        }}
                                        color="secondary"
                                    />
                                </div>
                                <div className="item">
                                    <DeleteSweepIcon
                                        color="primary"
                                    />
                                </div>
                            </div>
                        ),
                    };
                    upcomingData.push(data);
                }
            }
        });

    return (
        <div>
            <AppointmentTable
                headings={upcomingTableHeading}
                rows={upcomingData}
            />

            {openAddAppointment && (
                <Dialog
                    maxWidth="md"
                    open={openAddAppointment}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <FormLayout2 id={iden} edit={true} />

                </Dialog>
            )}
        </div>


    );
}

const mapStateToProps = (state) => {
    return {
        appointments: state.appointments,
        selectedPatient: state.selectedPatient,
    };
};

export default connect(mapStateToProps, {
    getAllApointments,
    editStatus,
    deleteAppointment
})(Upcoming);