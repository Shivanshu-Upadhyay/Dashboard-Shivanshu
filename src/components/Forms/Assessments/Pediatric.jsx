import React from "react";

import "./index.css";
import { Form, Field } from "react-final-form";
import {Table} from "react-bootstrap";
import SaveIcon from '@material-ui/icons/Save';
import { addPediatricData } from "../../../actions/pediatricAction";
import { connect } from "react-redux";


import {
  Paper,
  Grid,
  Button
} from "@material-ui/core";
import { TextField, Checked, Radio, Select } from "final-form-material-ui";

function Pediatric(props) {
  const onSubmit = (formValues) => {
    console.log(formValues);
    const data = {
      name: formValues.name,
      assessmentDate: formValues.assessmentDate,
      age: formValues.age,
      gender: formValues.gender,
      patientId: formValues.patientId,
      dob: formValues.dob,
      birthWeight: formValues.birthWeight,
      headCircumference: formValues.headCircumference,
      address: formValues.address,
      chiefComplaints: formValues.chiefComplaints,
      prenatal: formValues.prenatal,
      natal: formValues.natal,
      postNatal: formValues.postNatal,
      familyHistory: formValues.familyHistory,
      supine: formValues.supine,
      prone: formValues.prone,
      sitting: formValues.sitting,
      socialSmile: formValues.socialSmile,
      followWithEyes: formValues.followWithEyes,
      headHolding :formValues.headHolding,
      rollOver: formValues.rollOver,
      sittingWithSupport: formValues.sittingWithSupport,
      sittingWithoutSupport: formValues.sittingWithoutSupport,
      crawling: formValues.crawling,
      standing: formValues.standing,
      walkingWithSupport: formValues.walkingWithSupport,
      walkingWithoutSupport: formValues.walkingWithoutSupport,
      sucking: formValues.sucking,
      rooting: formValues.rooting,
      swallowing: formValues.swallowing,
      upperLimbPlacing: formValues.upperLimbPlacing,
      primitiveReflexes: {
        sucking: {
          present: formValues.b,
          integrated: formValues.c
        },
        rooting: {
          present: formValues.i,
          integrated: formValues.j
        },

        //till here
        grasp: {
          present: formValues.b,
          integrated: formValues.j
        },
        footGrasp: {
          present: formValues.b,
          integrated: formValues.j
        },
        placing: {
          present: formValues.b,
          integrated: formValues.j
        },
        startle: {
          present: formValues.b,
          integrated: formValues.j
        },
        handOpening: {
          present: formValues.b,
          integrated: formValues.j
        }
      },



      spinalReflexes: {
        flexorWithdrawal: {
          present: formValues.b,
          integrated: formValues.j
        },
        extensorWithdrawal: {
          present: formValues.b,
          integrated: formValues.j
        },
        crossedExtension: {
          present: formValues.b,
          integrated: formValues.j
        }
      },



      tiltReactions: {
        supineAndProne: {
          achieved: formValues.b,
          notAchieved: formValues.b
        },
        fourPointKneeling: {
          achieved: formValues.b,
          notAchieved: formValues.b
        },
        sitting: {
          achieved: formValues.b,
          notAchieved: formValues.b
        },
        kneelStanding: {
          achieved: formValues.b,
          notAchieved: formValues.b
        },
        standing: {
          achieved: formValues.b,
          notAchieved: formValues.b
        },
        staggeringReaction: {
          achieved: formValues.b,
          notAchieved: formValues.b
        },
        savingFromFall: {
          achieved: formValues.b,
          notAchieved: formValues.b
        }
      },




    }
    props.addPediatricData(formValues);

  };

  return (
    <div >
      <h3 className="text-center"> PAEDIATRIC EVALUATION</h3>

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


               <Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
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

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="age">
                      {({ input }) => (
                        <div className="cardio1">
                          <label className="age">Age-</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
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
               </Grid>

              <Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="dob">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Date Of Birth-</label>
                          <input type="date" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="birthWeight">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="age">Birth Weight</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="headCircumference">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="age">Head Circumference</label>
                           
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

            <Grid container  className='mb-3'>

             <Grid item xs={12}>

              <div>
                    <Field name="chiefComplaints">
                      {({ input }) => (
                        <div className="fullw100 ">
                          <label className="name">Chief Complaints-</label>
                         <textarea
                            className=""
                            
                            {...input}
                          ></textarea>
                        </div>
                      )}
                    </Field>
                  </div>

           </Grid>
           </Grid>


              <h4 className='m-2 text-uppercase'> <u >History</u></h4>

               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="prenatal">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Prenatal</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={3} xs={12}>
                    <div>
                    <Field name="natal">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Natal</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="postnatal">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Postnatal</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


              <Grid item md={3} xs={12}>
                    <div>
                    <Field name="familyHistory">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Family History</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>

                     <h4 className='m-2 text-uppercase'> <u >Observation</u></h4>

               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="supine">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Supine</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="prone">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Prone</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="sitting">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Sitting</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>





                <h4 className='m-2 text-uppercase'> <u >Milestones</u></h4>

               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="socialSmile">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Social Smile</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="followWithEyes">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Follow with eyes</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="headHolding">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Head Holding</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>
                
                 <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="rollOver">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Roll over</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="sittingWithSupport">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Sitting '(with support)'</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="sittingWithoutSupport">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Sitting '(without support)'</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>

               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="crawling">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Crawling</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="standing">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Standing</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="walkingWithSupport">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Walking '(with support)'</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


              <Grid item md={4} xs={12}>
                    <div>
                    <Field name="walkingWithoutSupport">
                      {({ input }) => (
                        <div className=" ">
                          <label className="name">Walking '(without support)'</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>

 

                

                     <h4 className='m-2 text-uppercase'> <u >Reflex evaluation</u></h4>
                        <p>Neonatal reflexes</p>
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="sucking">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Sucking</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={3} xs={12}>
                    <div>
                    <Field name="rooting">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Rooting</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="swallowing">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Swallowing</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                <Grid item md={3} xs={12}>
                    <div>
                    <Field name="upperLimbPlacing">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Upper limb placing</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>

{/* +++++++++++++++++++Table1+++++++++++++++++++++++++++ */}
     
  <h4 className='m-2 text-uppercase'> <u >Development Reflexes</u></h4>



           <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
      <Form onSubmit={onSubmit} >
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <div className="">
              
          
              <h5 className="pl-2"> <u> PRIMITIVE REFLEXES </u></h5>
              <br />
              
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Reflex</th>
                    <th>Normal Until</th>
                    <th>Present</th>
                    <th>Integrated</th>
                   
                  </tr>

                  <tr>
                    <th scope="row">Sucking</th>

                    <td>
                       
                  3 months
                    </td>
                    <th>
                        <Field name="b">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                        <Field name="c">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                   
                    
                  </tr>

                  <tr>
                    <th scope="row">Rooting</th>
                    <td>
                        
                  3 months
                    </td>
                    <th>
                         <Field name="i">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                         <Field name="j">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                  </tr>
                  <tr>
                    <th scope="row">Grasp</th>

                    <td>
                    
                       3 months  
                    </td>
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
                    
                  </tr>

                  <tr>
                    <th scope="row">Foot Grasp</th>
                    <td>
                       9 months
                    </td>
                    <th>
                         <Field name="w">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>


                     <th>
                         <Field name="wxy">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    
                  </tr>
                  <tr>
                    <th scope="row">Placing</th>
                    <td>
                        Remains
                    </td>
                    <th>
                         <Field name="dd">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                         <Field name="ee">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                  </tr>
                  <tr>
                    <th scope="row">Startle</th>
                    <td>
                       Remains
                    </td>
                    <th>
                        <Field name="kk">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                        <Field name="ll">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    
                  </tr>
                  <tr>
                    <th scope="row">Hand opening</th>
                    <td>
                    1 months
                        
                    </td>
                    <th>
                    <Field name="rr">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                        
                    </th>
                    <th>
                    <Field name="ss">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                         
                    </th>
                   
                  </tr>
                  
                </thead>
              </Table>
            </div>
          </form>
        )}
      </Form>
                  </div>
          </Grid>
           </Grid>




              
             

{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}





         
{/* +++++++++++++++++++Table2+++++++++++++++++++++++++++ */}

             <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
              <Form onSubmit={onSubmit}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <div className="">
              
          
              <h5 className="pl-2"> <u> SPINAL REFLEXES </u></h5>
              <br />
              
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Reflex</th>
                    <th>Normal Until</th>
                    <th>Present</th>
                    <th>Integrated</th>
                   
                  </tr>

                  <tr>
                    <th scope="row">Flexor Withdrawal</th>

                    <td>
                       
                  2 months
                    </td>
                    <th>
                        <Field name="b">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                        <Field name="c">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                   
                    
                  </tr>

                  <tr>
                    <th scope="row">Extensor Withdrawal</th>
                    <td>
                        
                  2 months
                    </td>
                    <th>
                         <Field name="i">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                         <Field name="j">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                  </tr>
                  <tr>
                    <th scope="row">Crossed Extension</th>

                    <td>
                    
                       2 months  
                    </td>
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
                    
                  </tr>

                 
                  
                </thead>
              </Table>
            </div>
          </form>
        )}
      </Form>                  </div>
          </Grid>
           </Grid>



{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}
   


         



{/* +++++++++++++++++++Table3+++++++++++++++++++++++++++ */}



 <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
              <Form onSubmit={onSubmit}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <div className="">
              
          
              <h5 className="pl-2"> <u> TILT REACTIONS </u></h5>
              <br />
              
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Reactions</th>
                    <th>Emerges</th>
                    <th>Achieved</th>
                    <th> Not Achieved</th>
                   
                  </tr>

                  <tr>
                    <th scope="row">Supine and Prone</th>

                    <td>
                       
                  6 months
                    </td>
                    <th>
                        <Field name="b">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                        <Field name="c">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                   
                    
                  </tr>

                  <tr>
                    <th scope="row">Four point Kneeling</th>
                    <td>
                        
                  7-12 months
                    </td>
                    <th>
                         <Field name="i">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                         <Field name="j">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                  </tr>
                  <tr>
                    <th scope="row">Sitting</th>

                    <td>
                    
                       9-12 months  
                    </td>
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
                    
                  </tr>

                  <tr>
                    <th scope="row">Kneel Standing</th>
                    <td>
                       18 months
                    </td>
                    <th>
                         <Field name="w">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>


                     <th>
                         <Field name="wxy">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    
                  </tr>
                  <tr>
                    <th scope="row">Standing</th>
                    <td>
                       12-18 months
                    </td>
                    <th>
                         <Field name="dd">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                         <Field name="ee">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                  </tr>
                  <tr>
                    <th scope="row">Staggering Reaction</th>
                    <td>
                       12-18 months
                    </td>
                    <th>
                        <Field name="kk">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                        <Field name="ll">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    
                  </tr>
                  <tr>
                    <th scope="row">Saving from Fall</th>
                    <td>
                    5-10 months
                        
                    </td>
                    <th>
                    <Field name="rr">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                        
                    </th>
                    <th>
                    <Field name="ss">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                                         
                    </th>
                   
                  </tr>
                  
                </thead>
              </Table>
            </div>
          </form>
        )}
      </Form>                  </div>
          </Grid>
           </Grid>




{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}



<h4 className='m-2 text-uppercase'> <u >Examination</u></h4>

 <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="higherCorticalFunction">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Higher Cortical Function</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="intergrationWithSurroundings">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Intergration with Surroundings</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="speech">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Speech</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>



 <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="vision">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Vision</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="hearing">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Hearing</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="orientation">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Orientation</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>




 <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="cognitiveFunction">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Cognitive Function</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="overallActivity">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Overall Activity</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="handedness">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Handedness</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

               <Grid item md={4} xs={12}>
                    <div>
                    <Field name="carnialNerveExamination">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Carnial Nerve Examination</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>




            
                     <h4 className='m-2 text-uppercase'> <u >Physical Examination</u></h4>
                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="height">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Height</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={3} xs={12}>
                    <div>
                    <Field name="weight">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Weight</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="chestCircumference">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Chest Circumference</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                <Grid item md={3} xs={12}>
                    <div>
                    <Field name="headCircumference">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Head Circumference</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>



{/* +++++++++++++++++++Table4+++++++++++++++++++++++++++ */}

 <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
              <Form onSubmit={onSubmit}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <div className="">
              
          
              <h5 className="pl-2"> <u> BRAINSTEM REFLEXES </u></h5>
              <br />
              
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Reflex</th>
                    <th>Normal Until</th>
                    <th>Present</th>
                    <th>Integrated</th>
                   
                  </tr>

                  <tr>
                    <th scope="row">ATNR</th>

                    <td>
                       
                  6 months Usually Pathological
                    </td>
                    <th>
                        <Field name="b">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                        <Field name="c">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                   
                    
                  </tr>

                  <tr>
                    <th scope="row">STNR</th>
                    <td>
                        
                  Raise & Pathological
                    </td>
                    <th>
                         <Field name="i">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                         <Field name="j">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                  </tr>
                  <tr>
                    <th scope="row">Tonic Labrynthine Supine</th>

                    <td>
                    
                       Pathological  
                    </td>
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
                    
                  </tr>

                  <tr>
                    <th scope="row">Tonic Labrynthine Prone</th>
                    <td>
                       3 months
                    </td>
                    <th>
                         <Field name="w">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>


                     <th>
                         <Field name="wxy">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    
                  </tr>
                  <tr>
                    <th scope="row">Positive Supporting</th>
                    <td>
                       3 months
                    </td>
                    <th>
                         <Field name="dd">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                         <Field name="ee">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                  </tr>
                  <tr>
                    <th scope="row">Negative Supposting</th>
                    <td>
                      3-5 months
                    </td>
                    <th>
                        <Field name="kk">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                        <Field name="ll">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    
                  </tr>
                  
                </thead>
              </Table>
            </div>
          </form>
        )}
      </Form>                  </div>
          </Grid>
           </Grid>



{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}





         
{/* +++++++++++++++++++<Table5>+++++++++++++++++++++++++++ */}

 <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
              <Form onSubmit={onSubmit}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <div className="">
              
          
              <h5 className="pl-2"> <u> MIDBRAIN REFLEXES </u></h5>
              <br />
              
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Reactions</th>
                    <th>Emerges</th>
                    <th>Achieved</th>
                    <th> Not Achieved</th>
                   
                  </tr>

                  <tr>
                    <th scope="row">Optical</th>

                    <td>
                       
                  6 months 
                    </td>
                    <th>
                        <Field name="b">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                        <Field name="c">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                   
                    
                  </tr>

                  <tr>
                    <th scope="row">Labrynthine</th>
                    <td>
                      <Field name="cx">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </td>
                    <th>
                         <Field name="i">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                         <Field name="j">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                  </tr>
                  
                </thead>
              </Table>
            </div>
          </form>
        )}
      </Form>                  </div>
          </Grid>
           </Grid>



{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}
   


         



{/* +++++++++++++++++++Table6+++++++++++++++++++++++++++ */}

                <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
              <Form onSubmit={onSubmit}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <div className="">
              
          
              <h5 className="pl-2"> <u> CORTICAL REACTIONS </u></h5>
              <br />
              
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Reactions</th>
                    <th>Emerges</th>
                    <th>Achieved</th>
                    <th> Not Achieved</th>
                   
                  </tr>

                  <tr>
                    <th scope="row">Neek Righting</th>

                    <td>
                       
                  5 months
                    </td>
                    <th>
                        <Field name="b">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                        <Field name="c">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                   
                    
                  </tr>

                  <tr>
                    <th scope="row">Associated Reactions</th>
                    <td>
                        
                  Pathological
                    </td>
                    <th>
                         <Field name="i">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                         <Field name="j">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                  </tr>
                  <tr>
                    <th scope="row">Rising</th>

                    <td>
                    
                       2-6 months  
                    </td>
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
                    
                  </tr>

                  <tr>
                    <th scope="row">Body Righting</th>
                    <td>
                       4-6 months
                    </td>
                    <th>
                         <Field name="w">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>


                     <th>
                         <Field name="wxy">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    
                  </tr>
                  <tr>
                    <th scope="row">Amphibian</th>
                    <td>
                       4-6 months
                    </td>
                    <th>
                         <Field name="dd">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                         <Field name="ee">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                  </tr>
                  <tr>
                    <th scope="row">Rotation</th>
                    <td>
                       6-10 months
                    </td>
                    <th>
                        <Field name="kk">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    <th>
                        <Field name="ll">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    
                  </tr>               
                  
                </thead>
              </Table>
            </div>
          </form>
        )}
      </Form>                  </div>
          </Grid>
           </Grid>



{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}



   <h4 className='m-2 text-uppercase'> <u >Tendon Reflex</u></h4>
                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="biceps">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Biceps</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={3} xs={12}>
                    <div>
                    <Field name="triceps">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Triceps</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="knee">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Knee</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                <Grid item md={3} xs={12}>
                    <div>
                    <Field name="ankle">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Ankle</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>


           

   <h4 className='m-2 text-uppercase'> <u >Respiratory Status</u></h4>
                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={6} xs={12}>
                    <div>
                    <Field name="breathingPattern">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Pattern of Breathing</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={6} xs={12}>
                    <div>
                    <Field name="endurance">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Endurance</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>
              

         </Grid>




                 <h4 className='m-2 text-uppercase'> <u >Sensory Examination</u></h4>
                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="deep">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Deep</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="superficial">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Superficial</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="combinedCorticalSensation">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Combined Cortical Sensation</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                
         </Grid>





  <h4 className='m-2 text-uppercase'> <u >Motor Assessment</u></h4>
                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="activeROM">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Active ROM</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="passiveROM">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Passive ROM</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="musclePower">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Muscle Power</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                
         </Grid>






                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="muscleTone">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Muscle Tone</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="deformity">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Deformity</label>
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
                        <div className="fullw10 ">
                          <label className="name">Contracture</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                
         </Grid>

                         



{/* +++++++++++++++++++Table7+++++++++++++++++++++++++++ */}


         <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
              <Form onSubmit={onSubmit}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <div className="">
              
          
              <h5 className="pl-2"> <u> LIMB LENGTH DISCREPANCY </u></h5>
              <br />
              
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>Right(in cm)</th>
                    <th>Left(in cm)</th>
                    
                   
                  </tr>

                  <tr>
                    <th scope="row">True Length</th>

                    <td>
                     <Field name="cpy">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </td>
                    <th>
                        <Field name="b">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                   
                   
                    
                  </tr>

                  <tr>
                    <th scope="row">Apparant Length</th>
                    <td>
                      <Field name="cx">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </td>
                    <th>
                         <Field name="i">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    
                   
                  </tr>
                  
                </thead>
              </Table>
            </div>
          </form>
        )}
      </Form>                  </div>
          </Grid>
           </Grid>


{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}





         
{/* +++++++++++++++++++Table8+++++++++++++++++++++++++++ */}
          

           <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
              <Form onSubmit={onSubmit}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <div className="">
              
          
              <h5 className="pl-2"> <u> MUSCLE GIRTH </u></h5>
              <br />
              
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>Right(in cm)</th>
                    <th>Left(in cm)</th>
                    
                   
                  </tr>

                  <tr>
                    <th scope="row">Mid Thigh</th>

                    <td>
                     <Field name="cpy">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </td>
                    <th>
                        <Field name="b">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                   
                   
                    
                  </tr>

                  <tr>
                    <th scope="row">Mid Calf</th>
                    <td>
                      <Field name="cx">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </td>
                    <th>
                         <Field name="i">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    
                   
                  </tr>


                   <tr>
                    <th scope="row">Mid Arm</th>

                    <td>
                     <Field name="cpyt">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </td>
                    <th>
                        <Field name="bz">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                   
                   
                   
                    
                  </tr>

                  <tr>
                    <th scope="row">Mid Forearm</th>
                    <td>
                      <Field name="cxzz">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </td>
                    <th>
                         <Field name="izz">
                    {({ input }) => (
                      
                        <input type="text" {...input} placeholder="" />
                     
                    )}
                  </Field>
                    </th>
                    
                   
                  </tr>
                  
                </thead>
              </Table>
            </div>
          </form>
        )}
      </Form>                  </div>
          </Grid>
           </Grid>


{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}
   





   <h4 className='m-2 text-uppercase'> <u >Posture Assessment</u></h4>
                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="posture">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Posture</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={3} xs={12}>
                    <div>
                    <Field name="coordination">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Co-Ordination </label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="gait">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Gait</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                <Grid item md={3} xs={12}>
                    <div>
                    <Field name="balance">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Balance</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>




   <h4 className='m-2 text-uppercase'> <u >Sitting Balance</u></h4>
                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={6} xs={12}>
                    <div>
                    <Field name="static">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Static</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={6} xs={12}>
                    <div>
                    <Field name="dynanic">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Dynamic</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>



                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={12} xs={12}>
                    <div>
                    <Field name="standingBalance">
                      {({ input }) => (
                        <div className=" ">
                          <label className="name">Standing Balance:-</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>
               
         </Grid>





   
                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={12} xs={12}>
                    <div>
                    <Field name="bladderControl">
                      {({ input }) => (
                        <div className=" ">
                          <label className="name">Bladder or Bowel Control:-</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>
               
         </Grid>







   <h4 className='m-2 text-uppercase'> <u > Functional Assessment</u></h4>

   <h6 className='p-2'><u>Sphincters</u></h6>
                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={6} xs={12}>
                    <div>
                    <Field name="bladderManagement">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Bladder Management</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={6} xs={12}>
                    <div>
                    <Field name="bowelManagement">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Bowel Management</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>

<h6 className='p-2 text-uppercase'><u>Self Care</u></h6>

         
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="eating">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Eating</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="bathing">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Bathing</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="grooming">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Grooming</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                
         </Grid>

                         

         
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="toileting">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Toileting</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="dressingUpperBody">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Dressing-Upper Body</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="dressingLowerBody">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Dressing-Lower Body</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                
         </Grid>

                         


<h4 className='m-2 text-uppercase'><u>Communication</u></h4>


         
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={6} xs={12}>
                    <div>
                    <Field name="expression">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Expression</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={6} xs={12}>
                    <div>
                    <Field name="compsehension">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Comprehension</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                
         </Grid>

                         


<h4 className='m-2 text-uppercase'><u>Mobility</u></h4>
         
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="transfersChair">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Transfers Chair</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="transfersToilet">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Transfers Toilet</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="transfersTab">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Transfers Tab</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                
         </Grid>

                         



<h4 className='m-2 text-uppercase'><u>Locomotion</u></h4>

         
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="crawls">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Crawls/walk/Wheelchair</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="stairs">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Stairs</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                      
         </Grid>

                         


<h4 className='m-2 text-uppercase'><u> Social Cognition</u></h4>
         
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="socialInteraction">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Social Interaction</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="problemSolving">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Problem Solving</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="memory">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Memory</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                
         </Grid>

                         



    <div className='mb-4'> <h4 className='text-center text-uppercase'><u>Present Medication</u></h4> </div>

         
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={12} xs={12}>
                    <div>
                    <Field name="investigation">
                      {({ input }) => (
                        <div className="">
                          <label className="widthsame bold">Investigation-</label>
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
                          <label className="widthsame bold">Diagnosis-</label>
                          <input type="text" {...input} placeholder="" className='lastw' />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={12} xs={12}>
                    <div>
                    <Field name="clinicalImpression">
                      {({ input }) => (
                        <div className="">
                          <label className="widthsame bold">Clinical Impression-</label>
                          <input type="text" {...input} placeholder="" className='lastw'/>
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
                          <label className="widthsame bold">Treatment Goal-</label>
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
                          <label className="widthsame bold">Treatment Plan-</label>
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
      pediatricData: state.pediatricData,
  };
};

export default connect(mapStateToProps, { addPediatricData })(Pediatric);