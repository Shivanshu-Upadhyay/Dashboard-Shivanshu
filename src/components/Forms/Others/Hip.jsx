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


function Hip() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };




  return (
    <div >
      <h3 className="text-center"> HIP EVALUATION</h3>

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






              <div className='mb-3'> <h4><u> INTENSITY OF PAIN </u></h4>  </div>


              {/* +++++++++++++++ SLIDER+++++++++++++++++= */}






              <Grid container spacing={2} className='mb-3'>
                <Grid item md={12} xs={12}>
                  <div className=''>
                    <h6 className='text-center'>VAS Score</h6>
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


              </Grid>


              <Grid container spacing={2} className='mb-3'>


                <Grid item md={6} xs={12}>
                  <div>
                    <label>Aggravating Factors-</label>
                    <Field name="Aggravating Factors" component="select">
                      <option />
                      <option value="Walk-">Walk</option>
                      <option value="Up/Down stairs"> Up/Down stairs</option>
                      <option value="Sports-"> Sports</option>
                      <option value="Stand-">Stand</option>
                      <option value=" Sit to stand"> Sit to stand</option>
                      <option value="Any Activity"> Any Activity</option>
                      <option value="Other-"> Others</option>

                    </Field>
                  </div>
                </Grid>



                <Grid item md={6} xs={12}>
                  <div>
                    <label>Relieving Factors-</label>
                    <Field name="Pain Type" component="select">
                      <option />
                      <option value="Rest-">Rest</option>
                      <option value="Positioning-"> Positioning</option>
                      <option value="Heat Therapy">Heat Therapy</option>
                      <option value="Icing-"> Icing</option>
                      <option value="Medicines">Medicines</option>
                      <option value="Other--"> Others</option>


                    </Field>
                  </div>
                </Grid>


              </Grid>




              <div className='mb-3'> <h4><u>EXAMINATION</u></h4>  </div>
              <div className='mb-2'> <h6><u>On Palpation:-</u></h6>  </div>

              <Grid container spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Warmth-">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Warmth:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Skin Changes">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Skin Changes:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Tightness">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Tightness:</label>
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
                    <Field name="Edema">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Edema:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Clicking Sound">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Clicking Sound:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Muscle Atrophy">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Muscle Atrophy:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


              </Grid>







              <Grid container spacing={2} className='mb-3'>
                <Grid item md={12} xs={12}>
                  <div>
                    <Field name="Contractures/Deformities">
                      {({ input }) => (
                        <div className="fullw100">
                          <label className=" ">Contractures/Deformities:</label>
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

                            <h4> <u >MUSCULAR STRENGTH & JOINT RANGE OF MOTION</u> </h4>

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
                                  <th scope="row">Adduction</th>

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
                                  <th scope="row">Abduction</th>

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

                                <tr>
                                  <th scope="row">External Rotation</th>

                                  <th>
                                    <Field name="ocg">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="pcg">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="qcg">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="rcg">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                  <th>
                                    <Field name="rcxg">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>


                                  <th>
                                    <Field name="rcyg">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                </tr>

                                <tr>
                                  <th scope="row">Internal Rotation</th>

                                  <th>
                                    <Field name="ocs">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="pcs">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="qcs">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="rcs">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                  <th>
                                    <Field name="rcxs">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>


                                  <th>
                                    <Field name="rcys">
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
                    <h6 className=''> TESTS </h6>
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
                    <Field name="Faber's (Patrick) Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Faber's (Patrick) Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Faber's (Patrick) Test">
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
                    <Field name="Thomas Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Thomas Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Thomas Test ">
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
                    <Field name="Ober's Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Ober's Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Ober's Test2">
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
                    <Field name="Trendelenburg Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Trendelenburg Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Trendelenburg Test1">
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
                    <Field name="Piriformis Tightness">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Piriformis Tightness-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Piriformis Tightness">
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
                    <Field name="Leg Length">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Leg Length-</label>

                          <input type="text" {...input} placeholder="" className='newinput' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Leg Length ">
                      {({ input }) => (
                        <div >



                          <input type="text" {...input} placeholder="" className='newinput ml-5' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              </Grid>




              <div className='mb-3'> <h4><u>FUNCTIONAL ASSESSMENT</u></h4>  </div>


              <Grid container spacing={2} className='mb-3'>
                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="Limb Alignment">
                      {({ input }) => (
                        <div className="">
                          <label className=" ">Limb Alignment-</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="LLD(If Any)">
                      {({ input }) => (
                        <div className="">
                          <label className="">LLD(If Any)-</label>

                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              </Grid>












              <div className='mb-3'> <h6><u>Gait Analysis</u></h6>  </div>





              <Grid container spacing={2} className='mb-3'>
                <Grid item md={12} xs={12}>
                  <div>
                    <Field name="Gait Pattern">
                      {({ input }) => (
                        <div className="fullw100">
                          <label className=" ">Gait Pattern:</label>
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
                    <Field name="Stance Phase">
                      {({ input }) => (
                        <div className="">
                          <label className=" ">Stance Phase-</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="Swing Phase">
                      {({ input }) => (
                        <div className="">
                          <label className="">Swing Phase-</label>

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
                    <Field name="Weight Beasing">
                      {({ input }) => (
                        <div className="">
                          <label className=" ">Weight Bearing-</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="Walking Aid">
                      {({ input }) => (
                        <div className="">
                          <label className="">Walking Aid-</label>

                          <input type="text" {...input} placeholder="" />
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
                          <label className="widthsame bold">PHYSIO TREATMENT GOAL-</label>
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
export default Hip;