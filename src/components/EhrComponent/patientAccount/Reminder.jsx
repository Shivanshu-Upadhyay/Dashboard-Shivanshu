import React from "react";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Form, Field } from "react-final-form";
import { getPatientById } from "../../../actions/patientAction";
import { connect } from "react-redux";

import {
    Paper,
    Grid,
    Button,
} from "@material-ui/core";

function Notification(props) {

    React.useEffect(() => {
        props.getPatientById(props.id);
    }, []);
    var phone = '91' + props.selectedPatient.mobile;

    const onSubmit = (formValues) => {
        if (formValues.ReminderSMS == null)
            formValues.ReminderSMS = 'Hey! Your Treatment sessions are yet to be completed. Visit Regularly and perform exercises at home as prescribed'
        console.log(formValues);
        window.open('https://wa.me/' + phone + '?text=' + formValues.ReminderSMS, '_blank');
    };

    console.log(props.selectedPatient)


    return (
        <div >

            <Form onSubmit={onSubmit}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <Paper style={{ padding: 30 }}>


                            {/* <h4 className='mb-5 text-uppercase'><u>COMMUNICATION</u></h4> */}
                            <Grid container className='mb-3' spacing={2}>

                                <Grid item md={12} xs={12}>

                                    <div>
                                        <Field name="ReminderSMS">
                                            {({ input }) => (
                                                <div className="fullw10  ">

                                                    <textarea
                                                        className="wnew"
                                                        placeholder="Hey! Your Treatment sessions are yet to be completed. Visit Regularly and perform exercises at home as prescribed"
                                                        {...input}></textarea>
                                                </div>
                                            )}
                                        </Field>
                                    </div>

                                </Grid>


                            </Grid>

                            <div className=' text-right mb-3  padd'> <Button
                                variant="contained"
                                type='submit'
                                color="primary" >
                                Submit
                            </Button></div>


                        </Paper>
                    </form>
                )}
            </Form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedPatient: state.selectedPatient,
    };
};


export default connect(mapStateToProps, { getPatientById })(Notification);