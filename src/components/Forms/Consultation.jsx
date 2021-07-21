import React from "react";
import AppointmentTable from "../Tables/AppointmentTable";
import EditIcon from "@material-ui/icons/Edit";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import TreatmentCalender from "../Forms/TreatmentCalender";
import { Button, Dialog } from "@material-ui/core";
// import BasicContainer from "../Container/BasicContainer";
import { Tooltip } from "@material-ui/core";
//dialog
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from "@material-ui/core/DialogActions";


//icons
import SearchIcon from '@material-ui/icons/Search';
import DateRangeIcon from '@material-ui/icons/DateRange';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import CloseIcon from '@material-ui/icons/Close';

const Consultation = () => {
  const [selectDays, setSelectDays] = React.useState([]);
  const [showCalender, setShowCalender] = React.useState(false);

  const consultationTableHeading = [
    { id: "date", label: "Date" },
    { id: "patientid", label: "Patient ID" },
    { id: "patientname", label: "Patient Name" },
    { id: "consultantname", label: "Consultant Name" },
    { id: "amount", label: "Amount" },
    { id: "actions", label: "Actions" },
  ];
  const consultationData = [];

  const handleClose = () => {
    setShowCalender(false);
  };
  return (
    <div>
      {/* <div style={{ textAlign: "center" }}> */}
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
      {/* </div> */}


      <br />
      <br />
      <br />

      <div className="table-component">
        <AppointmentTable
          headings={consultationTableHeading}
          rows={consultationData}
        />
      </div>

      {showCalender && (
        <div>
          <Dialog
            maxWidth="md"
            open={showCalender}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle style={{ color: "blue", fontSize: "bold" }} id="responsive-dialog-title" className="text-center">
              {"Sort Data"}
            </DialogTitle>
            <DialogContent>
              <TreatmentCalender
                selectDays={selectDays}
                setSelectDays={setSelectDays}
              />
              <DialogActions>
                <Button
                  autoFocus
                  onClick={handleClose}
                  variant="contained"
                  // color="secondary"
                  size="large"
                >
                  <CloseIcon />
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                // onClick={() => {
                //   setShowCalender(false);
                //   selectDays.forEach((day) => {
                //     var d = JSON.stringify(day);
                //     var q = d.slice(1);
                //     var anotherDate = q.slice(0, -15);
                //     var p = anotherDate.replace(/-/g, "/");
                //     var day = p.substr(8, 10) + "/";
                //     var year = p.substr(0, 4);
                //     var month = p.substr(5, 3);
                //     var l;
                //     var er;
                //     var c;
                //     var n;
                //     var m;
                //     var o;
                //     var finalDate = day + month + year;

                //     if (finalDate.charAt(3) == "0") {
                //       l = finalDate.substr(0, 3);
                //       er = finalDate.substr(4, 9);
                //       c = l + er;
                //     } else {
                //       c = finalDate;
                //     }

                //     if (finalDate.charAt(0) == "0") {
                //       n = c.substr(0, 3);
                //       m = c.substr(4, 9);
                //       o = n + m;
                //     } else {
                //       o = c;
                //     }
                //     myArr.push(o);
                //   });
                //   filterData();
                // }}
                >
                  <SearchIcon />
                </Button>
              </DialogActions>
            </DialogContent>

          </Dialog>

        </div>
      )}

    </div>
  );
};

export default Consultation;
