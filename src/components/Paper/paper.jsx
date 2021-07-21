import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(5),
      width: theme.spacing(20),
      height: theme.spacing(12),
      marginLeft: theme.spacing(4),
      marginBottom: theme.spacing(-6),
      paddingTop: theme.spacing(2),
      zIndex: 1,
    },
  },
}));

export default function SimplePaper(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper
        elevation={3}
        style={{
          color: "#00203FFF",
          backgroundImage:
            "linear-gradient(to top left,rgb(0,105,148),rgb(240,240,240))",
        }}
      >
        <Typography variant="h2" align="center">
          {props.data}
        </Typography>
      </Paper>
    </div>
  );
}
