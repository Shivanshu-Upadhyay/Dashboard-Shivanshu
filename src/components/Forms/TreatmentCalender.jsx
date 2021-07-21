import React from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

export default function TreatmentCalender({ selectDays, setSelectDays }) {
  // constructor(props) {
  //   super(props);
  //   this.handleDayClick = this.handleDayClick.bind(this);
  //   this.state = {
  //     selectedDays: [],
  //   };
  // }

  const handleDayClick = (day, { selected }) => {
    const selectedDays = selectDays.concat();
    if (selected) {
      const selectedIndex = selectedDays.findIndex((selectedDay) =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    setSelectDays(selectedDays);
  };

  return (
    <div>
      <DayPicker selectedDays={selectDays} onDayClick={handleDayClick} />
    </div>
  );
}
