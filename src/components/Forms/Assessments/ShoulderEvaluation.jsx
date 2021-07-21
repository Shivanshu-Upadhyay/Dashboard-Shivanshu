import React from "react";
import "./index.css";
import { Form, Field } from "react-final-form";
import {Table} from 'react-bootstrap'

import SaveIcon from '@material-ui/icons/Save';
import { addShoulderData } from "../../../actions/shoulderEvaluationAction";
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
import NewSlider from "./NewSlider";


function Shoulder(props) {
  const onSubmit = (formValues) => {
    console.log(formValues);
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
      stiffness: formValues.stiffness,
      muscleAtrophy: formValues.muscleAtrophy,
      muscleTightness: formValues.muscleTightness,
      contracture: formValues.contracture,
      clickingSound: formValues.clickingSound,
      alignment: formValues.alignment,
      winging: formValues.winging,
      painIntensity: formValues.painIntensity,
      painDuration: formValues.painDuration,
      painSite: formValues.painSite,
      painType: formValues.painType,
      painNature: formValues.painNature,
      aggrevatingFactors: formValues.aggrevatingFactors,
      relievingFactors: formValues.relievingFactors,
      neckStiffness: formValues.neckStiffness,
      neckPain: formValues.neckPain,
      neckRadiation: formValues.neckRadiation,
      neckAggrevatingFactors: formValues.neckAggrevatingFactors,
      neckRelievingFactor: formValues.neckRelievingFactor,
      flexion: {
        left: {
          mmt: formValues['flex-left-mmt'],
          active: formValues['flex-left-active'],
          passive: formValues['flex-left-passive']
        },
        right: {
          mmt: formValues['flex-right-mmt'],
          active: formValues['flex-right-active'],
          passive: formValues['flex-right-passive']
        }
      },

      extension: {
        left: {
          mmt: formValues['extension-left-mmt'],
          active: formValues['extension-left-active'],
          passive: formValues['extension-left-passive']
        },
        right: {
          mmt: formValues['extension-right-mmt'],
          active: formValues['extension-right-active'],
          passive: formValues['extension-right-passive']
        }
      },

      adduction: {
        left: {
          mmt: formValues['adduction-left-mmt'],
          active: formValues['adduction-left-active'],
          passive: formValues['adduction-left-passive']
        },
        right: {
          mmt: formValues['adduction-right-mmt'],
          active: formValues['adduction-right-active'],
          passive: formValues['adduction-right-passive']
        }
      },

      abduction: {
        left: {
          mmt: formValues['abduction-left-mmt'],
          active: formValues['abduction-left-active'],
          passive: formValues['abduction-left-passive']
        },
        right: {
          mmt: formValues['abduction-right-mmt'],
          active: formValues['abduction-right-active'],
          passive: formValues['abduction-right-passive']
        }
      },

      extRotation: {
        left: {
          mmt: formValues['extRotation-left-mmt'],
          active: formValues['extRotation-left-active'],
          passive: formValues['extRotation-left-passive']
        },
        right: {
          mmt: formValues['extRotation-right-mmt'],
          active: formValues['extRotation-right-active'],
          passive: formValues['extRotation-right-passive']
        }
      },

      intRotation: {
        left: {
          mmt: formValues['intRotation-left-mmt'],
          active: formValues['intRotation-left-active'],
          passive: formValues['intRotation-left-passive']
        },
        right: {
          mmt: formValues['intRotation-right-mmt'],
          active: formValues['intRotation-right-active'],
          passive: formValues['intRotation-right-passive']
        }
      },

      supraTest: {
        left: formValues['supra-left'],
        right: formValues['supra-right']
      },

      infraTest: {
        left: formValues['infra-left'],
        right: formValues['infra-right']
      },

      dropArmTest: {
        left: formValues['dropArm-left'],
        right: formValues['dropArm-right']
      },
      subscapularisTest: {
        left: formValues['subscapularis-left'],
        right: formValues['subscapularis-right']
      },

      hawkinsTest: {
        left: formValues['hawkins-left'],
        right: formValues['hawkins-right']
      },

      painfulArc: {
        left: formValues['painfulArc-left'],
        right: formValues['painfulArc-right']
      },

      sulcusSign: {
        left: formValues['sulcusSign-left'],
        right: formValues['sulcusSign-right']
      },

      apprehensionTest: {
        left: formValues['apprehension-left'],
        right: formValues['apprehension-right']
      },

      investigation: formValues.investigation,
      diagnosis: formValues.diagnosis,
      treatmentGoal: formValues.treatmentGoal,
      treatmentPlan: formValues.treatmentPlan

    }
    props.addShoulderData(data);
  };
 

  

  return (
    <div >
      <h3 className="text-center"> SHOULDER EVALUATION</h3>

      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 25}}>
              <Grid  container  spacing={2}>
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
                    <Field name="patientId">
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


               <Grid container  spacing={2} className='mb-2'>
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
                           
                          <input type="text" {...input} placeholder="" className='w50'/>
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





  <Grid container  spacing={2} className='mb-3'>
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






            <Grid container  className='mb-3'>

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

  <Grid container  spacing={2} className='mb-3'>

 
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
                    <Field name="adlLimitation">
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
            <Grid container  className='mb-3'>

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




<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <label>Warmth-</label>
                 <Field name="warmth" component="select">
              <option />
              <option value="wleft">L</option>
              <option value="wright"> R</option>
              <option value="wbilateral"> B/L</option>
             
                  </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <label>Swelling-</label>
            <Field name="swelling" component="select">
              <option />
              <option value="sleft">L</option>
              <option value="sright"> R</option>
              <option value="sbilateral"> B/L</option>
             
            </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                   <div>
                    <label>Stiffness-</label>
            <Field name="stiffness" component="select">
              <option />
              <option value="bruleft">Left</option>
              <option value="bruright"> Right</option>
              <option value="brubilateral"> B/L</option>
             
            </Field>
                  </div>
                </Grid>
               </Grid>



<Grid container  spacing={2} className='mb-3'>



  <Grid item md={4} xs={12}>
                  <div>
                    <label>Clicking Sound-</label>
            <Field name="clickingSound" component="select">
              <option />
              <option value="propleft">Left</option>
              <option value="propright"> Right</option>
              <option value="propbilateral"> Bilateral</option>
             
            </Field>
                  </div>
                </Grid>




                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="alignment">
                      {({ input }) => (
                        <div className="">
                          <label className=" ">Alignment-</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              
               
  <Grid item md={4} xs={12}>
                  <div>
                    <label>Winging-</label>
            <Field name="winging" component="select">
              <option />
              <option value="propleft">Left</option>
              <option value="propright"> Right</option>
              <option value="propbilateral"> Bilateral</option>
             
            </Field>
                  </div>
                </Grid>

               </Grid>




<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="muscleAtophy">
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
                          <label className=" ">Muscle Tightness:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="contracture">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Contracture/Deformities:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


               </Grid>








<div className='mb-3'> <h4><u> PAIN EVALUATION </u></h4>  </div>


{/* +++++++++++++++ SLIDER+++++++++++++++++= */}






<Grid container  spacing={2} className='mb-3'>
                <Grid item md={12} xs={12}>
                  <div className=''>
                  <label >Intensity Of Pain</label>
                  
                     <NewSlider />
                      <h6 className='text-center'>VAS Score</h6>
                  </div>
                </Grid>
                 </Grid>


{/* ++++++++++++++++++++++++++++++++= */}





  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="painDuration">
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
                    <Field name="painSite">
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





<Grid container  spacing={2} className='mb-3'>
              

              


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
              <option value="Other"> Other</option>
             
            </Field>
                  </div>
                </Grid>

               </Grid>



<div className='mb-3'> <h4><u>NECK</u></h4>  </div>


<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="neckStiffness">
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
                    <Field name="neckPain">
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
                    <Field name="neckRadiation">
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






<Grid container  spacing={2} className='mb-3'>
                <Grid item md={12} xs={12}>
                  <div>
                    <Field name="neckAggrevatingFactors">
                      {({ input }) => (
                        <div className="">
                          <label className=" ">Aggravating Factors-</label>
                          <input type="text" {...input} placeholder="" className='w50' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              
               </Grid>


<Grid container  spacing={2} className='mb-2'>
 <Grid item md={12} xs={12}>
                  <div>
                    <Field name="neckRelievingFactor">
                      {({ input }) => (
                        <div className="">
                          <label className=" ">Relieving Factor-</label>
                          <input type="text" {...input} placeholder="" className='w50'/>
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
             <div className='mb-4'> <h4><u> STRENGTH & ROM</u></h4></div> 
              <div>
                          <div className="">
                            <Table striped bordered hover>
                              <thead>
                                <tr>
                                  <th className='text-center pb-4' rowSpan='2'> <h5>Movements</h5> </th>
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
                                    <Field name="flex-left-mmt">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="flex-left-active">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="flex-left-passive">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="flex-right-mmt">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="flex-right-active">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="flex-right-passive">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                </tr>



                                <tr>
                                  <th scope="row">Extension</th>

                                  <th>
                                    <Field name="extension-left-mmt">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="extension-left-active">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="extension-left-passive">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="extension-right-mmt">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="extension-right-active">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="extension-right-passive">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                </tr>



                                <tr>
                                  <th scope="row">Adduction</th>

                                  <th>
                                    <Field name="adduction-left-mmt">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="adduction-left-active">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="adduction-left-passive">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="adduction-right-mmt">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="adduction-right-active">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="adduction-right-passive">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                </tr>



                                <tr>
                                  <th scope="row">Abduction</th>

                                  <th>
                                    <Field name="abduction-left-mmt">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="abduction-left-active">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="abduction-left-passive">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="abduction-right-mmt">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="abduction-right-active">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="abduction-right-passive">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                </tr>



                                <tr>
                                  <th scope="row">External Rotation</th>

                                  <th>
                                    <Field name="external-left-mmt">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="external-left-active">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="external-left-passive">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="external-right-mmt">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="external-right-active">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="external-right-passive">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>

                                </tr>




                                <tr>
                                  <th scope="row">Internal Rotation</th>

                                  <th>
                                    <Field name="internal-left-mmt">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="internal-left-active">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="internal-left-passive">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="internal-right-mmt">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="internal-right-active">
                                      {({ input }) => (

                                        <input type="text" {...input} placeholder="" />

                                      )}
                                    </Field>

                                  </th>
                                  <th>
                                    <Field name="internal-right-passive">
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

<Grid container  spacing={2} className=''>
                <Grid item md={4} xs={4}>
                  <div>
                  <h6 className=''> <u> TEST NAME </u> </h6>
                 
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



<div><h5 className='mb-4 mt-3'> ROTATOR CUFF TESTING</h5></div>


  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="supra-left">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Supraspinatus Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="supra-right">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>




  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="infra-left">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Infraspinatus Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="infra-right">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>




  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="dropArm-left">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Drop Arm Test -</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="dropArm-right">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>




  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="subscapularis-left">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Subscapularis Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="subscapularis-right">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>


<div><h5 className='mb-4 mt-3'> IMPINGEMENT </h5></div>

  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="hawkins-left">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Hawkins-Kennedy Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="hawkins-right">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>




  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="painfulArc-left">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Painful Arc-</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="painfulArc-right">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>




<div><h5 className='mb-4 mt-3'> STABILITY TESTS </h5></div>

  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="sulcusSign-left">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Sulcus Sign-</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="sulcusSign-right">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>




  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="apprehension-left">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Apprehension Test-</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="apprehension-right">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>



















               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={12} xs={12}>
                    <div>
                    <Field name="investigation">
                      {({ input }) => (
                        <div className="">
                          <label className="widthsame bold">INVESTIGATION-</label>
                          <input type="text" {...input} placeholder="" className='lastw'/>
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
                    <Field name="treatmentGoal">
                      {({ input }) => (
                        <div className="">
                          <label className="widthsame bold"> TREATMENT GOAL-</label>
                          <input type="text" {...input} placeholder="" className='lastw'/>
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


               <Grid item md={12} xs={12}>
                    <div>
                    <Field name="treatmentPlan">
                      {({ input }) => (
                        <div className="">
                          <label className="widthsame bold">TREATMENT PLAN-</label>
                          <input type="text" {...input} placeholder="" className='lastw'/>
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
      shoulderData: state.shoulderData,
  };
};

export default connect(mapStateToProps, { addShoulderData })(Shoulder);
