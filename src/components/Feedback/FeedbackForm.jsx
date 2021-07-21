import React from "react";
import BasicContainer from "../Container/BasicContainer";
import { Form, Field } from "react-final-form";
import { Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import { addFeedback } from "../../actions/feedbackAction";
import { connect } from "react-redux";

function FeedbackForm(props) {
  const RadioComponent = ({ input }) => <Radio {...input} />;
  const initialValues = { date: new Date().toISOString().substr(0, 10) };
  const onSubmit = (formValues) => {
    console.log("feedback", formValues);
    props.addFeedback(formValues);
  };
  // console.log(initialValues);
  return (
    <BasicContainer>
      <h2 class="ui dividing header">Add New Feedback</h2>
      <div>
        <Form onSubmit={onSubmit} initialValues={initialValues}>
          {({ handleSubmit, form }) => (
            <form onSubmit={handleSubmit} className="ui form">
              <div class="ui segment">
                <div class="ui two column very relaxed grid">
                  <div class="column">
                    <Field name="name">
                      {({ input, meta }) => (
                        <div className="field">
                          <label>Name</label>

                          <input type="text" {...input} />
                        </div>
                      )}
                    </Field>
                    <Field name="email">
                      {({ input, meta }) => (
                        <div className="field">
                          <label>Email</label>
                          <input type="text" {...input} />
                        </div>
                      )}
                    </Field>
                  </div>
                  <div class="column">
                    <Field name="date" type="date">
                      {({ input, meta }) => (
                        <div className="field">
                          <label>Date</label>
                          <input type="date" {...input} />
                        </div>
                      )}
                    </Field>
                    <div class="field">
                      <label> Gender </label>
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
                        {/* <FormControlLabel
                          label="Others"
                          control={
                            <Field
                              name="gender"
                              component={RadioComponent}
                              type="radio"
                              value="others"
                            />
                          }
                        /> */}
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui  segment">
                <h3 className="ui header"> Appointments</h3>
                {
                  <table class="ui definition table">
                    <thead className="center aligned">
                      <tr>
                        <th className="four wide column"></th>
                        <th>Average</th>
                        <th>Very Good</th>
                        <th>Excellent</th>
                      </tr>
                    </thead>
                    <tbody className="center aligned">
                      <tr>
                        <td>Appointment Booking Ease</td>

                        <td>
                          <Field
                            name="ease"
                            component="input"
                            type="radio"
                            value="3"
                          />
                        </td>
                        <td>
                          <Field
                            name="ease"
                            component="input"
                            type="radio"
                            value="7"
                          />
                        </td>
                        <td>
                          <Field
                            name="ease"
                            component="input"
                            type="radio"
                            value="10"
                          />{" "}
                        </td>
                      </tr>

                      <tr>
                        <td>Keeping you informed</td>
                        <td>
                          <Field
                            name="informed"
                            component="input"
                            type="radio"
                            value="3"
                          />
                        </td>
                        <td>
                          <Field
                            name="informed"
                            component="input"
                            type="radio"
                            value="7"
                          />
                        </td>
                        <td>
                          <Field
                            name="informed"
                            component="input"
                            type="radio"
                            value="10"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Waiting Time</td>
                        <td>
                          <Field
                            name="waiting"
                            component="input"
                            type="radio"
                            value="3"
                          />
                        </td>
                        <td>
                          <Field
                            name="waiting"
                            component="input"
                            type="radio"
                            value="7"
                          />
                        </td>
                        <td>
                          <Field
                            name="waiting"
                            component="input"
                            type="radio"
                            value="10"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                }
              </div>
              <div className="ui  segment">
                <h3 className="ui header"> Staff Behavior</h3>
                {
                  <table class="ui definition table">
                    <thead className="center aligned">
                      <tr>
                        <th className="four wide column"></th>
                        <th>Average</th>
                        <th>Very Good</th>
                        <th>Excellent</th>
                      </tr>
                    </thead>
                    <tbody className="center aligned">
                      <tr>
                        <td>Was our staff courteous </td>

                        <td>
                          <Field
                            name="courteous"
                            component="input"
                            type="radio"
                            value="3"
                          />
                        </td>
                        <td>
                          <Field
                            name="courteous"
                            component="input"
                            type="radio"
                            value="7"
                          />
                        </td>
                        <td>
                          <Field
                            name="courteous"
                            component="input"
                            type="radio"
                            value="10"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Was our staff helpful </td>
                        <td>
                          <Field
                            name="helpful"
                            component="input"
                            type="radio"
                            value="3"
                          />
                        </td>
                        <td>
                          <Field
                            name="helpful"
                            component="input"
                            type="radio"
                            value="7"
                          />
                        </td>
                        <td>
                          <Field
                            name="helpful"
                            component="input"
                            type="radio"
                            value="10"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Was our staff professionally caring </td>
                        <td>
                          <Field
                            name="caring"
                            component="input"
                            type="radio"
                            value="3"
                          />
                        </td>
                        <td>
                          <Field
                            name="caring"
                            component="input"
                            type="radio"
                            value="7"
                          />
                        </td>
                        <td>
                          <Field
                            name="caring"
                            component="input"
                            type="radio"
                            value="10"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                }
              </div>
              <div className="ui  segment">
                <h3 className="ui header"> Communication</h3>
                {
                  <table class="ui definition table">
                    <thead className="center aligned">
                      <tr>
                        <th className="four wide column"></th>
                        <th>Average</th>
                        <th>Very Good</th>
                        <th>Excellent</th>
                      </tr>
                    </thead>
                    <tbody className="center aligned">
                      <tr>
                        <td>Phone Call Answered Promptly </td>

                        <td>
                          <Field
                            name="promptly"
                            component="input"
                            type="radio"
                            value="3"
                          />
                        </td>
                        <td>
                          <Field
                            name="promptly"
                            component="input"
                            type="radio"
                            value="7"
                          />
                        </td>
                        <td>
                          <Field
                            name="promptly"
                            component="input"
                            type="radio"
                            value="10"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Procedure Explained clearly</td>
                        <td>
                          <Field
                            name="clearity"
                            component="input"
                            type="radio"
                            value="3"
                          />
                        </td>
                        <td>
                          <Field
                            name="clearity"
                            component="input"
                            type="radio"
                            value="7"
                          />
                        </td>
                        <td>
                          <Field
                            name="clearity"
                            component="input"
                            type="radio"
                            value="10"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Information Material Effectiveness</td>
                        <td>
                          <Field
                            name="effectiveness"
                            component="input"
                            type="radio"
                            value="3"
                          />
                        </td>
                        <td>
                          <Field
                            name="effectiveness"
                            component="input"
                            type="radio"
                            value="7"
                          />
                        </td>
                        <td>
                          <Field
                            name="effectiveness"
                            component="input"
                            type="radio"
                            value="10"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Sufficient time given</td>
                        <td>
                          <Field
                            name="sufficientTimeGiven"
                            component="input"
                            type="radio"
                            value="3"
                          />
                        </td>
                        <td>
                          <Field
                            name="sufficientTimeGiven"
                            component="input"
                            type="radio"
                            value="7"
                          />
                        </td>
                        <td>
                          <Field
                            name="sufficientTimeGiven"
                            component="input"
                            type="radio"
                            value="10"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Assessment done completely</td>
                        <td>
                          <Field
                            name="assessmentDoneCompletely"
                            component="input"
                            type="radio"
                            value="3"
                          />
                        </td>
                        <td>
                          <Field
                            name="assessmentDoneCompletely"
                            component="input"
                            type="radio"
                            value="7"
                          />
                        </td>
                        <td>
                          <Field
                            name="assessmentDoneCompletely"
                            component="input"
                            type="radio"
                            value="10"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Advice to stay healthy</td>
                        <td>
                          <Field
                            name="adviceToStay"
                            component="input"
                            type="radio"
                            value="3"
                          />
                        </td>
                        <td>
                          <Field
                            name="adviceToStay"
                            component="input"
                            type="radio"
                            value="7"
                          />
                        </td>
                        <td>
                          <Field
                            name="adviceToStay"
                            component="input"
                            type="radio"
                            value="10"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Information Material Effectiveness</td>
                        <td>
                          <Field
                            name="informationMaterialEffectiveness"
                            component="input"
                            type="radio"
                            value="3"
                          />
                        </td>
                        <td>
                          <Field
                            name="informationMaterialEffectiveness"
                            component="input"
                            type="radio"
                            value="7"
                          />
                        </td>
                        <td>
                          <Field
                            name="informationMaterialEffectiveness"
                            component="input"
                            type="radio"
                            value="10"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                }
              </div>
              <div className="ui  segment">
                <h3 className="ui header"> Satisfaction Level</h3>
                {
                  <table class="ui definition table">
                    <thead className="center aligned">
                      <tr>
                        <th className="four wide column"></th>
                        <th>Average</th>
                        <th>Very Good</th>
                        <th>Excellent</th>
                      </tr>
                    </thead>
                    <tbody className="center aligned">
                      <tr>
                        <td>Overall satisfaction achieved</td>

                        <td>
                          <Field
                            name="overallSatisfactionAchieved"
                            component="input"
                            type="radio"
                            value="3"
                          />
                        </td>
                        <td>
                          <Field
                            name="overallSatisfactionAchieved"
                            component="input"
                            type="radio"
                            value="7"
                          />
                        </td>
                        <td>
                          <Field
                            name="overallSatisfactionAchieved"
                            component="input"
                            type="radio"
                            value="10"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Quality of care</td>
                        <td>
                          <Field
                            name="qualityOfCare"
                            component="input"
                            type="radio"
                            value="3"
                          />
                        </td>
                        <td>
                          <Field
                            name="qualityOfCare"
                            component="input"
                            type="radio"
                            value="7"
                          />
                        </td>
                        <td>
                          <Field
                            name="qualityOfCare"
                            component="input"
                            type="radio"
                            value="10"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Rating of our service </td>
                        <td>
                          <Field
                            name="ratingOfCare"
                            component="input"
                            type="radio"
                            value="3"
                          />
                        </td>
                        <td>
                          <Field
                            name="ratingOfCare"
                            component="input"
                            type="radio"
                            value="7"
                          />
                        </td>
                        <td>
                          <Field
                            name="ratingOfCare"
                            component="input"
                            type="radio"
                            value="10"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                }
              </div>
              <div style={{ textAlign: "center" }}>
                <button type="submit" className="ui primary button">
                  Save
                </button>
                <button type="reset" onClick={form.reset} className="ui button">
                  Discard
                </button>
              </div>
            </form>
          )}
        </Form>
      </div>
    </BasicContainer>
  );
}

export default connect(null, { addFeedback })(FeedbackForm);
