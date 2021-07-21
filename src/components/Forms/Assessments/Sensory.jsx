import React from "react";
import BasicContainer from "../../Container/BasicContainer";
import { Form, Field } from "react-final-form";
import { ButtonGroup, Button } from "@material-ui/core";

function Sensory() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };
  const [sensoryData, setSensoryData] = React.useState({
    c2: {},
    c3: {},
    c4: {},
    c5: {},
    c6: {},
    c7: {},
    c8: {},
    t1: {},
    t2: {},
    t4: {},
    t6: {},
    t10: {},
    t12: {},
    l2: {},
    l3: {},
    l4: {},
    l5: {},
    s1: {},
    s2: {},
    s5: {},
  });

  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  return (
    <BasicContainer>
      <Form onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit, form }) => (
          <div className="text-center">
            <form onSubmit={handleSubmit} className="ui form ">
              <div className="item">
                <label>Date</label>
                <Field name="date" type="date">
                  {({ input, meta }) => <input type="date" {...input} />}
                </Field>
              </div>
              <br />
              <br />
              <div>
                <table class="ui striped celled table">
                  <thead>
                    <tr>
                      <th className="collapsing">Nerve Root</th>
                      <th>Dermatome</th>
                      <th>Mayotome</th>
                      <th>Reflexes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>C2</td>
                      <td>
                        Occipital protuberance &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c2: { ...sensoryData.c2, 1: 1 },
                              });
                            }}
                            variant={
                              sensoryData.c2["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                          >
                            Intact{" "}
                          </Button>
                          <Button
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c2: { ...sensoryData.c2, 1: 2 },
                              });
                            }}
                            variant={
                              sensoryData.c2["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td data-label="Job">
                        Neck Muscles&nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.c2["2"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c2: { ...sensoryData.c2, 2: 1 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.c2["2"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c2: { ...sensoryData.c2, 2: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>C3</td>
                      <td>
                        Supraclavicular fossa &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.c3["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c3: { ...sensoryData.c3, 1: 1 },
                              });
                            }}
                          >
                            Intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.c3["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c3: { ...sensoryData.c3, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Neck Lateral flexionlar joint &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.c3["2"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c3: { ...sensoryData.c3, 2: 1 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.c3["2"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c3: { ...sensoryData.c3, 2: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td data-label="Name">C4</td>
                      <td>
                        Acromioclavicular joint &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.c4["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c4: { ...sensoryData.c4, 1: 1 },
                              });
                            }}
                          >
                            Intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.c4["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c4: { ...sensoryData.c4, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Shoulder Elevation &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.c4["2"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c4: { ...sensoryData.c4, 2: 1 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.c4["2"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c4: { ...sensoryData.c4, 2: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td data-label="Name">C5</td>
                      <td>
                        Antecubital Fossa &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.c5["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c5: { ...sensoryData.c5, 1: 1 },
                              });
                            }}
                          >
                            Intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.c5["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c5: { ...sensoryData.c5, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Shoulder Abduction &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.c5["2"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c5: { ...sensoryData.c5, 2: 1 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.c5["2"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c5: { ...sensoryData.c5, 2: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Biceps, Brachioradialis &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.c5["3"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c5: { ...sensoryData.c5, 3: 1 },
                              });
                            }}
                          >
                            Absent
                          </Button>
                          <Button
                            variant={
                              sensoryData.c5["3"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c5: { ...sensoryData.c5, 3: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                          <Button
                            variant={
                              sensoryData.c5["3"] === 3
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c5: { ...sensoryData.c5, 3: 3 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.c5["3"] === 4
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c5: { ...sensoryData.c5, 3: 4 },
                              });
                            }}
                          >
                            Exaggerated
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Name">C6</td>
                      <td>
                        Thumb &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.c6["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c6: { ...sensoryData.c6, 1: 1 },
                              });
                            }}
                          >
                            Intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.c6["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c6: { ...sensoryData.c6, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Biceps, Supinator, Wrist extensors &nbsp;&nbsp;
                        &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.c6["2"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c6: { ...sensoryData.c6, 2: 1 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.c6["2"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c6: { ...sensoryData.c6, 2: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Biceps, Brachioradialis &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.c6["3"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c6: { ...sensoryData.c6, 3: 1 },
                              });
                            }}
                          >
                            Absent
                          </Button>
                          <Button
                            variant={
                              sensoryData.c6["3"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c6: { ...sensoryData.c6, 3: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                          <Button
                            variant={
                              sensoryData.c6["3"] === 3
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c6: { ...sensoryData.c6, 3: 3 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.c6["3"] === 4
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c6: { ...sensoryData.c6, 3: 4 },
                              });
                            }}
                          >
                            Exaggerated
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Name">C7</td>
                      <td>
                        Middle finger &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.c7["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c7: { ...sensoryData.c7, 1: 1 },
                              });
                            }}
                          >
                            Intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.c7["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c7: { ...sensoryData.c7, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Wrist flexors, Triceps &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.c7["2"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c7: { ...sensoryData.c7, 2: 1 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.c7["2"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c7: { ...sensoryData.c7, 2: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Triceps &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.c7["3"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c7: { ...sensoryData.c7, 3: 1 },
                              });
                            }}
                          >
                            Absent
                          </Button>
                          <Button
                            variant={
                              sensoryData.c7["3"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c7: { ...sensoryData.c7, 3: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                          <Button
                            variant={
                              sensoryData.c7["3"] === 3
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c7: { ...sensoryData.c7, 3: 3 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.c7["3"] === 4
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c7: { ...sensoryData.c7, 3: 4 },
                              });
                            }}
                          >
                            Exaggerated
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Name">C8</td>
                      <td>
                        Little Finger &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.c8["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c8: { ...sensoryData.c8, 1: 1 },
                              });
                            }}
                          >
                            Intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.c8["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c8: { ...sensoryData.c8, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Thumb extensors and adductors, ulnar deviators
                        &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.c8["2"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c8: { ...sensoryData.c8, 2: 1 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.c8["2"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c8: { ...sensoryData.c8, 2: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Triceps &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.c8["3"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c8: { ...sensoryData.c8, 3: 1 },
                              });
                            }}
                          >
                            Absent
                          </Button>
                          <Button
                            variant={
                              sensoryData.c8["3"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c8: { ...sensoryData.c8, 3: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                          <Button
                            variant={
                              sensoryData.c8["3"] === 3
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c8: { ...sensoryData.c8, 3: 3 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.c8["3"] === 4
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                c8: { ...sensoryData.c8, 3: 4 },
                              });
                            }}
                          >
                            Exaggerated
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>T1</td>
                      <td>
                        Medial side antecubital fossa &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.t1["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                t1: { ...sensoryData.t1, 1: 1 },
                              });
                            }}
                          >
                            Intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.t1["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                t1: { ...sensoryData.t1, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>T2</td>
                      <td>
                        Apex of axilla&nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.t2["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                t2: { ...sensoryData.t2, 1: 1 },
                              });
                            }}
                          >
                            Intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.t2["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                t2: { ...sensoryData.t2, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>T4</td>
                      <td>
                        Nipples &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.t4["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                t4: { ...sensoryData.t4, 1: 1 },
                              });
                            }}
                          >
                            Intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.t4["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                t4: { ...sensoryData.t4, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>T6</td>
                      <td>
                        Xiphisternum &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.t6["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                t6: { ...sensoryData.t6, 1: 1 },
                              });
                            }}
                          >
                            Intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.t6["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                t6: { ...sensoryData.t6, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>T10</td>
                      <td>
                        Umbilicus &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.t10["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                t10: { ...sensoryData.t10, 1: 1 },
                              });
                            }}
                          >
                            Intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.t10["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                t10: { ...sensoryData.t10, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>T12</td>
                      <td>
                        Midpoint of the inguinal ligament &nbsp;&nbsp;
                        &nbsp;&nbsp;
                        <br /> <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.t12["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                t12: { ...sensoryData.t12, 1: 1 },
                              });
                            }}
                          >
                            Intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.t12["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                t12: { ...sensoryData.t12, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>{" "}
                    <tr>
                      <td>L2</td>
                      <td>
                        Mid-anterior thigh &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.l2["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l2: { ...sensoryData.l2, 1: 1 },
                              });
                            }}
                          >
                            Intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.l2["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l2: { ...sensoryData.l2, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Hip Flexion &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.l2["2"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l2: { ...sensoryData.l2, 2: 1 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.l2["2"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l2: { ...sensoryData.l2, 2: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Patellar (L2,L4) &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.l2["3"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l2: { ...sensoryData.l2, 3: 1 },
                              });
                            }}
                          >
                            Absent
                          </Button>
                          <Button
                            variant={
                              sensoryData.l2["3"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l2: { ...sensoryData.l2, 3: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                          <Button
                            variant={
                              sensoryData.l2["3"] === 3
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l2: { ...sensoryData.l2, 3: 3 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.l2["3"] === 4
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l2: { ...sensoryData.l2, 3: 4 },
                              });
                            }}
                          >
                            Exaggerated
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>L3</td>
                      <td>
                        Medial epicondyle of the femur &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.l3["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l3: { ...sensoryData.l3, 1: 1 },
                              });
                            }}
                          >
                            intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.l3["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l3: { ...sensoryData.l3, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Knee extension&nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.l3["2"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l3: { ...sensoryData.l3, 2: 1 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.l3["2"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l3: { ...sensoryData.l3, 2: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Pain with SLR &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.l3["3"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l3: { ...sensoryData.l3, 3: 1 },
                              });
                            }}
                          >
                            Absent
                          </Button>
                          <Button
                            variant={
                              sensoryData.l3["3"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l3: { ...sensoryData.l3, 3: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                          <Button
                            variant={
                              sensoryData.l3["3"] === 3
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l3: { ...sensoryData.l3, 3: 3 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.l3["3"] === 4
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l3: { ...sensoryData.l3, 3: 4 },
                              });
                            }}
                          >
                            Exaggerated
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>L4</td>
                      <td>
                        Medial malleolus &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.l4["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l4: { ...sensoryData.l4, 1: 1 },
                              });
                            }}
                          >
                            Intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.l4["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l4: { ...sensoryData.l4, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Ankle dorsi flexion &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.l4["2"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l4: { ...sensoryData.l4, 2: 1 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.l4["2"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l4: { ...sensoryData.l4, 2: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>L5</td>
                      <td>
                        Dorsum of foot @ 3rd MTP &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.l5["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l5: { ...sensoryData.l5, 1: 1 },
                              });
                            }}
                          >
                            Intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.l5["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l5: { ...sensoryData.l5, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Extensor Hallucis, peroneals, Glut. med, DF's, hamstring
                        and calf&nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.l5["2"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l5: { ...sensoryData.l5, 2: 1 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.l5["2"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                l5: { ...sensoryData.l5, 2: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>S1</td>
                      <td>
                        Lateral heel &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.s1["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s1: { ...sensoryData.s1, 1: 1 },
                              });
                            }}
                          >
                            Intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.s1["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s1: { ...sensoryData.s1, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Ankle plantar flexion&nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.s1["2"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s1: { ...sensoryData.s1, 2: 1 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.s1["2"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s1: { ...sensoryData.s1, 2: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Limited SLR, Achilles reflex &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.s1["3"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s1: { ...sensoryData.s1, 3: 1 },
                              });
                            }}
                          >
                            Absent
                          </Button>
                          <Button
                            variant={
                              sensoryData.s1["3"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s1: { ...sensoryData.s1, 3: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                          <Button
                            variant={
                              sensoryData.s1["3"] === 3
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s1: { ...sensoryData.s1, 3: 3 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.s1["3"] === 4
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s1: { ...sensoryData.s1, 3: 4 },
                              });
                            }}
                          >
                            Exaggerated
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>S2</td>
                      <td>
                        Popliteal fossa &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.s2["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s2: { ...sensoryData.s2, 1: 1 },
                              });
                            }}
                          >
                            Intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.s2["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s2: { ...sensoryData.s2, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Knee flexion&nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.s2["2"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s2: { ...sensoryData.s2, 2: 1 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.s2["2"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s2: { ...sensoryData.s2, 2: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Limited SLR, Achilles reflex&nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.s2["3"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s2: { ...sensoryData.s2, 3: 1 },
                              });
                            }}
                          >
                            Absent
                          </Button>
                          <Button
                            variant={
                              sensoryData.s2["3"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s2: { ...sensoryData.s2, 3: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                          <Button
                            variant={
                              sensoryData.s2["3"] === 3
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s2: { ...sensoryData.s2, 3: 3 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.s2["3"] === 4
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s2: { ...sensoryData.s2, 3: 4 },
                              });
                            }}
                          >
                            Exaggerated
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>S5</td>
                      <td>
                        Perianal &nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.s5["1"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s5: { ...sensoryData.s5, 1: 1 },
                              });
                            }}
                          >
                            Intact
                          </Button>
                          <Button
                            variant={
                              sensoryData.s5["1"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s5: { ...sensoryData.s5, 1: 2 },
                              });
                            }}
                          >
                            Impaired
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        Bladder, Rectum&nbsp;&nbsp; &nbsp;&nbsp;
                        <br />
                        <br />
                        <ButtonGroup color="primary">
                          <Button
                            variant={
                              sensoryData.s5["2"] === 1
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s5: { ...sensoryData.s5, 2: 1 },
                              });
                            }}
                          >
                            Normal
                          </Button>
                          <Button
                            variant={
                              sensoryData.s5["2"] === 2
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => {
                              setSensoryData({
                                ...sensoryData,
                                s5: { ...sensoryData.s5, 2: 2 },
                              });
                            }}
                          >
                            Weak
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <br />
              <div style={{ textAlign: "center" }}>
                <button
                  // disabled={!_.isEmpty(errors) || submitting}
                  className="ui primary button"
                >
                  Save
                </button>
                <button
                  // disabled={!_.isEmpty(errors) || submitting}
                  className="ui button"
                  type="reset"
                  // onClick={form.reset}
                >
                  Discard
                </button>
              </div>
            </form>
          </div>
        )}
      </Form>
    </BasicContainer>
  );
}

export default Sensory;
