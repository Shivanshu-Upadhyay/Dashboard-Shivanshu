import React, { useState } from "react";
import BasicContainer from "../../Container/BasicContainer";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Grid,
} from "@material-ui/core";

function Neuro(props) {
  const [open, setOpen] = useState(0);

  return (
    <BasicContainer>
      <div>
        <Form
          onSubmit={(formValues) => {
            console.log(formValues);
            props.addNeuroExamData(formValues);
            var glasgowdata = {
              glasgow: {
                eye1: formValues.eye1,
                eye2: formValues.eye2,
                eye3: formValues.eye3,
              },
            };
            console.log(glasgowdata);

            var dynamicdata = {
              dynamic: {
                ulnarl: formValues.ulnarl,
                ulnarR: formValues.ulnarR,
                radiall: formValues.radiall,
                radialR: formValues.radialR,
                medianl: formValues.medianl,
                medianR: formValues.medianR,
                musculocutaneousl: formValues.musculocutaneousl,
                musculocutaneousR: formValues.musculocutaneousR,
                sciaticl: formValues.sciaticl,
                sciaticR: formValues.sciaticR,
                tibiall: formValues.tibiall,
                tibialR: formValues.tibialR,
                commonPeroniall: formValues.commonPeroniall,
                commonPeronialR: formValues.commonPeronialR,
                femorall: formValues.femorall,
                femoralR: formValues.femoralR,
                lateralcutaneousl: formValues.lateralcutaneousl,
                lateralcutaneousR: formValues.lateralcutaneousR,
                obturatorl: formValues.obturatorl,
                obturatorR: formValues.obturatorR,
                surall: formValues.surall,
                suralR: formValues.suralR,
              },
            };
            console.log(dynamicdata);

            var specialtestdata = {
              specialtest: {
                info1: formValues.info1,
                info2: formValues.info2,
               
              },
            };
            console.log(specialtestdata);

            var adlscoretdata = {
              adlscore: {
                score1: formValues.score1,
                score2: formValues.score2,
               
              },
            };
            console.log(adlscoretdata);

            var tissuedata = {
              tissue: {
                ulnarrl: formValues.ulnarrl,
                ulnarrR: formValues.ulnarrR,
                radialll: formValues.radialll,
                radiallR: formValues.radiallR,
                mediannl: formValues.mediannl,
                mediannR: formValues.mediannR,

                sciaticcl: formValues.sciaticcl,
                sciaticcR: formValues.sciaticcR,
                tibialll: formValues.tibialll,
                tibiallR: formValues.tibiallR,
                commonPeronialll: formValues.commonPeronialll,
                commonPeroniallR: formValues.commonPeroniallR,
                femorall: formValues.femorall,
                femoralR: formValues.femoralR,
                peronialll:formValues.peronialll,
                peroniallR:formValues. peroniallR,
                lateralcutaneoussl: formValues.lateralcutaneoussl,
                lateralcutaneoussR: formValues.lateralcutaneoussR,
               
              },
            };
            console.log(tissuedata);

            var coordinationdata = {
              coordination: {
                time: formValues.time,
                speed: formValues.speed,
                error: formValues.error,

                time1: formValues.time1,
                speed1: formValues.speed1,
                error1: formValues.error1,

                time2: formValues.time2,
                speed2: formValues.speed2,
                error2: formValues.error2,
              },
            };
            console.log(coordinationdata);


            var balancetestdata = {
              balancetest: {
                gait: formValues.gait,
                change: formValues.change,
                gait1: formValues.gait1,

                horizontal: formValues.horizontal,
                vertical: formValues.vertical,
                pivot: formValues.pivot,

                over: formValues.over,
                around: formValues.around,
                steps: formValues.steps,

                balance:formValues.balance,
              
              },
            };
            console.log(balancetestdata);


            var functionaltestdata = {
              functionaltest: {
                bowels: formValues.bowels,
                bladder: formValues.bladder,
                grooming: formValues.grooming,

                toilet: formValues.toilet,
                feeding: formValues.feeding,
                bathing: formValues.bathing,

                transfer: formValues.transfer,
                mobility: formValues.mobility,
                dressing: formValues.dressing,

                stairs:formValues.stairs,
              
              },
            };
            console.log(functionaltestdata);
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="ui form">
              <div className="ui center aligned segment">
                <h3
                  onClick={() => setOpen(1)}
                  className="ui left aligned dividing header"
                  style={{ cursor: "pointer" }}
                >
                  Glasgow Coma Scale-info
                </h3>
                {open === 1 && (
                  <div>
                    <div class="ui two column grid">
                      <div class="column">
                        <label>Eye Opening</label>
                      </div>

                      <div class=" four wide column">
                        <Field name="eye1" component="select">
                          <option selected>Please Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </Field>
                      </div>

                      <div class="column"></div>
                      <div class="column"></div>
                    </div>

                    <div class="ui two column grid">
                      <div class="column">
                        <label>Eye Opening</label>
                      </div>
                      <div class=" four wide column">
                        <Field name="eye2" component="select">
                          <option selected>Please Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </Field>
                      </div>

                      <div class="column"></div>
                      <div class="column"></div>
                    </div>

                    <div class="ui two column grid">
                      <div class="column">
                        <label>Eye Opening</label>
                      </div>
                      <div class=" four wide column">
                        <Field name="eye3" component="select">
                          <option selected>Please Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </Field>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="ui center aligned segment">
                <h3
                  onClick={() => setOpen(2)}
                  className="ui left aligned dividing header"
                  style={{ cursor: "pointer" }}
                >
                  Neuro Dynamic Test
                </h3>
                {open === 2 && (
                  <div>
                    <table
                      class="table table-striped table-bordered"
                      id="advancedDataTable"
                    >
                      <tbody>
                        <tr>
                          <td class="text-center"></td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <center>Left </center>
                          </td>
                          <td class="text-center">
                            <center>Right</center>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Ulnar</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="ulnarl">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="ulnarR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Radial</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="radiall">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="radialR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Median</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="medianl">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="medianR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Musculocutaneous</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="musculocutaneousl">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="musculocutaneousR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Sciatic</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="sciaticl">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="sciaticR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Tibial</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="tibiall">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="tibialR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Comman peronial</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="commanperoniall">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="commanperonialR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Femoral</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="femorall">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="femoralR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Lateral cutaneous</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="lateralcutaneousl">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="lateralcutaneousR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Obturator</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="obturatorl">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="obturatorR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Sural</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="surall">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="suralR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              <div className="ui center aligned segment">
                <h3
                  onClick={() => setOpen(3)}
                  className="ui left aligned dividing header"
                  style={{ cursor: "pointer" }}
                >
                  Special Test Info
                </h3>
                {open === 3 && (
                  <div>
                    <div className="ui two column grid">
                      <div className="column">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                          </div>
                          <Field name="info1">
                            {({ input, meta }) => (
                              <input type="text" {...input} />
                            )}
                          </Field>
                        </div>
                      </div>
                      <div className="column">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                          </div>

                          <Field name="info2">
                            {({ input, meta }) => (
                              <input type="text" {...input} />
                            )}
                          </Field>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="ui center aligned segment">
                <h3
                  onClick={() => setOpen(4)}
                  className="ui left aligned dividing header"
                  style={{ cursor: "pointer" }}
                >
                  ADL score.functional Assessment
                </h3>
                {open === 4 && (
                  <div>
                    <div>
                      <div className="ui two column grid">
                        <div className="column">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">@</span>
                            </div>
                            <Field name="score1">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </div>
                        </div>
                        <div className="column">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">@</span>
                            </div>
                            <Field name="score2">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="ui center aligned segment">
                <h3
                  onClick={() => setOpen(5)}
                  className="ui left aligned dividing header"
                  style={{ cursor: "pointer" }}
                >
                  Neural Tissue Palpation
                </h3>
                {open === 5 && (
                  <div>
                    <table
                      class="table table-striped table-bordered"
                      id="advancedDataTable"
                    >
                      <tbody>
                        <tr>
                          <td class="text-center"></td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <center>Left</center>
                          </td>
                          <td class="text-center">
                            <center>Right</center>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Ulnar</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="ulnarrl">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="ulnarrR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Radial</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="radialll">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="radiallR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Median</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="mediannl">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="mediannR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Sciatic</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="sciaticcl">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="sciaticcR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Tibial</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="tibialll">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="tibiallR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">peronial</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="peronialll">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="peroniallR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Comman peronial</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="commanperonialll">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="commanperoniallR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Femoral</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="femoralll">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="femorallR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Lateral cutaneous</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <Field name="lateralcutaneoussl">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                          <td class="text-center">
                            <Field name="lateralcutaneoussR">
                              {({ input, meta }) => (
                                <input type="text" {...input} />
                              )}
                            </Field>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              <div className="ui center aligned segment">
                <h3
                  onClick={() => setOpen(6)}
                  className="ui left aligned dividing header"
                  style={{ cursor: "pointer" }}
                >
                  Co-ordination test
                </h3>
                {open === 6 && (
                  <div>
                    <div class="card-body">
                      <div class="table-responsive media-body">
                        <label>Finger To Nose</label>
                        <table
                          class="table table-striped table-bordered"
                          id="advancedDataTable"
                        >
                          <tbody>
                            <tr>
                              <td class="text-center">
                                Time Taken to Complete the Activity :
                              </td>
                              <td class="text-center"></td>
                              <td class="text-center">
                                <Field name="time">
                                  {({ input, meta }) => (
                                    <input type="text" {...input} />
                                  )}
                                </Field>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">
                                Speed at which the Activity is Performed :
                              </td>
                              <td class="text-center"></td>
                              <td class="text-center">
                                <Field name="speed">
                                  {({ input, meta }) => (
                                    <input type="text" {...input} />
                                  )}
                                </Field>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">No. of Error Made :</td>
                              <td class="text-center"></td>
                              <td class="text-center">
                                <Field name="error">
                                  {({ input, meta }) => (
                                    <input type="text" {...input} />
                                  )}
                                </Field>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <br />
                      <br />
                      <div class="table-responsive media-body">
                        <label>
                          Aternating Supination - pronation movement
                        </label>
                        <table
                          class="table table-striped table-bordered"
                          id="advancedDataTable"
                        >
                          <tbody>
                            <tr>
                              <td class="text-center">
                                Time Taken to Complete the Activity :
                              </td>
                              <td class="text-center"></td>
                              <td class="text-center">
                                <Field name="time1">
                                  {({ input, meta }) => (
                                    <input type="text" {...input} />
                                  )}
                                </Field>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">
                                Speed at which the Activity is Performed :
                              </td>
                              <td class="text-center"></td>
                              <td class="text-center">
                                <Field name="speed1">
                                  {({ input, meta }) => (
                                    <input type="text" {...input} />
                                  )}
                                </Field>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">No. of Error Made :</td>
                              <td class="text-center"></td>
                              <td class="text-center">
                                <Field name="error1">
                                  {({ input, meta }) => (
                                    <input type="text" {...input} />
                                  )}
                                </Field>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <br />
                      <br />
                      <div class="table-responsive media-body">
                        <label>Heel to Shin</label>
                        <table
                          class="table table-striped table-bordered"
                          id="advancedDataTable"
                        >
                          <tbody>
                            <tr>
                              <td class="text-center">
                                Time Taken to Complete the Activity :
                              </td>
                              <td class="text-center"></td>
                              <td class="text-center">
                                <Field name="time2">
                                  {({ input, meta }) => (
                                    <input type="text" {...input} />
                                  )}
                                </Field>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">
                                Speed at which the Activity is Performed :
                              </td>
                              <td class="text-center"></td>
                              <td class="text-center">
                                <Field name="speed2">
                                  {({ input, meta }) => (
                                    <input type="text" {...input} />
                                  )}
                                </Field>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">No. of Error Made :</td>
                              <td class="text-center"></td>
                              <td class="text-center">
                                <Field name="error2">
                                  {({ input, meta }) => (
                                    <input type="text" {...input} />
                                  )}
                                </Field>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <br />
                      <br />
                    </div>
                  </div>
                )}
              </div>
              <div className="ui center aligned segment">
                <h3
                  onClick={() => setOpen(7)}
                  className="ui left aligned dividing header"
                  style={{ cursor: "pointer" }}
                >
                  Gait and Balance Test
                </h3>
                {open === 7 && (
                  <div>
                    <div className="ui two column grid">
                      <div className="column">Gait level surface :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <Field name="gait" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Change in gait speed :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <Field name="change" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Gait level surface :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <Field name="gait1" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">
                        Gait with horizontal head turns :
                      </div>
                      <div className="column">
                        <div class=" four wide column">
                          <Field name="horizontal" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">
                        Gait with vertical head turns :
                      </div>
                      <div className="column">
                        <div class=" four wide column">
                          <Field name="vertical" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Gait and pivot turn :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <Field name="pivot" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Step over obstacle :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <Field name="over" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Step around obstacles :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <Field name="around" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Steps :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <Field name="steps" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="item">
                      <div className="ui four wide column">
                        
                        <label>Balance and Movement Analyzer</label>
                        
                      </div>
                      <Field name="balance">
                                  {({ input, meta }) => (
                                    <input type="text" {...input} />
                                  )}
                                </Field>

                      {/* <textarea rows="5"></textarea> */}
                     
                    </div>
                  
                  </div>
                )}
              </div>
              <div className="ui center aligned segment">
                <h3
                  onClick={() => setOpen(8)}
                  className="ui left aligned dividing header"
                  style={{ cursor: "pointer" }}
                >
                  Functional Testing
                </h3>
                {open === 8 && (
                  <div>
                    <div className="ui two column grid">
                      <div className="column">Bowels (preceding week) :</div>
                      <div className="column">
                        <div class=" four wide column">
                        <Field name="bowels" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Bladder (preceding week) :</div>
                      <div className="column">
                        <div class=" four wide column">
                        <Field name="bladder" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">
                        Grooming (preceding 24 - 48 hours) :
                      </div>
                      <div className="column">
                        <div class=" four wide column">
                        <Field name="grooming" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Toilet use :</div>
                      <div className="column">
                        <div class=" four wide column">
                        <Field name="toilet" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Feeding :</div>
                      <div className="column">
                        <div class=" four wide column">
                        <Field name="feeding" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Bathing :</div>
                      <div className="column">
                        <div class=" four wide column">
                        <Field name="bathing" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">
                        Transfer (from bed to chair and back) ::
                      </div>
                      <div className="column">
                        <div class=" four wide column">
                        <Field name="transfer" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Mobility :</div>
                      <div className="column">
                        <div class=" four wide column">
                        <Field name="mobility" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Dressing :</div>
                      <div className="column">
                        <div class=" four wide column">
                        <Field name="dressing" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Stairs :</div>
                      <div className="column">
                        <div class=" four wide column">
                        <Field name="stairs" component="select">
                            <option selected>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Field>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div style={{ textAlign: "center" }}>
                <button
                  // disabled={!_.isEmpty(errors) || submitting}
                  className="ui primary button"
                >
                  Save
                </button>
              </div>
            </form>
          )}
        </Form>
      </div>
    </BasicContainer>
  );
}

export default Neuro;