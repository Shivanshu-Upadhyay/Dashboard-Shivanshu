import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "../Card/Card";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { getAllApointments } from "../../actions/appointmentAction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const TopDrawerGrid = (props) => {
  const classes = useStyles();
  React.useEffect(() => {
    props.getAllApointments();
  }, []);
  const appointmentData = [];
  props.appointments &&
    props.appointments.forEach((appointment, index) => {
      const data = {
        name: `${appointment.formData.patient.firstName} ${appointment.formData.patient.lastName} `,
        time: `${new Date(appointment.start).toLocaleTimeString()} : ${new Date(
          appointment.start
        ).toDateString()}`,
        treatment: `${appointment.formData.treatment.name}`,
        consultant: props.user.name,
      };
      appointmentData.push(data);
    });

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        {console.log(appointmentData)}
        {appointmentData.slice(0, 4).map((appointment) => {
          return (
            <Grid item xs={3} key={uuidv4()}>
              <Paper className={classes.paper}>
                <Card data={appointment} />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appointments: state.appointments,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, { getAllApointments })(TopDrawerGrid);
