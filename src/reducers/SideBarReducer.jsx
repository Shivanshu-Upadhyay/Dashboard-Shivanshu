import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  CLOSE_DROPDOWN,
  OPEN_DROPDOWN,
  OPEN_TOP_DRAWER,
  CLOSE_TOP_DRAWER,
} from "../actions/types";

export const sideBarState = (state = false, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return true;
    case CLOSE_SIDEBAR:
      return false;
    default:
      return state;
  }
};

export const dropDownState = (state = false, action) => {
  switch (action.type) {
    case CLOSE_DROPDOWN:
      return false;
    case OPEN_DROPDOWN:
      return true;
    default:
      return state;
  }
};

export const topDrawerState = (state = false, action) => {
  switch (action.type) {
    case OPEN_TOP_DRAWER:
      return true;
    case CLOSE_TOP_DRAWER:
      return false;
    default:
      return state;
  }
};
