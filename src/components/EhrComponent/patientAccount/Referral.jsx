import { Button } from '@material-ui/core';
import React from "react";
import { Field, Form } from "react-final-form";
import { connect } from "react-redux";
import { getPatientById } from "../../../actions/patientAction";
import { addReferrelData } from '../../../actions/referrelAction';
import PointingError from "../../LandingPage/ErrorComponent/PointingError";


function Referral(props) {

    React.useEffect(() => {
        props.getPatientById(props.id);
    }, []);

    const [referral, setReferral] = React.useState('');
    console.log(props.user);
    const onSubmit = (formValues) => {
        formValues.referralSource = referral;
        formValues.patient = props.selectedPatient
        console.log(formValues);
        props.addReferrelData(formValues);
        if (referral == 'doctors') {
            var phone = '91' + formValues.contact;
            window.open('https://wa.me/' + phone + '?text=' + `Hi Doctor, %0a
            Warm Greetings ! %0a
            Your referrals help us to achieving our professional goal of delivering best quality patient care.%0a
            We acknowledge the same and thank you for the kind support.%0a
            Regards, %0a 
            Dr. ${props.user.name} / ${props.user.clinicName}`, '_blank');

        }
    };
    const assignRefrrelValue = () => {
        setReferral(document.getElementById('referrel').value);
    }


    return (
        <div class="ui segment">
            <Form onSubmit={onSubmit}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="ui form">
                        <div class="ui two column very relaxed grid">
                            <div class="column">
                                <div class="field">
                                    <label style={{ color: "blue" }}>Referral Source</label>
                                    <select class="form-select" aria-label="Default select example" onChange={assignRefrrelValue} id="referrel">
                                        <option selected>Please Select Referral Source</option>
                                        <option value="doctors">Doctors</option>
                                        <option value="website">Website</option>
                                        <option value="advertisement">Advertisement</option>
                                        <option value="patients">Patients</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>

                                <Field name="email">
                                    {({ input, meta }) => (
                                        <div className="fullw10">
                                            <label style={{ color: "blue" }}>Email</label>

                                            <input disabled={!(referral == 'doctors')} type="Email" {...input} placeholder="" />
                                            <PointingError input={input} meta={meta} />
                                        </div>
                                    )}
                                </Field>

                            </div>

                            <div class="column">

                                <Field name="name">
                                    {({ input, meta }) => (
                                        <div className="field">
                                            <label style={{ color: "blue" }}>Name</label>
                                            <input disabled={!(referral == 'doctors')} type="text" {...input} />
                                            <PointingError input={input} meta={meta} />
                                        </div>
                                    )}
                                </Field>

                                <Field name="contact">
                                    {({ input, meta }) => (
                                        <div className="field">
                                            <label style={{ color: "blue" }}>Contact Detail</label>
                                            <input disabled={!(referral == 'doctors')} type="text" {...input} />
                                            <PointingError input={input} meta={meta} />
                                        </div>
                                    )}
                                </Field>

                            </div>
                        </div>
                        <div>
                            <Button variant="contained" color="primary" style={{ marginLeft: '28vw' }} type="submit">Save</Button>
                        </div>
                    </form>
                )}
            </Form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedPatient: state.selectedPatient,
        user: state.auth.user
    };
};


export default connect(mapStateToProps, { getPatientById, addReferrelData })(Referral);