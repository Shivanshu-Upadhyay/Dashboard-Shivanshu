import { CHANGE_HEADING } from "../actions/types";

export const tableHeading = (state = "APPOINTMENTS", obj) => {
  switch (obj.type) {
    case CHANGE_HEADING:
      return (obj.payload.heading );
    default:
      return state;
  }
};
