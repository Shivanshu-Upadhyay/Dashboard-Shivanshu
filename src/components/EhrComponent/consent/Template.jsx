import React from 'react';
import BasicContainer from '../../Container/BasicContainer';
import { connect } from "react-redux";
import { useLocation } from 'react-router-dom';
import { getConsentDataById } from '../../../actions/consentAction';
import { Grid } from '@material-ui/core';

function Template(props) {
    const location = useLocation();

    React.useState(() => {
        props.getConsentDataById(location.state.id);
    }, []);


    const imgURL = Buffer.from(location.state.consent.signature.data, 'base64').toString('ascii')

    console.log(imgURL);
    return (
        <BasicContainer>
            <div style={{ textAlign: 'center' }}>
                <div>
                    {location.state.user.clinicName}
                </div>
                <br></br>
                <hr></hr>
                <br></br>
                <div>
                    <h3>CONSENT FORM</h3>
                </div>
                <Grid container spacing={6} style={{ marginTop: '50px' }}>
                    <Grid item xs={6}>
                        Patient's Name: {`${location.state.patient.firstName} ${location.state.patient.lastName}`}
                    </Grid>
                </Grid>
                <Grid container spacing={6}>
                    <Grid item xs={6}>
                        Age: {`${location.state.age}`}
                    </Grid>
                    <Grid item xs={6}>
                        Gender: {`${location.state.patient.gender}`}
                    </Grid>
                </Grid>
                <Grid container spacing={6}>
                    <Grid item xs={6}>
                        Mobile No. : {`${location.state.patient.mobile}`}
                    </Grid>
                    <Grid item xs={6}>
                        Date: {`${location.state.consent.date}`}
                    </Grid>
                </Grid>
                <Grid container spacing={6} style={{ marginTop: '40px' }}>
                    <Grid item xs={12}>
                        Terms & Conditions: <br></br>
                        <p> <b>1.</b>  The Clinic / hospital management does not guarantee any treatment given in their premise(s) or home visit or during online consultation . The ultimate decision lies with the clinic / hospital management. The physiotherapist or clinic management shall not at all be responsible.
                        </p>


                        <p> <b>2.</b> Fees & other associated treatment costs are to be paid upfront, and are non-refundable & non-transferable.</p>
                        <p> <b>3.</b> Me and my attendants or relatives are responsible for all of our belongings and clinic / hospital management is not at all responsible for any damage or loss.</p>
                        <p> <b>4.</b> Any dispute, if any shall be sorted out between the clinic / hospital management & me amicably without the intervention of any third party.
                        </p>
                        <p> <b>5.</b> For any legal dispute, jurisdiction would be New Delhi, India.</p>
                        <p> <b>6.</b> I give my consent after reading all the terms & conditions.</p>
                        {location.state.consent.terms == undefined ? null : `${location.state.consent.terms}`}
                    </Grid>
                </Grid>
                <br></br>
                <hr></hr>
                <div className="sign" style={{
                    margin: '40px'
                }}>
                    <img
                        src={imgURL}
                        alt="signature"
                        style={{
                            display: 'block',
                            margin: '0 auto',
                            border: '1px solid black',
                            width: '200px'
                        }}></img>
                </div>
            </div>
        </BasicContainer>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        consentData: state.consentData
    };
};

export default connect(mapStateToProps, {
    getConsentDataById
})(Template);