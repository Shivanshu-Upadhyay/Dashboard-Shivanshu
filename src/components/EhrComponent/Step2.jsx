import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Form, Field } from "react-final-form";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import PointingError from "../LandingPage/ErrorComponent/PointingError";
import SaveIcon from "@material-ui/icons/Save";
// import { Button  } from "@material-ui/core";


import { makeStyles } from "@material-ui/core/styles";
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



export default function AshuStepper() {
  const classes = useStyles();

  const [married, setMarried] = React.useState(false);
  const [height, setHeight] = React.useState(1);
  const [weight, setWeight] = React.useState(0);
  const calculateHeight = () => {
    let height = document.getElementById('height').value;
    setHeight(Number(height));
  }


  console.log(height, weight);
  const calculateWeight = () => {
    let weight = document.getElementById('weight').value;
    setWeight(Number(weight));
  }

  const RadioComponent = ({ input }) => {
    if (input.value === "married" && input.checked) {
      setMarried(true);
    }
    if (input.value === "single" && input.checked) {
      setMarried(false);
    }
    return <Radio {...input} />;
  };



  return (
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="column">
          <Field name="dominance">
            {({ input, meta }) => (
              <div className="field">
                <label style={{ color: "blue" }}>Dominance (R/L)</label>
                <input type="text" {...input} />
                <PointingError input={input} meta={meta} />
              </div>
            )}
          </Field>
          <div class="field">
            <label style={{ color: "blue" }}>Referral Source</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Please Select Referral Source</option>
              <option value="1">Doctors</option>
              <option value="2">Website</option>
              <option value="3">Advertisement</option>
              <option value="4">Patients</option>
              <option value="5">Insurance</option>
              <option value="6">Others</option>
            </select>
          </div>

          <Field name="weight">
            {({ input, meta }) => (
              <div className="field">
                <label style={{ color: "blue" }}>Weight (in kg)</label>
                <input type="number" {...input} onBlur={calculateWeight} id="weight" />
                <PointingError input={input} meta={meta} />
              </div>
            )}
          </Field>
          <Field name="bmi">
            {({ input, meta }) => (
              <div className="field">
                <label style={{ color: "blue" }}>BMI</label>
                <input readOnly type="number" value={weight / ((height / 100) * (height / 100))} />
              </div>
            )}
          </Field>
        </div>

        <div class="column">
          <div class="field">
            <label style={{ color: "blue" }}>Marital Status</label>
            <RadioGroup row>
              <FormControlLabel
                label="Single"
                control={
                  <Field
                    name="status"
                    component={RadioComponent}
                    type="radio"
                    value="single"
                  />
                }
              />
              <FormControlLabel
                label="Married"
                control={
                  <Field
                    name="status"
                    component={RadioComponent}
                    type="radio"
                    value="married"
                  />
                }
              />
            </RadioGroup>

          </div>



          <Field name="height">
            {({ input, meta }) => (
              <div className="field">
                <label style={{ color: "blue" }}>Height (in cm)</label>
                <input type="number" {...input} onBlur={calculateHeight} id="height" />
                <PointingError input={input} meta={meta} />
              </div>
            )}
          </Field>

        </div>
      </div>
      {/* <div class="ui vertical divider">And</div> */}
    </div>
  );
}
