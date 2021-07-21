import React from "react";
import { Field } from "react-final-form";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import PointingError from "../LandingPage/ErrorComponent/PointingError";
import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

var rn = require('random-number');

const useStyles = makeStyles((theme) => ({
  btns: {
    color: 'red',

  },
  outline: {
    marginLeft: "10px",
    fontSize: "30px",
    color: "blue"
  },
  addd: {
    backgroundColor: "orange",
    fontSize: "14px"
  }


}));




export default function JoyStepper(props) {
  React.useEffect(() => {
    handleChange();
  }, [])
  const classes = useStyles();
  var options = {
    min: 1000000000
    , max: 9999999999
    , integer: true
  }

  const handleChange = () => {
    var id = document.getElementById('patientId').value = rn(options);
    console.log(id)
    props.onSelect(id);
  }


  const RadioComponent = ({ input }) => <Radio {...input} />;
  return (
    <div>
      <div class="ui segment">
        <div class="ui two column very relaxed grid">
          <div class="column">
            <div class="field">
              <label style={{ color: "blue" }}> Food Habits </label>
              <RadioGroup row>
                <FormControlLabel
                  label="Veg"
                  control={
                    <Field
                      name="food"
                      component={RadioComponent}
                      type="radio"
                      value="veg"
                    />
                  }
                />
                <FormControlLabel
                  label="Non-Veg"
                  control={
                    <Field
                      name="food"
                      component={RadioComponent}
                      type="radio"
                      value="nonveg"
                    />
                  }
                />
                <FormControlLabel
                  label="Eggetarian"
                  control={
                    <Field
                      name="food"
                      component={RadioComponent}
                      type="radio"
                      value="eggetarian"
                    />
                  }
                />
              </RadioGroup>
            </div>
            <Field name="occupationdescription">
              {({ input, meta }) => (
                <div class="field">
                  <label style={{ color: "blue" }}> Occupation and Description </label>
                  <textarea rows="3" {...input}></textarea>
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
            <Field name="city">
              {({ input, meta }) => (
                <div class="field">
                  <label style={{ color: "blue" }}> City </label>
                  <input type="text" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
            <Field name="pincode">
              {({ input, meta }) => (
                <div class="field">
                  <label style={{ color: "blue" }}> Pincode </label>
                  <input type="text" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
            <Field name="contact">
              {({ input, meta }) => (
                <div class="field">
                  <label style={{ color: "blue" }}> Contact Person </label>
                  <input type="text" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
          </div>
          <div className="column">
            <Field name="patientId">
              {({ }) => (
                <div class="field">
                  <label style={{ color: "blue" }}> Patient Id </label>
                  <input readOnly type="number" id="patientId" />
                </div>
              )}
            </Field>
            <Field name="address1">
              {({ input, meta }) => (
                <div class="field">
                  <label style={{ color: "blue" }}> Address 1 </label>
                  <textarea rows="3" {...input}></textarea>
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
            <Field name="address2">
              {({ input, meta }) => (
                <div class="field">
                  <label style={{ color: "blue" }}> Address 2 </label>
                  <textarea rows="3" {...input}></textarea>
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
            <Field name="phone">
              {({ input, meta }) => (
                <div class="field">
                  <label style={{ color: "blue" }}> Phone </label>
                  <input type="text" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
            <Field name="contactpersonnumber">
              {({ input, meta }) => (
                <div class="field">
                  <label style={{ color: "blue" }}> Contact Person Number </label>
                  <input type="text" {...input} />
                  <PointingError input={input} meta={meta} />
                </div>
              )}
            </Field>
          </div>
        </div>
      </div>
    </div>
  );
}
