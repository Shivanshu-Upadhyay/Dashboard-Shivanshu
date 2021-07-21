import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function CenteredGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ paddingBottom: "10px" }} style={{ paddingTop: "5px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Typography variant="h6" color="primary">{props.heading}</Typography></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { heading: state.tableHeading };
};

export default connect(mapStateToProps)(CenteredGrid);
