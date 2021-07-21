import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { ButtonGroup } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DoneAllTwoToneIcon from "@material-ui/icons/DoneAllTwoTone";
import CustomFab from "../Fab/CustomFab";

import FormDialog from "../Forms/AddAppointment";
import { connect } from "react-redux";
import {
  addApointment,
  getAllApointments,
} from "../../actions/appointmentAction";

class DemoApp extends React.Component {
  state = {
    weekendsVisible: true,
    events: [],
    openAddAppointmentForm: false,
    showMoreDetails: null,
  };
  async componentDidMount() {
    await this.props.getAllApointments();
    window.scrollTo(0, 0);
  }

  setOpenAddAppointmentForm = (isOpen) => {
    this.setState({ openAddAppointmentForm: isOpen });
  };
  selectInfo = {};

  addEvent = (newEvent) => {
    this.props.addApointment(newEvent);
  };

  events = this.props.appointments.map((appointment) => {
    return { ...appointment, id: String(appointment._id) };
  });

  render() {
    return (
      <div className="demo-app">
        {/* {this.renderSidebar()} */}
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            slotMinTime="08:00"
            slotMaxTime="20:00"
            scrollTime=""
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            slotDuration="00:05:00"
            initialView="timeGridDay"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            events={this.props.appointments}
            // initialEvents={this.props.appointments} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={this.renderEventContent} // custom render function
            // eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
          />
          {this.state.openAddAppointmentForm ? (
            <FormDialog
              addEvent={this.addEvent}
              startStr={this.selectInfo.startStr}
              endStr={this.selectInfo.endStr}
              allDay={this.selectInfo.allDay}
              open={this.state.openAddAppointmentForm}
              setOpen={this.setOpenAddAppointmentForm}
            />
          ) : undefined}
        </div>
      </div>
    );
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible,
    });
  };

  handleDateSelect = (selectInfo) => {
    // let title = prompt("Please enter a new title for your event");
    // let calendarApi = selectInfo.view.calendar;

    // calendarApi.unselect(); // clear date selection

    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay,
    //   });
    // }
    this.selectInfo = selectInfo;
    // console.log(selectInfo);
    this.setState({ openAddAppointmentForm: true });
  };

  // handleEventClick = (clickInfo) => {
  //   console.log(clickInfo);
  // };

  handleEvents = (events) => {
    this.setState({
      events: events,
    });
  };
  renderEventContent = (eventInfo) => {
    const data = eventInfo.event.extendedProps.formData;
    return (
      // <div>
      //   <b>{eventInfo.timeText}</b>
      //   <i>{eventInfo.event.title}</i>
      // </div>

      <div
        class="ui message"
        style={{ width: "90%" }}
        onMouseEnter={() =>
          this.setState({ showMoreDetails: eventInfo.event.extendedProps._id })
        }
        onMouseLeave={() => {
          this.setState({ showMoreDetails: null });
        }}
      >
        <div class="header">
          {eventInfo.event.title} - ({eventInfo.timeText})
        </div>
        {this.state.showMoreDetails === eventInfo.event.extendedProps._id &&
          data &&
          data.patient &&
          data.treatment && (
            <div>
              <div className="ui right aligned header">
                <ButtonGroup
                  size="small"
                  aria-label="small outlined button group"
                  color="primary"
                >
                  <div
                    style={{
                      marginRight: "1rem",
                    }}
                  >
                    <CustomFab color="inherit" label="visited" title=" Visited">
                      <DoneAllTwoToneIcon fontSize="large" color="primary" />
                    </CustomFab>
                  </div>
                  <div style={{ marginRight: "1rem" }}>
                    <CustomFab color="inherit" label="Edit" title="Edit">
                      <EditIcon color="default" fontSize="large" />
                    </CustomFab>
                  </div>
                  <div style={{ marginRight: "1rem" }}>
                    <CustomFab color="inherit" label="Delete" title="Delete">
                      <DeleteForeverIcon fontSize="large" color="secondary" />
                    </CustomFab>
                  </div>
                </ButtonGroup>
              </div>
              <ul class="list">
                <li>
                  Patient:{" "}
                  {`${data.patient.firstName} ${data.patient.lastName}`}
                </li>
                <li>Treatment: {data.treatment.name}</li>
              </ul>
            </div>
          )}
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return { appointments: state.appointments };
};

export default connect(mapStateToProps, { addApointment, getAllApointments })(
  DemoApp
);
