import React from "react";
import { Grid, ButtonBase, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BasicContainer from "../../Container/BasicContainer";
import img from "../../../assets/topbar.jpg";
import ExerciseForm from "../Exercise_Prescription/ExerciseForm";
import { connect } from "react-redux";
import { addExercise } from "../../../actions/exerciseAction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 256,
    height: 256,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const Exercise = (props) => {
  const classes = useStyles();
  return (
    <BasicContainer>
      <Grid container spacing={2}>
        <Grid item>
          <Typography gutterBottom variant="subtitle1">
            Exercise Name
          </Typography>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <ExerciseForm />
          </Grid>
          <Grid item>
            <Button
              color="primary"
              onClick={() => {
                props.addExercise({ ...props.exercise, test: "abc" });
              }}
            >
              ADD
            </Button>
            {/* <span>{props.match.params.id}</span> */}
          </Grid>
        </Grid>
      </Grid>
    </BasicContainer>
  );
};

const mapStateToProps = (state, pre) => {
  console.log(pre, "Pre");
  const ex = state.exercises.filter((exercise) => {
    if (exercise._id == pre.match.params.id) {
      return true;
    } else {
      return false;
    }
  });
  console.log(pre.match.params.id, ex);
  return {
    exercise: state.exercises.filter((exercise) => {
      if (exercise._id == pre.match.params.id) {
        return true;
      } else {
        return false;
      }
    })[0],
  };
};

export default connect(mapStateToProps, { addExercise })(Exercise);
