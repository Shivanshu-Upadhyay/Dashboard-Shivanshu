import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Step1 from "../EhrComponent/Step1";
import Step2 from "../EhrComponent/Step2";
import Step3 from "../EhrComponent/Step3";
import { Form } from "react-final-form";
import Validator from "validator";
// import _ from "lodash";
import { connect } from "react-redux";
import { editPatient, getPatientById } from "../../actions/patientAction";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["Quick Add Patient", "Enter detailed info", "More info"];
}



function VerticalLinearStepper(props) {
  useEffect(() => {
    console.log(props.id);
    props.getPatientById(props.id);
  }, []);


  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 onSelect={(val) => {
          setId(val)
        }} />;
      default:
        return "Unknown step";
    }
  }
  const history = useHistory();

  const onSubmit = (formvalues) => {
    console.log('form submitted')
    props.editPatient(props.id, formvalues);
    history.push('/clinictoday');
    window.location.reload();
  };

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [id, setId] = React.useState('');

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const validate = (formValues) => {
    const errors = {};
    // email
    //Ehr Yebir
    // if (!formValues.refNumber)
    //   errors.refNumber = "Clinical Reference number is required";
    // if (!formValues.date) errors.date = "Date is required";
    if (formValues.mobile && !Validator.isDecimal(formValues.mobile))
      errors.mobile = "Only numerical values allowed";
    // if (!formValues.dob) errors.dob = "Date of Birth is required";
    // if (formValues.age && !Validator.isDecimal(formValues.age))
    //   errors.age = "Only numerical values allowed";
    // if (!formValues.age) errors.age = "Age is required";
    if (formValues.email && !Validator.isEmail(formValues.email))
      errors.email = "Enter correct email";

    //Ehr Ashu

    if (formValues.height && !Validator.isDecimal(formValues.height))
      errors.height = "Only numerical values are allowed";

    if (formValues.weight && !Validator.isDecimal(formValues.weight))
      errors.weight = "Only numerical values are allowed";

    //Ehr Joy

    if (formValues.id && !Validator.isDecimal(formValues.id))
      errors.id = "Only numerical values are allowed";
    if (formValues.address1 && formValues.address2.length < 5)
      errors.address2 = "Address should me minimum 5 characters long";
    // if (formValues.address1 && formValues.address2.length < 5)
    // errors.address2 = "Address should me minimum 5 characters long";
    if (formValues.phone && !Validator.isDecimal(formValues.phone))
      errors.phone = "Only numerical values allowed";

    if (
      formValues.contactpersonnumber &&
      !Validator.isDecimal(formValues.contactpersonnumber)
    )
      errors.contactpersonnumber = "Only numerical values allowed";

    return errors;
  };

  return (
    <div>
      <Form validate={validate} onSubmit={onSubmit} initialValues={{
        firstName: props.selectedPatient.firstName,
        lastName: props.selectedPatient.lastName,
        email: props.selectedPatient.email,
        mobile: props.selectedPatient.mobile,
        dob: props.selectedPatient.dob,
        consultant: props.selectedPatient.consultant,
        gender: props.selectedPatient.gender,
        patientType: props.selectedPatient.patientType,
        dominance: props.selectedPatient.dominance,
        weight: props.selectedPatient.weight,
        // height: props.selectedPatient.height,
        status: props.selectedPatient.status,
        bmi: props.selectedPatient.bmi,
        occupationdescription: props.selectedPatient.occupationdescription,
        city: props.selectedPatient.city,
        pincode: props.selectedPatient.pincode
      }}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    {getStepContent(index)}
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        {activeStep === steps.length ? <Button variant="contained" type="submit"
                          color="primary" className={classes.button}>Submit</Button> : <Button variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}>Next</Button>}
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </form>
        )}
      </Form>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user, selectedPatient: state.selectedPatient };
};

export default connect(mapStateToProps, { editPatient, getPatientById })(VerticalLinearStepper);
