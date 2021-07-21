import React from "react";

import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import PointingError from "../LandingPage/ErrorComponent/PointingError";
function CalenderForm({ open }) {
  const renderForm = () => {
    return (
      <div>
        <div>
          <form class="ui form">
            <div class="field">
              <label>Schedule Slot*</label>

              <select class="form-select" aria-label="Default select example">
                <option selected>5 min</option>
                <option value="1">15 min</option>
                <option value="2">30 min</option>
                <option value="3">45 min</option>
                <option value="4">60 min</option>
              </select>
            </div>
            <div class="field">
              <label>Schedule Times*</label>

              <select class="form-select" aria-label="Default select example">
                <option selected>1</option>
                <option value="1">3</option>
                <option value="2">5</option>
              </select>
            </div>
            <div class="field">
              <label>Display Appointments Of*</label>
            </div>
            <div class="field">
              <label>Days After Current Date</label>

              <select class="form-select" aria-label="Default select example">
                <option selected>Please Select</option>
                <option value="1">1 Day </option>
                <option value="2">2 Days</option>
                <option value="3">3 Days</option>
                <option value="4">4 Days</option>
                <option value="5">5 Days</option>
                <option value="6">6 Days</option>
                <option value="7">7 Days</option>
                <option value="8">8 Days</option>
                <option value="9">9 Days</option>
                <option value="10">10 Days</option>
                <option value="11">11 Days</option>
                <option value="12">12 Days</option>
                <option value="13">13 Days</option>
                <option value="14">14 Days</option>
                <option value="15">15 Days</option>
                <option value="16">16 Days</option>
                <option value="17">17 Days</option>
                <option value="18">18 Days</option>
                <option value="19">19 Days</option>
                <option value="20">20 Days</option>
                <option value="21">21 Days</option>
                <option value="22">22 Days</option>
                <option value="23">23 Days</option>
                <option value="24">24 Days</option>
                <option value="25">25 Days</option>
                <option value="26">26 Days</option>
                <option value="27">27 Days</option>
                <option value="28">28 Days</option>
                <option value="29">29 Days</option>
                <option value="30">30 Days</option>
                <option value="31">31 Days</option>
              </select>
            </div>
            <div class="field">
              <label>Days Before Current Date</label>

              <select class="form-select" aria-label="Default select example">
                <option selected>Please Select</option>
                <option value="1">1 Day </option>
                <option value="2">2 Days</option>
                <option value="3">3 Days</option>
                <option value="4">4 Days</option>
                <option value="5">5 Days</option>
                <option value="6">6 Days</option>
                <option value="7">7 Days</option>
                <option value="8">8 Days</option>
                <option value="9">9 Days</option>
                <option value="10">10 Days</option>
                <option value="11">11 Days</option>
                <option value="12">12 Days</option>
                <option value="13">13 Days</option>
                <option value="14">14 Days</option>
                <option value="15">15 Days</option>
                <option value="16">16 Days</option>
                <option value="17">17 Days</option>
                <option value="18">18 Days</option>
                <option value="19">19 Days</option>
                <option value="20">20 Days</option>
                <option value="21">21 Days</option>
                <option value="22">22 Days</option>
                <option value="23">23 Days</option>
                <option value="24">24 Days</option>
                <option value="25">25 Days</option>
                <option value="26">26 Days</option>
                <option value="27">27 Days</option>
                <option value="28">28 Days</option>
                <option value="29">29 Days</option>
                <option value="30">30 Days</option>
                <option value="31">31 Days</option>
              </select>
            </div>
            <div class="field">
              <label>Appointments View*</label>

              <select class="form-select" aria-label="Default select example">
                <option selected>Day View</option>
                <option value="1">Week View</option>
                <option value="2">Month View</option>
              </select>
            </div>
            <div style={{ textAlign: "center" }}>
              <button className="ui primary button" onClick={onSaveTableData}>
                Save
              </button>
              <button className="ui button" onClick={onDiscardChanges}>
                Discard
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const handleDateChange = (isStartTime, time, index) => {
    setState((preState) => {
      const obj = [...preState];

      if (isStartTime === 0) {
        obj[index] = { ...obj[index], startTime: new Date(time) };
      } else if (isStartTime === 1) {
        obj[index] = { ...obj[index], endTime: new Date(time) };
      } else {
        obj[index] = { ...obj[index], breakStartTime: new Date(time) };
      }
      return obj;
    });
  };

  const handleDisable = (index) => {
    setState((curState) => {
      const obj = [...curState];
      obj[index].disable = !obj[index].disable;
      return obj;
    });
  };
  const addMinutes = (date, minutes) => {
    return new Date(new Date(date).getTime() + minutes * 60000);
  };

  const timer = (isStartTime, date, index, disable) => {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimePicker
          showTodayButton
          todayLabel="now"
          disabled={disable}
          label="Select Time"
          value={date}
          minutesStep={5}
          onChange={(time) => handleDateChange(isStartTime, time, index)}
        />
      </MuiPickersUtilsProvider>
    );
  };
  const initialState = [
    {
      disable: false,
      day: "Monday",
      startTime: undefined,
      endTime: undefined,
      breakStartTime: undefined,
    },
    {
      disable: false,
      day: "Tuesday",
      startTime: undefined,
      endTime: undefined,
      breakStartTime: undefined,
    },
    {
      disable: false,
      day: "Wednesday ",
      startTime: undefined,
      endTime: undefined,
      breakStartTime: undefined,
    },
    {
      disable: false,
      day: "Thursday",
      startTime: undefined,
      endTime: undefined,
      breakStartTime: undefined,
    },
    {
      disable: false,
      day: "Friday",
      startTime: undefined,
      endTime: undefined,
      breakStartTime: undefined,
    },
    {
      disable: false,
      day: "Saturday",
      startTime: undefined,
      endTime: undefined,
      breakStartTime: undefined,
    },
    {
      disable: false,
      day: "Sunday",
      startTime: undefined,
      endTime: undefined,
      breakStartTime: undefined,
    },
  ];
  const tableKey = "calenderData";
  const savedTableData = JSON.parse(localStorage.getItem(tableKey));

  const [state, setState] = React.useState(
    savedTableData ? savedTableData.state : initialState
  );
  const [duration, setDuration] = React.useState(
    savedTableData ? savedTableData.duration : 40
  );

  const renderTable = () => {
    return (
      <table class="ui compact celled definition table">
        <thead>
          <tr>
            <th></th>
            <th>Day</th>
            <th>Opening Time</th>
            <th>Closing time</th>
            <th>Break At</th>
            <th>Break-Time</th>
          </tr>
        </thead>
        <tbody>
          {state.map(
            ({ disable, day, startTime, endTime, breakStartTime }, index) => {
              return (
                <tr>
                  <td class="collapsing">
                    <div class="ui fitted slider checkbox">
                      <input
                        type="checkbox"
                        checked={!disable}
                        onClick={() => {
                          handleDisable(index);
                        }}
                      />
                      <label></label>
                    </div>
                  </td>
                  <td> {day}</td>
                  <td>
                    {timer(
                      0,
                      new Date(startTime || Date.now()),
                      index,
                      disable
                    )}
                  </td>
                  <td>
                    {timer(1, new Date(endTime || Date.now()), index, disable)}
                  </td>
                  <td>
                    {timer(
                      2,
                      new Date(breakStartTime || Date.now()),
                      index,
                      disable
                    )}
                  </td>
                  <td>{breakStartTime ? getRange(breakStartTime) : "Break"}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    );
  };
  function pad(n, width, z) {
    z = z || "0";
    n = n + "";
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  const getRange = (date) => {
    let h1 = "AM";
    let h2 = "AM";
    const from = new Date(date);
    const to = new Date(addMinutes(from, duration));
    let hrs1 = from.getHours();
    if (hrs1 > 12) {
      hrs1 = Math.floor(hrs1 - 12);
      h1 = "PM";
    }
    const min1 = from.getMinutes();
    let hrs2 = to.getHours();
    if (hrs2 > 12) {
      hrs2 = Math.floor(hrs2 - 12);
      h2 = "PM";
    }
    const min2 = to.getMinutes();
    if (hrs1 === 12) h1 = "PM";
    if (hrs2 === 12) h2 = "PM";
    return (
      <h6>{`${pad(hrs1, 2)} :${pad(min1, 2)} ${h1} - ${pad(hrs2, 2)} :${pad(
        min2,
        2
      )} ${h2} `}</h6>
    );
  };

  const handleDurationChange = (evt) => {
    setDuration(evt.target.value);
  };

  const onSaveTableData = () => {
    localStorage.setItem(tableKey, JSON.stringify({ duration, state }));
  };

  const onDiscardChanges = () => {
    setDuration(savedTableData.duration);
    setState(savedTableData.state);
  };

  return open ? (
    <div>
      {renderForm()}
      <h3 class="ui dividing header">Working Day and hours</h3>
      <div style={{ textAlign: "right" }}>
        <div class="ui right labeled input">
          <input
            type="text"
            placeholder="Enter Break Duration.."
            onChange={handleDurationChange}
            value={duration}
          />
          <div class="ui basic label">Minutes</div>
        </div>
        {renderTable()}
        <div style={{ textAlign: "center" }}>
          <button className="ui primary button" onClick={onSaveTableData}>
            Save
          </button>
          <button className="ui button" onClick={onDiscardChanges}>
            Discard
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default CalenderForm;
