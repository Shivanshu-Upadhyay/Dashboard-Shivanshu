import React from "react";
import AppointmentTable from "../Tables/AppointmentTable";
import EditIcon from "@material-ui/icons/Edit";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import TreatmentCalender from "../Forms/TreatmentCalender";
import { Button } from "@material-ui/core";
import DateRangeIcon from '@material-ui/icons/DateRange';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { Tooltip } from "@material-ui/core";



const Treatment = () => {
  const [selectDays, setSelectDays] = React.useState([]);
  const [showCalender, setShowCalender] = React.useState(false);

  const treatmentTableHeading = [
    { id: "date", label: "Date" },
    { id: "patientid", label: "Patient ID" },
    { id: "patientname", label: "Patient Name" },
    { id: "consultantname", label: "Consultant Name" },
    { id: "amount", label: "Amount" },
    { id: "actions", label: "Actions" },
  ];
  const treatmentData = [];
  return (
    <div>
      <Tooltip title="Short Data" >
      <Button
        className="showCalender"
        variant="contained"
        
        onClick={() => {
          setShowCalender(true);
        }}
      >
        <DateRangeIcon />
      </Button>
      </Tooltip>

      <Tooltip title="Reset">
      <Button
        variant="contained"
        
        style={{ marginLeft: "30px" }}
        onClick={() => { }}

      >
        <RotateLeftIcon />
      </Button>
      </Tooltip>
      

      {showCalender && (
        <div>
          <TreatmentCalender
            selectDays={selectDays}
            setSelectDays={setSelectDays}
          />
          {/* <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setShowCalender(false);
              selectDays.forEach((day) => {});
            }}
          >
            Search Data
          </Button> */}
        </div>
      )}
      <br />
      <br />
      <br />

      <div className="table-component">
        <AppointmentTable
          headings={treatmentTableHeading}
          rows={treatmentData}
        />
      </div>
    </div>
  );
};

export default Treatment;
