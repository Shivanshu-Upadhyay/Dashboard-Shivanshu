import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 450,
    
    marginLeft: 350,
    marginBottom:20,
   
  },
});

function valuetext(value) {
  return `${value}°C`;
}

 function NewSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     




      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
      />
     
    </div>
  );
}


export default NewSlider;