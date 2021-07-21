import React from "react";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import AppointmentForm from "./FormLayout2";
import $ from 'jquery';

export default function FormDialog(props) {

  React.useEffect(() => {
    $("#dialog").scrollTop(0);
  }, [])

  const handleClose = () => {
    props.setOpen(false);
  };


  const Transition = React.forwardRef(function Transition(props, ref) {
    return (
      <Slide direction="up" timeout={{ appear: 200 }} ref={ref} {...props} />
    );
  });


  const handleSubmit = (data) => {
    const eventData = {
      id: data._id,
      title: data.title,
      start: data.start,
      end: data.end,
      allDay: props.allDay,
      formData: data,
    };
    if (props.edit) {
      props.editAppointment(props.appointmentId, eventData);
    } else {
      props.addEvent(eventData);
    }

    props.setOpen(false);
  };


  return (
    <div>
      <Dialog
        maxWidth="md"
        id="dialog"
        TransitionComponent={Transition}
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            backgroundColor: "rgb(240,240,240)",
          },
        }}
      >
        <AppointmentForm
          startStr={props.startStr}
          endStr={props.endStr}
          onSubmit={handleSubmit}
          handleClose={handleClose}
        />
      </Dialog>
    </div>
  );
}
