import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



function DatePicker() {

  const [showSearch, setShowSearch] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  console.log(startDate, endDate);

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div>
      {showSearch && <DateRangePicker ranges={
        [selectionRange]} onChange=
        {handleSelect} />}
      <Button onClick={() =>
        setShowSearch(!showSearch)}
        variant="outlined">Search Date</Button>

    </div>
  )
}

export default DatePicker
