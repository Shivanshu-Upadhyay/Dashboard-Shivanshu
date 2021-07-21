import React from "react";

import "./index.css";
import { Form, Field } from "react-final-form";

import SaveIcon from '@material-ui/icons/Save';



import {
  Paper,
  Grid,
  Button,
} from "@material-ui/core";




function Neuro() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };


  

  return (
    <div >
      <h3 className="text-center"> NEUROLOGICAL EVALUATION</h3>

      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 25}}>
              <Grid  container  spacing={2}>
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





  <Grid container  spacing={2} className='mb-3'>
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






            <Grid container  className='mb-3'>

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



<div className='mb-3'> <h4><u>HISTORY OF PRESENT ILLNESS</u></h4>  </div>

<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Onset/Duration">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Onset/Duration:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Mental State">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Mental State:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="LOC">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">LOC:</label>
                           
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
                    <Field name="Sleep">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Sleep:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Convulsions">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Convulsions:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Headache">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Headache:</label>
                           
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
                    <Field name="Movement">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Movement:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Spineter Control">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Sphincter Control:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Speech">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Speech:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               </Grid>






<div className='mb-3'> <h4><u>HISTORY OF PAST ILLNESS</u></h4>  </div>




<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Mode of Injury">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Mode of Injury:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Medical History">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Medical History:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Birth History">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Birth History:</label>
                           
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
                    <Field name="Developmental History">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Developmental History:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Personal History">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Personal History:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Family History">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Family History:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               </Grid>





<div className='mb-3'> <h4><u>OBSERVATION</u></h4>  </div>



<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Posture">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Posture:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Body Built">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Body Built:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="External Appliances">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">External Appliances:</label>
                           
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
                    <Field name="Attitude of Limbs">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Attitude of Limbs:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Involuntory Movements">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Involuntory Movements:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Mode Of Ambulation">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Mode Of Ambulation:</label>
                           
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
                    <Field name="Trophical Changes">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Trophical Changes:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div className="fullw10">
                    <label>Muscle Tone:</label>
                 <Field name="Muscle Tone" component="select">
              <option />
              <option value="teleft">Atonic</option>
              <option value="teight"> Floccid</option>
              <option value="teilateral"> Spostive</option>
              <option value="teilateral"> Rigid</option>
             
                  </Field>
                  </div>
                </Grid>
               
               </Grid>



<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Type of Breathing:">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Type of Breathing:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Symmetry of Chest Expansion">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Symmetry of Chest Expansion:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>






<div className='mb-3'> <h4><u>ON PALPATION</u></h4>  </div>

<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Swelling">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Swelling:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Temperature">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Temperature:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Site of Pain">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Site of Pain:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               </Grid>









<div className='mb-3'> <h4><u>ON EXAMINATION</u></h4>  </div>
<div className='mb-3'> <h5>1.LOC According to GLASCOW COMA SCALE</h5>  </div>
<div className='mb-3'> <h6>(A) Eye Opening</h6>  </div>
<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Spontoneous">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Spontaneous:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="To Speech">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">To Speech:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>



<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                 <div>
                    <Field name="To Painful Stimilus">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">To Painful Stimilus:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="No Response">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">No Response:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>


<div className='mb-3'> <h6>(B) Motor Response</h6>  </div>
<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Follows motor commonds">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Follows motor commands:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Localizes">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Localizes:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>



<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                 <div>
                    <Field name="Withdraws">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Withdrawals:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="Abnorrmal Flexion">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Abnorrmal Flexion:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>


    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Extensor Response">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Extensor Response:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="No Response">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">No Response:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>



<div className='mb-3'> <h6>(c) Verbol Response</h6>  </div>
<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Oriented">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Oriented:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Confused Conversation">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Confused Conversation:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>



<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                 <div>
                    <Field name="Inoppropriate">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Inappropriate:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="Incomprehensible Sounds">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Incomprehensible Sounds:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>


    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="No Response">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">  No Response:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
       </Grid>




    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="Memory">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt"> <b>2.</b>Memory:</label>
                           
                          <input type="text" {...input} placeholder="" className='wid'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>              
               </Grid>






    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="Attention">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt"> <b>3.</b>Attention:</label>
                           
                          <input type="text" {...input} placeholder="" className='wid'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>              
               </Grid>


    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="Abstract Reosoning Thoughts">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt "> <b>4.</b> Abstract Reasoning Thoughts:</label>
                           
                          <input type="text" {...input} placeholder="" className='wid'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               

               </Grid>

    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="Judgement/Calculation">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt"> <b>5.</b>  Judgement/Calculation:</label>
                           
                          <input type="text" {...input} placeholder="" className='wid' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>              
               </Grid>



<div className='mb-3'> <h5> <b>6.</b> Cranial Nerve Examination</h5>  </div>





<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Olfoctory">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" "><b>(i)</b> Olfactory:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Optic">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=""><b>(ii)</b> Optic:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Occulomotor">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=""> <b>(iii)</b>  Occulomotor:</label>
                           
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
                    <Field name="Trochlear">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" "> <b>(iv)</b> Trochlear:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Abducens">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=""> <b>(v)</b> Abducens:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Trigeminal">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=""> <b>(vi)</b> Trigeminal:</label>
                           
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
                    <Field name="Facial">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" "> <b>(vii)</b> Facial:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Vestibular Cochlear">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=""> <b>(viii)</b> Vestibular Cochlear:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Glossopharyngeal">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=""> <b>(ix)</b> Glossopharyngeal:</label>
                           
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
                    <Field name="Vagur">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" "> <b>(x)</b> Vagus:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Spinal Accessory">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=""> <b>(xi)</b>  Spinal Accessory:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Hypoglossal">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=""> <b>(xii)</b> Hypoglossal:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               </Grid>




<div className='mb-3'> <h5> <b>7.</b> Sensory Examination</h5>  </div>





    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="Superfical(Touch/Pain/Temperature/Pressure)">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt">Superfical(Touch/Pain/Temperature/Pressure):</label>
                           
                          <input type="text" {...input} placeholder="" className='wid'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>              
               </Grid>


    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="Deep(Joint movement sense/Joint Position sense/vibration)">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt ">  Deep(Joint movement sense/Joint Position sense/vibration):</label>
                           
                          <input type="text" {...input} placeholder="" className='wid'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               

               </Grid>

    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="Cortical(Tactile localization/2-point discrimination/stereognosis/barognosis/graphesthesia/person)">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt">   Cortical(Tactile localization/2-point discrimination /stereognosis /barognosis/graphesthesia/person):</label>
                           
                          <input type="text" {...input} placeholder="" className='wid' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>              
               </Grid>




<div className='mb-3'> <h5> <b>8.</b> Sensory Examination</h5>  </div>



<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Intoct">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" "> Intact:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Decreased">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Decreased:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Exaggerated">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Exaggerated:</label>
                           
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
                    <Field name="Inaccurate">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" "> Inaccurate:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Absent">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Absent:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Inconsistent">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Inconsistent:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               </Grid>




<div className='mb-3'> <h5> <b>9.</b> Motor Assessment </h5>  </div>



<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Muscle Power">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" "> Muscle Power:</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Rom-Active/Passive">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">ROM-Active/Passive:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Muscle Girth">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Muscle Girth:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               </Grid>






<div className='mb-3'> <h5> <b>10.</b> Deep Tenden Reflexes</h5>  </div>



<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Biceps(C5,C6)">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" "> Biceps(C<sub>5</sub> ,C<sub>6</sub>):</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Triceps">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Triceps(C<sub>7</sub> ,C<sub>8</sub>):</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Patellor">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Patellor(L<sub>2</sub> ,L<sub>3</sub> ,L<sub>4</sub>):</label>
                           
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
                    <Field name="Hamstrings">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" "> Hamstrings(L<sub>5</sub> ,S<sub>1</sub> ,S<sub>2</sub>):</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Ankle">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Ankle(S<sub>1</sub> ,S<sub>2</sub> ):</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              
               </Grid>






<div className='mb-3'> <h5> <b>11.</b> Superficial Reflexes</h5>  </div>





    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="Babinski Sign">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt">Babinski Sign:</label>
                           
                          <input type="text" {...input} placeholder="" className='wid'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>              
               </Grid>









<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div className="fullw10">
                   <label> <b>12.</b>Involuntary Movement  </label>
                   <Field name="Involuntory Movement" component="select">
              <option />
              <option value="Intentionol Tremor">Intentionol Tremor</option>
              <option value="Posturol Tremor"> Posturol Tremor</option>
             <option value="Resting Tremor"> Resting Tremor</option>
             
                  </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Voluntory Control:">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Voluntary Control:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              
               </Grid>








<div className='mb-3'> <h5> <b>13.</b> Co-ordination Assessment</h5>  </div>




<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Finger to finger">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Finger to finger:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Finger to Nose">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Finger to Nose:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>



<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                 <div>
                    <Field name="Finger to Therapist finger">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Finger to Therapist finger:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="Alternate nose to finger">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Alternate nose to finger:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>


    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Finger  opposition">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Finger  opposition:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Mass Grarp">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Mass Grasp:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>


<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Pronation/Supination">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Pronation/Supination:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Topping(hand & foot)">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Topping(hand & foot):</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>



<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                 <div>
                    <Field name="Alternate heel to knee & heel to toe">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Alternate heel to knee & heel to toe:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="Toe to examiner's finger">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Toe to examiner's finger:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>


    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Heel on Skin">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Heel on Skin:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Drowing a circle(hand & foot)">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Drawing a circle(hand & foot):</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>







<div className='mb-3'> <h5> <b>14.</b> Balance Assessment</h5>  </div>







<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                 <div>
                    <Field name="Static">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Static:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="Dynamic">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Dynamic:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>


    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Berg Balance scale">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Berg Balance scale:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="functional balance grades">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">functional balance grades:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>






<div className='mb-3'> <h5> <b>15.</b> Respiratory Assessment</h5>  </div>




<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Chest expansion">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Chest expansion:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Type, Depth, Pattern">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Type, Depth, Pattern:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>



<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                 <div>
                    <Field name="Ventilation-mode">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Ventilation-mode:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="Auscultation">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Auscultation:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>


    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Percussion">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Percussion:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="PFT">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">PFT:</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>





    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="Bladder & Bower Function">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt"> <b>16.</b> Bladder & Bower Function:</label>
                           
                          <input type="text" {...input} placeholder="" className='wid'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>              
               </Grid>






    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="Gait Assessment">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt"> <b>17.</b> Gait Assessment:</label>
                           
                          <input type="text" {...input} placeholder="" className='wid'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>              
               </Grid>


    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="ADL Assessment">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt "> <b>18.</b> ADL Assessment:</label>
                           
                          <input type="text" {...input} placeholder="" className='wid'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
           
               </Grid>






         
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={12} xs={12}>
                    <div>
                    <Field name="inverstigation">
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
                    <Field name="TREATMENT GOAL">
                      {({ input }) => (
                        <div className="">
                          <label className="widthsame bold">TREATMENT GOAL-</label>
                          <input type="text" {...input} placeholder="" className='lastw'/>
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
export default Neuro;