import React from 'react';

import { Form, Field } from 'react-final-form'
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import { login } from "../actions/userAction";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function SignIn(props) {
    const history = useHistory();
    const handleFormSubmit = (formValues) => {
        console.log(formValues);
        props.login(formValues);
        history.push('/clinictoday');
    }
    return (
        <div class="container">

            <div>
                <div style={{ marginTop: "90px" }}>
                    <div >

                        <div>
                            <h5 class="mx-auto">Automate Your Physio Clinical Practice </h5>



                            <div class="login-form text-start">


                                <div class="sign-in-htm">
                                    <Form onSubmit={handleFormSubmit}>
                                        {({ handleSubmit }) => (
                                            <form onSubmit={handleSubmit} noValidate>
                                                <div className="mb-3 group">
                                                    <Field name="email">
                                                        {({ input }) => (
                                                            <div className="cc">
                                                                <Grid container spacing={1} alignItems="flex-end">
                                                                    <Grid item></Grid>
                                                                    <Grid item>
                                                                        <TextField
                                                                            style={{ width: "300px" }}
                                                                            id="input-with-icon-grid"
                                                                            {...input}
                                                                            label="Email"
                                                                        />
                                                                    </Grid>
                                                                </Grid>
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>
                                                <br />

                                                <div className="mb-3 group">
                                                    <Field name="password">
                                                        {({ input }) => (
                                                            <div>
                                                                <Grid container spacing={1} alignItems="flex-start">
                                                                    <Grid item></Grid>
                                                                    <Grid item>
                                                                        <TextField
                                                                            style={{ width: "300px" }}

                                                                            id="outlined-basic"
                                                                            label="Password"
                                                                            {...input}
                                                                            variant="outlined"
                                                                        />
                                                                    </Grid>
                                                                </Grid>
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>

                                                <br />
                                                <div class="group">
                                                    <input type="submit" class="button" value="LogIn"></input>
                                                </div>
                                            </form>
                                        )}
                                    </Form>

                                    <div class="hr"></div>
                                    <div class="foot-lnk">
                                        <a href="#forgot">Forgot Password?</a>
                                        <br></br><br></br>
                                        <div class="social-links1  text-center">
                                            <a href="#d" class="google-plus"><i class="bx bxl-google-plus"></i></a>
                                            <a href="#d" class="facebook"><i class="bx bxl-facebook"></i></a>
                                            <a href="#d" class="instagram" ><i class="bx bxl-instagram"></i></a>

                                        </div>

                                        <div class="row text-center mt-3">
                                            <p style={{ color: "black" }}>Don't have an account? <Link to="/signUp">Register Here</Link></p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}


const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps, { login })(SignIn);