import { Button, Grid, Dialog } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { getPatientById } from "../../../actions/patientAction";
import { connect } from "react-redux";
import OtherStepper from "../../Stepper/OtherStepper";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    value: {
        margin: '10px'
    }
}));


function DemographicData(props) {
    React.useEffect(() => {
        props.getPatientById(props.id);
    }, []);

    const [openAddPatient, setOpenAddPatient] = React.useState(false);
    const [iden, setIden] = React.useState();

    const patientClose = () => {
        setOpenAddPatient(false);
    }

    const classes = useStyles();

    return (
        <div className="demographic-data">
            <Grid container spacing={10}>
                <Grid item xs={4}>
                    <div className={classes.value}>
                        Name
                    </div>
                    <Paper className={classes.paper}>
                        <div>
                            {`${props.selectedPatient.firstName} ${props.selectedPatient.lastName}`}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.value}>
                        Gender
                    </div>
                    <Paper className={classes.paper}>
                        <div>
                            {props.selectedPatient.gender}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.value}>
                        DOB
                    </div>
                    <Paper className={classes.paper}>
                        <div>
                            {props.selectedPatient.dob}
                        </div>
                    </Paper>
                </Grid>
            </Grid>


            <Grid container spacing={10}>
                <Grid item xs={12}>
                    <div className={classes.value}>
                        Address
                    </div>
                    <Paper className={classes.paper}>
                        <div>
                            {props.selectedPatient.address1}
                        </div>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={10}>
                <Grid item xs={4}>
                    <div className={classes.value}>
                        Mobile Number
                    </div>
                    <Paper className={classes.paper}>
                        <div>
                            {props.selectedPatient.mobile}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.value}>
                        Alternate Mobile Number
                    </div>
                    <Paper className={classes.paper}>
                        <div>
                            {props.selectedPatient.mobile}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.value}>
                        Email
                    </div>
                    <Paper className={classes.paper}>
                        <div>
                            {props.selectedPatient.email}
                        </div>
                    </Paper>
                </Grid>
            </Grid>


            <Grid container spacing={10}>
                <Grid item xs={4}>
                    <div className={classes.value}>
                        Marital Status
                    </div>
                    <Paper className={classes.paper}>
                        <div>
                            {props.selectedPatient.status}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.value}>
                        Occupation
                    </div>
                    <Paper className={classes.paper}>
                        <div>
                            {props.selectedPatient.occupationdescription}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.value}>
                        Patient Id
                    </div>
                    <Paper className={classes.paper}>
                        <div>
                            {props.selectedPatient.patientId}
                        </div>
                    </Paper>
                </Grid>
            </Grid>


            <Grid container spacing={10}>
                <Grid item xs={4}>
                    <div className={classes.value}>
                        Height
                    </div>
                    <Paper className={classes.paper}>
                        <div>
                            {props.selectedPatient.height}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.value}>
                        Weight
                    </div>
                    <Paper className={classes.paper}>
                        <div>
                            {props.selectedPatient.weight}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.value}>
                        BMI
                    </div>
                    <Paper className={classes.paper}>
                        <div>
                            {props.selectedPatient.bmi}
                        </div>
                    </Paper>
                </Grid>
            </Grid>


            <Grid container spacing={10}>
                <Grid item xs={4}>
                    <div className={classes.value}>
                        Consultant
                    </div>
                    <Paper className={classes.paper}>
                        <div>
                            {props.selectedPatient.consultant}
                        </div>
                    </Paper>
                </Grid>

            </Grid>
            <div style={{ marginLeft: '50vw' }}>
                <Button variant="contained" color="secondary" onClick={() => {
                    setOpenAddPatient(true);
                    setIden(props.selectedPatient._id);
                }} >Modify</Button>
            </div>

            {openAddPatient && (
                <Dialog
                    maxWidth="md"
                    open={openAddPatient}
                    onClose={patientClose}
                    aria-labelledby="form-dialog-title"
                >
                    <OtherStepper onClose={patientClose} id={iden} />
                </Dialog>
            )}

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedPatient: state.selectedPatient,
    };
};

export default connect(mapStateToProps, { getPatientById })(DemographicData);