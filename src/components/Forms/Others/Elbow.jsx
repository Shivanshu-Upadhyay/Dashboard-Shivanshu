import React from "react";
import "./index.css";
import { Form, Field } from "react-final-form";
import {Table} from 'react-bootstrap'

import SaveIcon from '@material-ui/icons/Save';

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
import NewSlider from "../Assessments/NewSlider";


function Elbow() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };




  return (
    <div >
      <h3 className="text-center"> ELBOW/WRIST EVALUATION</h3>

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
                    <Field name="Warmth">
                      {({ input }) => (
                        <div className=" ">
                          <label className="name">Warmth-</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>




                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Swelling">
                      {({ input }) => (
                        <div className=" ">
                          <label className="name">Swelling-</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>



                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Stiffness">
                      {({ input }) => (
                        <div className=" ">
                          <label className="name">Stiffness-</label>
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
                    <Field name="Alignment3">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Alignment:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Muscle Tightness">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Muscle Tightness:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Contracture/Deformition">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Contracture/Deformity:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


              </Grid>






              <div className='mb-3'> <h4><u>PAIN ASSESSMENT</u></h4>  </div>


              {/* +++++++++++++++ SLIDER+++++++++++++++++= */}






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





              <Grid container spacing={2} className='mb-3'>
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





              <div className='mb-3'> <h4><u>NECK</u></h4>  </div>


              <Grid container spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Stiffness22">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Stiffness:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Pain">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Pain:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Radiation">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Radiation:</label>
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
                    <Field name="Aggravating Factor">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Aggravating Factor:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="Relieving Factors">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Relieving Factors:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              </Grid>





              <div className='mb-3'> <h4><u>NEUROLOGICAL</u></h4>  </div>

              <Grid container spacing={2} className='mb-3'>
                <Grid item md={12} xs={12}>
                  <div>
                    <Field name="Tingling/Numbness">
                      {({ input }) => (
                        <div className="fullw100">
                          <label className=" ">Tingling/Numbness:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
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

                            <h4> <u>STRENGTH & ROM</u> </h4>

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
                                  <th scope="row">Pronation</th>

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
                                  <th scope="row">Supination</th>

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











              <div className='mb-3'> <h4><u>SPECIAL TESTS</u></h4>  </div>

              <Grid container spacing={2} className=''>
                <Grid item md={4} xs={4}>
                  <div>
                    <h6 className=''> <u>TEST NAME</u> </h6>
                  </div>
                  <div>
                    <h6 className=''> <u>ELBOW</u> </h6>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <h6 className=''>LEFT</h6>
                  </div>
                </Grid>
                <Grid item md={4} xs={4}>
                  <div>
                    <h6 className='text-center'>RIGHT</h6>
                  </div>
                </Grid>
              </Grid>






              <Grid container spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="Tinel's Sign">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Tinel's Sign-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Tinel's Sign Test2">
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
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="Mills' Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Mills' Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Mills' Test Test2">
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
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="Golfer's Elbow Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Golfer's Elbow Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Golfer's Elbow Test2">
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
                <Grid item md={8} xs={8}>
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

                <Grid item md={4} xs={4}>
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
                <Grid item md={8} xs={8}>
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

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Valgur Stress Test2">
                      {({ input }) => (
                        <div >



                          <input type="text" {...input} placeholder="" className='newinput ml-5' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              </Grid>







              <Grid container spacing={2} className=''>
                <Grid item md={4} xs={4}>

                  <div>
                    <h6 className=''> <u>WRIST</u> </h6>
                  </div>
                </Grid>


              </Grid>








              <Grid container spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="Tinel's Sign">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Tinel's Sign-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4} className=''>
                  <div >
                    <Field name="Tinel's Sign3">
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
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="Phalen's Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Phalen's Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4} className=''>
                  <div >
                    <Field name="Phalen's Test3">
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
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="Finkelstein's Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Finkelstein's Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4} className=''>
                  <div >
                    <Field name="Finkelstein's Test3">
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
export default Elbow;