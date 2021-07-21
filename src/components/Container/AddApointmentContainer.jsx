import React from "react";
import BasicContainer from "./BasicContainer";
import Calender from "../Calendar/Calendar";

function AddAppointmentContainer() {
  return (
    <div>
      <BasicContainer>
        <Calender />
      </BasicContainer>
    </div>
  );
}

export default AddAppointmentContainer;
