import { Grid } from "@material-ui/core";
import React from "react";
// I have download this library. - Ayush Garg
import { Segment } from 'semantic-ui-react';
import BasicContainer from "../../Container/BasicContainer";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import ExerciseCards from "./ExerciseCards";
import { connect } from "react-redux";
import { getExerciseById, getExercises } from "../../../actions/exerciseAction";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
    minWidth: 200,
    minHeight: 10,
    margin: theme.spacing(2),
  },
  input: {
    marginTop: theme.spacing(-2),
    fontSize: 18,
  },
}));

function ProgramBuilder(props) {
  React.useEffect(() => {
    props.getExercises();
  }, []);

  const classes = useStyles();

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const categories = [
    "JAW",
    "CERVICAL",
    "SHOULDER",
    "ELBOW",
    "HAND & WRIST",
    "THORACIC SPINE",
    "LUMBAR",
    "HIP JOINT",
    "KNEE JOINT",
    "FOOT & ANKLE",
  ];

  // const categoryData = [
  //   {
  //    category : "Jaw",
  //    name : "TMJ Protrusion/Retrusion",
  //    description : "Sit Upright in the Chair, Push Your Jaw Forward and Backward as far as you can.",
  //    image : ""

  //   }
  // ];

  const [category, setCategory] = React.useState("");

  return (
    <div>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit }, form) => (
          <form onSubmit={handleSubmit} className="ui form">
            <Grid container spacing={1}>
              <Grid xs={8}>
                <div class="ui fluid action input">
                  <input type="text" placeholder="Search..." />
                  <button class="ui button">Search</button>
                </div>
              </Grid>
              <Grid xs={4}>
                <div className="item">
                  <FormControl variant="outlined">
                    <InputLabel className={classes.input}>Category</InputLabel>
                    <Field name="category" type="select">
                      {({ input, meta }) => (
                        <Select
                          // id="category"
                          className={classes.selectEmpty}
                          {...input}
                        // onChange={handleChange}
                        >
                          {categories.map((c) => (
                            <MenuItem
                              key={c}
                              value={c}
                              onClick={() => {
                                setCategory(c);
                              }}
                            >
                              {c}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    </Field>
                  </FormControl>
                </div>
              </Grid>
            </Grid>
            <br />
            <br />
            <br />
            <Grid container spacing={1}>
              <Grid xs={8} style={{'marginRight' : '8rem'}}>
              <Grid container spacing={1}>
              {props.exercises.map((exercise) => {
                return (
                  <Grid xs={6}>
                    <ExerciseCards exercise={exercise} key={exercise._id} />
                  </Grid>
                );
              })}
              {props.exercises.length}
              </Grid>
              </Grid>
              <Grid xs={3}>
              <Grid container spacing={1}>
                <Grid xs={10}>
                <Segment>Reps  - formValues.reps  <br></br>
                        Hold Time -  formValues.holdTime  <br></br>
                        Weight-  formValues.weight  <br></br>
                        Theraband -  formValues.theraband  <br></br>
                        Sets - formValues.sets <br></br>
                        Hold Time -  formValues.holdTime  <br></br>
                </Segment>
                </Grid>
                </Grid>
              </Grid>
            </Grid>
            <br />
            <br />
            <br />
          </form>
        )}
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises,
  };
};

export default connect(mapStateToProps, { getExercises })(ProgramBuilder);
