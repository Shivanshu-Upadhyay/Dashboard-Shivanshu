import React from "react";
import { Field } from "react-final-form";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import Validator from "validator";
import _ from "lodash";
import PointingError from "../LandingPage/ErrorComponent/PointingError";
import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";


import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  btns: {
    color: 'red',
    marginLeft: "11px"


  },
  btnsss: {
    color: "black",
  }



}));



export default function YesbirStepper() {
  const classes = useStyles();

  const RadioComponent = ({ input }) => <Radio {...input} />;

  return (
    <div>
      <div class="ui segment">
        <div class="ui two column very relaxed grid">
          <div class="column">
            <Field name="firstName">
              {({ input, meta }) => (
                <div class="field">
                  <label style={{ color: "blue" }}>First Name </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    {...input}
                  />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>

            <div class="field">
              <label style={{ color: "blue" }}>Patient Type *</label>
              <RadioGroup row>
                <FormControlLabel
                  label="OPD Patient"
                  control={
                    <Field
                      name="patientType"
                      component={RadioComponent}
                      type="radio"
                      value="opd"
                    />
                  }
                />
                <FormControlLabel
                  label="Home Patient"
                  control={
                    <Field
                      name="patientType"
                      component={RadioComponent}
                      type="radio"
                      value="home"
                    />
                  }
                />
              </RadioGroup>
            </div>

            <div class="field">
              <label style={{ color: "blue" }}>Gender </label>
              <RadioGroup row>
                <FormControlLabel
                  label="Male"
                  control={
                    <Field
                      name="gender"
                      component={RadioComponent}
                      type="radio"
                      value="male"
                    />
                  }
                />
                <FormControlLabel
                  label="Female"
                  control={
                    <Field
                      name="gender"
                      component={RadioComponent}
                      type="radio"
                      value="female"
                    />
                  }
                />
              </RadioGroup>
            </div>
            <Field name="consultant">
              {({ input, meta }) => (
                <div class="field">
                  <label style={{ color: "blue" }}>Consultant Name </label>
                  <input type="text" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
            {/* <Field name="date">
              {({ input, meta }) => (
                <div class="field">
                  <label>Date </label>
                  <input type="text" placeholder="DD/MM/YYYY" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field> */}
          </div>
          <div class="column">
            <Field name="lastName">
              {({ input, meta }) => (
                <div class="field">
                  <label style={{ color: "blue" }}>Last Name </label>
                  <input type="text" placeholder="Enter Last Name" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
            <Field name="email">
              {({ input, meta }) => (
                <div class="field">
                  <label style={{ color: "blue" }}>Email</label>
                  <input type="text" placeholder="Enter Email" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
            <Field name="mobile">
              {({ input, meta }) => (
                <div class="field">
                  <label style={{ color: "blue" }}>Mobile Number </label>
                  <input
                    type="text"
                    placeholder="Enter Mobile no."
                    {...input}
                  />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
            <Field name="dob">
              {({ input, meta }) => (
                <div class="field">
                  <label style={{ color: "blue" }}>Date of Birth </label>
                  <input type="text" placeholder="DD/MM/YYYY" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>

          </div>
        </div>
        {/* <div class="ui vertical divider">and</div> */}
      </div>
      <br />
      <br />
    </div>
  );
}
