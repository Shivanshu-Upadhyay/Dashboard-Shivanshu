import React from "react";
import "./index.css";
import { Form, Field } from "react-final-form";

import SaveIcon from '@material-ui/icons/Save';
import {Table} from 'react-bootstrap'
import NewSlider from "../Assessments/NewSlider";


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


function Ankle() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };




  return (
    <div >
      <h3 className="text-center"> ANKLE & FOOT EVALUATION</h3>

      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 25 }}>
              <Grid container spacing={2}>
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="dateofassessment">
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
                      M:<Field name="Gender" type="radio" value="M" component="input" />
                    </label>

                    <label className='p-1 bold1'>
                      F:<Field name="Gender" type="radio" value="F" component="input" />
                    </label>

                    <label className='p-1 bold1'>
                      O:<Field name="Gender" type="radio" value="O" component="input" />
                    </label>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Occupation">
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
                    <Field name="dateofadmission">
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
                    <Field name="Date of Surgery">
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
                    <Field name="chief complaints">
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
                    <Field name="sur/pro
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
                    <Field name="painonset" component="select">
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
                    <Field name="Limitations of ADLs">
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


              <div className='mb-3'> <h4><u>EXAMINATION</u></h4>  </div>




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
                    <label>Bruises-</label>
                    <Field name="Bruises" component="select">
                      <option />
                      <option value="bruleft">Left</option>
                      <option value="bruright"> Right</option>
                      <option value="brubilateral"> Bilateral</option>

                    </Field>
                  </div>
                </Grid>
              </Grid>



              <Grid container spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Tenderness">
                      {({ input }) => (
                        <div className="">
                          <label className=" ">Tenderness-</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <label>Proprioception-</label>
                    <Field name="Proprioception" component="select">
                      <option />
                      <option value="propleft">Left</option>
                      <option value="propright"> Right</option>
                      <option value="propbilateral"> Bilateral</option>

                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>

                    <Field name="pro2" component="select">
                      <option />
                      <option value="normal">Normal</option>
                      <option value="absent"> Absent</option>


                    </Field>
                  </div>
                </Grid>
              </Grid>






              <div className='mb-3'> <h4><u>PAIN ASSESSMENT</u></h4>  </div>


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
                    <Field name="duration of pain">
                      {({ input }) => (
                        <div className="">
                          <label className=" ">Duration Of Pain-</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="Site Of Pain">
                      {({ input }) => (
                        <div className="">
                          <label className="">Site Of Pain-</label>

                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              </Grid>





              <Grid container spacing={2} className='mb-2'>
                <Grid item md={6} xs={12}>
                  <div>
                    <label>Pain Type-</label>
                    <Field name="Pain Type" component="select">
                      <option />
                      <option value="Constant">Constant</option>
                      <option value="Internittent"> Intermittent</option>


                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <label>Nature Of Pain-</label>
                    <Field name="Nature Of Pain" component="select">
                      <option />
                      <option value="Dull">Dull Ache</option>
                      <option value="Sharp"> Sharp Shooting</option>
                      <option value="Throbbing"> Throbbing</option>
                      <option value="Radiating">Radiating</option>
                      <option value="Moving"> Moving</option>
                      <option value="Static"> Static</option>
                      <option value="Other"> Other</option>

                    </Field>
                  </div>
                </Grid>

              </Grid>



              <Grid container spacing={2} className='mb-3'>
                <Grid item md={6} xs={12}>
                  <div>
                    <label>Aggravating Factors-</label>
                    <Field name="Aggravating Factors" component="select">
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
                    <Field name="Relieving Factors" component="select">
                      <option />
                      <option value="Rest">Rest</option>
                      <option value="Positioning"> Positioning</option>
                      <option value="Heat Therapy"> Heat Therapy</option>
                      <option value="Icing">Icing</option>
                      <option value="Medicines"> Medicines</option>

                      <option value="Other2"> Other</option>

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

                            <h4> <u>RANGE OF MOTION</u> </h4>

                            <br />
                            <Table striped bordered hover>
                              <thead>
                                <tr>
                                  <th className='text-center pb-4' rowSpan='2'> <h5>ROM</h5> </th>
                                  <th colSpan='2' className='text-center'>LEFT</th>
                                  <th colSpan='2' className='text-center' >RIGTH</th>


                                </tr>


                                <tr>

                                  <th>
                                    ACTIVE
                    </th>
                                  <th>
                                    PASSIVE
                    </th>
                                  <th>
                                    ACTIVE
                    </th>
                                  <th>
                                    PASSIVE
                    </th>

                                </tr>
                                <tr>
                                  <th scope="row">Dorsiflexion</th>

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

                                </tr>



                                <tr>
                                  <th scope="row">Plantorflexion</th>

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

                                </tr>



                                <tr>
                                  <th scope="row">Inversion</th>

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

                                </tr>



                                <tr>
                                  <th scope="row">Eversion</th>

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

                                </tr>



                                <tr>
                                  <th scope="row">Toe-Flexion</th>

                                  <th>
                                    <Field name="od">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="pd">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="qd">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="rd">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                </tr>




                                <tr>
                                  <th scope="row">Toe Extension</th>

                                  <th>
                                    <Field name="oe">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="pe">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="qe">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="re">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                </tr>




                                <tr>
                                  <th scope="row">Big Toe Flexion/Extension</th>

                                  <th>
                                    <Field name="of">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="pf">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="qf">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="rf">
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









              <div className='mb-3'> <h4><u>MUSCLE STRENGTH</u></h4>  </div>

              <Grid container spacing={2} className=''>
                <Grid item md={4} xs={12}>
                  <div>
                    <h6 className=''> <u>Movements</u> </h6>
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
                    <Field name="Dorsiflexors">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Dorsiflexors-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Dorsiflexors Test2">
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
                    <Field name="Plantar Flexors">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Plantar Flexors-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Plantar Flexors Test2">
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
                    <Field name="Evestors">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Evertors-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Evestors2">
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
                    <Field name="Invertors">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Invertors-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Invertors1">
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
                    <Field name="Flexor Digiotorum">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Flexor Digitorum-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Flexor Digiotorum2">
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
                    <Field name="Extensor Digitorum">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Extensor Digitorum-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Extensor Digitorum3">
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
                    <Field name="EHL/EHB">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">EHL/EHB-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="EHL/EHB4">
                      {({ input }) => (
                        <div >



                          <input type="text" {...input} placeholder="" className='newinput ml-5' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              </Grid>





              <div className='mb-3'> <h4><u>SPECIAL TESTS</u></h4>  </div>

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
                    <Field name="Anterior Drawer Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Anterior Drawer Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Anterior Drawer Test Test2">
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
                    <Field name="Inversion Talar Tilt Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Inversion Talar Tilt Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Inversion Talar Tilt Test Test2">
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
                    <Field name="Eversion  Talar Tilt Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Eversion  Talar Tilt Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Eversion  Talar Tilt Test2">
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
                    <Field name="Squeeze Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Squeeze Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Squeeze Test1">
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
                    <Field name="Thompson Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Thompson Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Thompson Test2">
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
                    <Field name="Varus/Volgus Stress Testing Of MTP">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Varus/Valgus Stress Testing Of MTP-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12} className='mt-4'>
                  <div >
                    <Field name="Varus/Volgus Stress Testing Of MTP3">
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
export default Ankle;