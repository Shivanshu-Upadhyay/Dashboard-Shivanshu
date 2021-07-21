import React from "react";

import "./index.css";
import { Form, Field } from "react-final-form";

import SaveIcon from '@material-ui/icons/Save';
import {Table} from 'react-bootstrap'

import NewSlider from "../Assessments/NewSlider";
import { addKneeData } from "../../../actions/kneeAction";
import { connect } from "react-redux";

import {
  Typography,
  Paper,
  Checkbox,
  Link,
  Grid,
  Button,
  RadioGroup,
  FormLabel,
  FormGroup,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import { TextField, Checked, Radio, Select } from "final-form-material-ui";




function Knee(props) {
  const onSubmit = (formValues) => {
    const data = {
      name: formValues.name,
      assessmentDate: formValues.assessmentDate,
      age: formValues.age,
      gender: formValues.gender,
      patientId: formValues.patientId,
      admissionDate: formValues.admissionDate,
      occupation: formValues.occupation,
      surgeryDate: formValues.surgeryDate,
      ward: formValues.ward,
      chiefComplaints: formValues.chiefComplaints,
      procedure: formValues.procedure,
      painOnset: formValues.painOnset,
      injury: formValues.injury,
      adlLimitations: formValues.adlLimitations,
      warmth: formValues.warmth,
      swelling: formValues.swelling,
      skinChanges: formValues.skinChanges,
      muscleAtrophy: formValues.muscleAtrophy,
      muscleTightness: formValues.muscleTightness,
      patellarTracking: formValues.patellarTracking,
      tenderness: formValues.tenderness,
      crepitus: formValues.crepitus,
      stiffness: formValues.stiffness,
      locking: formValues.locking,
      givingAway: formValues.givingAway,
      painIntensity: formValues.painIntensity,
      painDuration: formValues.painDuration,
      painSite: formValues.painSite,
      painType: formValues.painType,
      painNature: formValues.painNature,
      aggrevatingFactors: formValues.aggrevatingFactors,
      relievingFactors: formValues.relievingFactors,
      flexion: {
        left: {
          mmt: formValues.o,
          active: formValues.p,
          passive: formValues.q
        },
        right: {
          mmt: formValues.r,
          active: formValues.rxx,
          passive: formValues.rxy
        },
      },
      extension: {
        left: {
          mmt: formValues.oa,
          active: formValues.pa,
          passive: formValues.qa
        },
        right: {
          mmt: formValues.ra,
          active: formValues.ray,
          passive: formValues.rax
        },
      },
      hip: {
        left: {
          mmt: formValues.ob,
          active: formValues.pb,
          passive: formValues.qb
        },
        right: {
          mmt: formValues.rb,
          active: formValues.rbx,
          passive: formValues.rby
        },
      },
      ankle: {
        left: {
          mmt: formValues.oc,
          active: formValues.pc,
          passive: formValues.qc
        },
        right: {
          mmt: formValues.rc,
          active: formValues.rcx,
          passive: formValues.rcy
        }
      },

      anteriosDrawerTest: {
        left: formValues['Anterios Drawes Test'],
        right: formValues['Anterios Drawes Test2']
      },
      posteriorDrawerTest: {
        left: formValues['Posterior Drawer Test'],
        right: formValues['Posterior Drawer Test2']
      },
      mcMurraysTest: {
        left: formValues['Mc Murrays Test'],
        right: formValues['Mc Murrays Test2']
      },
      varusStressTest: {
        left: formValues['Varus Stress Test'],
        right: formValues['Varus Stress Test1']
      },
      valgusStressTest: {
        left: formValues['Valgus Stress Test'],
        right: formValues['Valgus Stress Test2']
      },
      lachmanTest: {
        left: formValues['Lachman Test'],
        right: formValues['Lachman Test3']
      },
      pivotShift: {
        left: formValues['Pivot Shift'],
        right: formValues['Pivot Shift4']
      },
      poplitealTest: {
        left: formValues['Popliteol Test'],
        right: formValues['Popliteol Test5']
      },
      patellarGlide: {
        left: formValues['Patellar Glide'],
        right: formValues['Patellar Glide4']
      },
      investigation: formValues.investigation,
      diagnosis: formValues.diagnosis,
      treatmentGoal: formValues.treatmentGoal,
      treatmentPlan: formValues.treatmentPlan
    };

    console.log(data)

    props.addKneeData(data);

  }; 




  return (
    <div >
      <h3 className="text-center"> KNEE JOINT EVALUATION</h3>

      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 25 }}>
              <Grid container spacing={2}>
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="assessmentDate">
                      {({ input }) => (
                        <div className="mb-3">
                          <label className=" ">Date Of Assessment-</label>
                          <input type="date" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="patientid">
                      {({ input }) => (
                        <div className="cardio">
                          <label>Patient ID-</label>
                          <input type="number" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>


              <Grid container spacing={2} className='mb-2'>
                <Grid item md={3} xs={12}>
                  <div>
                    <Field name="name">
                      {({ input }) => (
                        <div className="upname ">
                          <label className="name">Name-</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={2} xs={12}>
                  <div>
                    <Field name="age">
                      {({ input }) => (
                        <div className="">
                          <label className="age">Age-</label>

                          <input type="text" {...input} placeholder="" className='w50' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={3} xs={12}>
                  <div className="">
                    <label>Gender-</label>

                    <label className='p-1 bold1'>
                      M:<Field name="gender" type="radio" value="M" component="input" />
                    </label>

                    <label className='p-1 bold1'>
                      F:<Field name="gender" type="radio" value="F" component="input" />
                    </label>

                    <label className='p-1 bold1'>
                      O:<Field name="gender" type="radio" value="O" component="input" />
                    </label>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="occupation">
                      {({ input }) => (
                        <div className="upname ">
                          <label className="name">Occupation-</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              </Grid>




              <Grid container className='mb-3'>

                <Grid item xs={12}>

                  <div>
                    <Field name="address">
                      {({ input }) => (
                        <div className="fullw100 ">
                          <label className="name">Address:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>





              <Grid container spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="admissionDate">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Date Of Admission:</label>
                          <input type="date" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="surgeryDate">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Date of Surgery:</label>

                          <input type="date" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="ward">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">WARD:</label>

                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>






              <Grid container className='mb-3'>

                <Grid item md={6} xs={12}>

                  <div>
                    <Field name="chiefComplaints">
                      {({ input }) => (
                        <div className="fullw10  ">
                          <label className="">Chief Complaints:</label>
                          <textarea
                            className="wnew"

                            {...input}
                          ></textarea>
                        </div>
                      )}
                    </Field>
                  </div>

                </Grid>



                <Grid item md={6} xs={12}>

                  <div>
                    <Field name="procedure
                    ">
                      {({ input }) => (
                        <div className="fullw10  ">
                          <label className="name">Surgery/Procedure:</label>
                          <textarea
                            className="wnew"

                            {...input}
                          ></textarea>
                        </div>
                      )}
                    </Field>
                  </div>

                </Grid>

              </Grid>



              <div className='mb-3'> <h4><u>MECHANISM OF PAIN</u></h4>  </div>

              <Grid container spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <label>Pain Onset-</label>
                    <Field name="painOnset" component="select">
                      <option />
                      <option value="graduol">Gradual</option>
                      <option value="sudden"> Sudden</option>

                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <label>Injury-</label>
                    <Field name="injury" component="select">
                      <option />
                      <option value="Traumatic">Traumatic</option>
                      <option value="Atraumatic"> Atraumatic</option>

                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="adlLimitations">
                      {({ input }) => (
                        <div className="">
                          <label className="">Limitations of ADLs-</label>

                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>




              <div className='mb-3'> <h4><u>BODY CHART</u></h4>  </div>
              <Grid container className='mb-3'>

                <Grid item md={12} xs={12}>

                  <div>
                    <Field name="body chart">
                      {({ input }) => (
                        <div className=" ">

                          <textarea
                            className="bodychart"

                            {...input}
                          ></textarea>
                        </div>
                      )}
                    </Field>
                  </div>

                </Grid>

              </Grid>


              <div className='mb-3'> <h4><u>ON OBSERVATION</u></h4>  </div>




              <Grid container spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <label>Warmth-</label>
                    <Field name="warmth" component="select">
                      <option />
                      <option value="wleft">Left</option>
                      <option value="wright"> Right</option>
                      <option value="wbilateral"> Bilateral</option>

                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <label>Swelling-</label>
                    <Field name="swelling" component="select">
                      <option />
                      <option value="sleft">Left</option>
                      <option value="sright"> Right</option>
                      <option value="sbilateral"> Bilateral</option>

                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="skinChanges">
                      {({ input }) => (
                        <div className="">
                          <label className="">Skin Changes-</label>

                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>



              <Grid container spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="muscleAtrophy">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Muscle Atrophy:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="muscleTightness">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Muscle Tightness:</label>

                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="patellarTracking">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Patellar Tracking:</label>

                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>



              <div className='mb-3'> <h4><u>ON PALPATION</u></h4>  </div>




              <Grid container spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <label>Tenderness-</label>
                    <Field name="tenderness" component="select">
                      <option />
                      <option value="teleft">Left</option>
                      <option value="teight"> Right</option>
                      <option value="teilateral"> Bilateral</option>

                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <label>Crepitus-</label>
                    <Field name="crepitus" component="select">
                      <option />
                      <option value="crleft">Left</option>
                      <option value="cright"> Right</option>
                      <option value="crbilateral"> Bilateral</option>

                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <label>Stiffness-</label>
                    <Field name="stiffness" component="select">
                      <option />
                      <option value="sileft">Left</option>
                      <option value="siright"> Right</option>
                      <option value="sibilateral"> Bilateral</option>

                    </Field>
                  </div>
                </Grid>
              </Grid>



              <Grid container spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <label>Locking-</label>
                    <Field name="locking" component="select">
                      <option />
                      <option value="loleft">Left</option>
                      <option value="loight"> Right</option>
                      <option value="loilateral"> Bilateral</option>

                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <label>Giving Away-</label>
                    <Field name="givingAway" component="select">
                      <option />
                      <option value="gileft">Left</option>
                      <option value="giight"> Right</option>
                      <option value="gibilateral"> Bilateral</option>

                    </Field>
                  </div>
                </Grid>

              </Grid>



              <div className='mb-3'> <h4><u>PAIN EVALUATION</u></h4>  </div>


              {/* ++++++++++++++++++++++++++++++++= */}

              <Grid container spacing={2} className='mb-3'>
                <Grid item md={12} xs={12}>
                  <div className=''>
                    <h6 className='text-center'>Intensity of Pain</h6>
                    <NewSlider />
                  </div>
                </Grid>
              </Grid>


              {/* ++++++++++++++++++++++++++++++++= */}





              <Grid container spacing={2} className='mb-3'>
                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="painDuration">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Duration Of Pain:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="painSite">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Site Of Pain:</label>

                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              </Grid>





              <Grid container spacing={2} className='mb-3'>
                <Grid item md={6} xs={12}>
                  <div>
                    <label>Pain Type-</label>
                    <Field name="painType" component="select">
                      <option />
                      <option value="Constant">Constant</option>
                      <option value="Internittent"> Intermittent</option>


                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <label>Nature Of Pain-</label>
                    <Field name="painNature" component="select">
                      <option />
                      <option value="Dull">Dull Ache</option>
                      <option value="Sharp"> Sharp Shooting</option>
                      <option value="Throbbing"> Throbbing</option>
                      <option value="Radiating">Radiating</option>
                      <option value="Moving"> Moving</option>
                      <option value="Static"> Static</option>
                      <option value="Other"> Others</option>

                    </Field>
                  </div>
                </Grid>

              </Grid>



              <Grid container spacing={2} className='mb-3'>
                <Grid item md={6} xs={12}>
                  <div>
                    <label>Aggravating Factors-</label>
                    <Field name="aggrevatingFactors" component="select">
                      <option />
                      <option value="CoWalk">Walk</option>
                      <option value="Up/Down Stairs"> Up/Down Stairs</option>
                      <option value="Sports">Sports</option>
                      <option value="Stand"> Stand</option>
                      <option value="Sit To Stand">Sit To Stand</option>
                      <option value="Any Activity"> Any Activity</option>
                      <option value="Others1"> Others</option>


                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <label>Relieving Factors-</label>
                    <Field name="relievingFactors" component="select">
                      <option />
                      <option value="Rest">Rest</option>
                      <option value="Positioning"> Positioning</option>
                      <option value="Heat Therapy"> Heat Therapy</option>
                      <option value="Icing">Icing</option>
                      <option value="Medicines"> Medicines</option>

                      <option value="Other2"> Others</option>

                    </Field>
                  </div>
                </Grid>

              </Grid>














              {/* +++++++++++++++++++Table1+++++++++++++++++++++++++++ */}



              <div className='mb-5'></div>
              <Grid container className='mb-3'>
                <Grid item xs={12}>

                  <div>
                          <div className="">

                            <h4> <u >RANGE OF MOTION</u> </h4>

                            <br />
                            <Table striped bordered hover>
                              <thead>
                                <tr>
                                  <th className='text-center pb-4' rowSpan='2'> <h5>MOVEMENTS</h5> </th>
                                  <th colSpan='3' className='text-center'>LEFT</th>
                                  <th colSpan='3' className='text-center' >RIGTH</th>


                                </tr>


                                <tr>

                                  <th>
                                    MMT(STRENGTH)
                    </th>

                                  <th>
                                    ACTIVE(ROM)
                    </th>
                                  <th>
                                    PASSIVE(ROM)
                    </th>

                                  <th>
                                    MMT(STRENGTH)
                    </th>

                                  <th>
                                    ACTIVE(ROM)
                    </th>
                                  <th>
                                    PASSIVE(ROM)
                    </th>
                                </tr>
                                <tr>
                                  <th scope="row">Flexion</th>

                                  <th>
                                    <Field name="o">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="p">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="q">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="r">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                  <th>
                                    <Field name="rxx">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                  <th>
                                    <Field name="rxy">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                </tr>



                                <tr>
                                  <th scope="row">Extension</th>

                                  <th>
                                    <Field name="oa">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="pa">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="qa">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="ra">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                  <th>
                                    <Field name="ray">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                  <th>
                                    <Field name="rax">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                </tr>



                                <tr>
                                  <th scope="row">Hip</th>

                                  <th>
                                    <Field name="ob">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="pb">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="qb">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="rb">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                  <th>
                                    <Field name="rbx">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                  <th>
                                    <Field name="rby">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                </tr>



                                <tr>
                                  <th scope="row">Ankle</th>

                                  <th>
                                    <Field name="oc">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="pc">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="qc">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="rc">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                  <th>
                                    <Field name="rcx">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>


                                  <th>
                                    <Field name="rcy">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                </tr>




                              </thead>



                            </Table>
                          </div>
                        </div>
                </Grid>
              </Grid>




              {/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}




              <div className='mb-3'> <h4><u>SPECIAL TEST</u></h4>  </div>











              <Grid container spacing={2} className=''>
                <Grid item md={4} xs={12}>
                  <div>
                    <h6 className=''> <u>TEST NAME</u> </h6>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <h6 className=''>LEFT</h6>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <h6 className='text-center'>RIGHT</h6>
                  </div>
                </Grid>
              </Grid>






              <Grid container spacing={2} className='mb-3'>
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="Anterios Drawes Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Anterios Drawer Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Anterios Drawes Test2">
                      {({ input }) => (
                        <div >



                          <input type="text" {...input} placeholder="" className='newinput ml-5' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              </Grid>




              <Grid container spacing={2} className='mb-3'>
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="Posterior Drawer Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Posterior Drawer Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Posterior Drawer Test2">
                      {({ input }) => (
                        <div >



                          <input type="text" {...input} placeholder="" className='newinput ml-5' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              </Grid>




              <Grid container spacing={2} className='mb-3'>
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="Mc Murrays Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Mc Murrays Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Mc Murrays Test2">
                      {({ input }) => (
                        <div >



                          <input type="text" {...input} placeholder="" className='newinput ml-5' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              </Grid>




              <Grid container spacing={2} className='mb-3'>
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="Varus Stress Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Varus Stress Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Varus Stress Test1">
                      {({ input }) => (
                        <div >



                          <input type="text" {...input} placeholder="" className='newinput ml-5' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              </Grid>




              <Grid container spacing={2} className='mb-3'>
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="Valgus Stress Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Valgus Stress Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Valgus Stress Test2">
                      {({ input }) => (
                        <div >



                          <input type="text" {...input} placeholder="" className='newinput ml-5' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              </Grid>




              <Grid container spacing={2} className='mb-3'>
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="Lachman Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Lachman Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Lachman Test3">
                      {({ input }) => (
                        <div >



                          <input type="text" {...input} placeholder="" className='newinput ml-5' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              </Grid>




              <Grid container spacing={2} className='mb-3'>
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="Pivot Shift">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Pivot Shift-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Pivot Shift4">
                      {({ input }) => (
                        <div >



                          <input type="text" {...input} placeholder="" className='newinput ml-5' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              </Grid>




              <Grid container spacing={2} className='mb-3'>
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="Popliteol Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Popliteal Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Popliteol Test5">
                      {({ input }) => (
                        <div >



                          <input type="text" {...input} placeholder="" className='newinput ml-5' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              </Grid>




              <Grid container spacing={2} className='mb-3'>
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="Patellar Glide">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Patellar Glide-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Patellar Glide4">
                      {({ input }) => (
                        <div >



                          <input type="text" {...input} placeholder="" className='newinput ml-5' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              </Grid>











              <Grid container className='mb-3' spacing={2}>
                <Grid item md={12} xs={12}>
                  <div>
                    <Field name="inverstigation">
                      {({ input }) => (
                        <div className="">
                          <label className="widthsame bold">INVESTIGATION-</label>
                          <input type="text" {...input} placeholder="" className='lastw' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={12} xs={12}>
                  <div>
                    <Field name="diagnosis">
                      {({ input }) => (
                        <div className=" ">
                          <label className="widthsame bold">DIAGNOSIS-</label>
                          <input type="text" {...input} placeholder="" className='lastw' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


                <Grid item md={12} xs={12}>
                  <div>
                    <Field name="TREATMENT GOAL">
                      {({ input }) => (
                        <div className="">
                          <label className="widthsame bold">TREATMENT GOAL-</label>
                          <input type="text" {...input} placeholder="" className='lastw' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


                <Grid item md={12} xs={12}>
                  <div>
                    <Field name="Treatment PLAN">
                      {({ input }) => (
                        <div className="">
                          <label className="widthsame bold">TREATMENT PLAN-</label>
                          <input type="text" {...input} placeholder="" className='lastw' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>





              </Grid>




              <div className='text-center'>  <Button
                variant="contained"
                color="primary"
                size="small"
                type='submit'
                startIcon={<SaveIcon />} >
                Save
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
      kneeData: state.kneeData,
  };
};

export default connect(mapStateToProps, { addKneeData })(Knee);