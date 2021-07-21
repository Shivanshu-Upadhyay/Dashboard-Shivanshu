import React from 'react';
import AppointmentTable from "../../Tables/AppointmentTable";
import CreateIcon from "@material-ui/icons/Create";
import { connect } from "react-redux";
import {
    deleteAppointment, getAllApointments
} from "../../../actions/appointmentAction";

import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import BasicContainer from '../../Container/BasicContainer';
function Previous(props) {

    console.log(props)

    const previousTableHeading = [
        { id: "date", label: "Date" },
        { id: "timeSlot", label: "Time Slot" },
        { id: "consultant", label: "Consultant" },
        { id: "attendance", label: "Attendance" },
        { id: "payment", label: "Payment Status" }
    ];

    const previousData = [];

    props.appointments &&
        props.appointments.forEach((appointment, index) => {
            if (props.selectedPatient._id === appointment.patient._id) {
                if ((appointment.status === 1) || (appointment.status === 2)) {
                    var attendance;
                    if (appointment.status === 1) attendance = 'Visited';
                    else attendance = 'Cancelled';
                    const data = {
                        date: `${appointment.date}`,
                        timeSlot: `${new Date(appointment.start).toLocaleTimeString()} to ${new Date(appointment.end).toLocaleTimeString()}`,
                        billStatus: "Pending",
                        attendance: attendance,
                        consultant: appointment.consultant,

                    };
                    previousData.push(data);
                }
            }
        });

    return (
        <div>
            <AppointmentTable
                headings={previousTableHeading}
                rows={previousData}
            />
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
})(Previous);