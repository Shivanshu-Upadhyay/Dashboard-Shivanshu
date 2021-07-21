import { CHANGE_HEADING } from "./types";

export const changeHeading = (heading) => {
  const obj = {
    type: CHANGE_HEADING,
    payload: {
      heading: heading,
      
    },
  };
  return obj;
};
