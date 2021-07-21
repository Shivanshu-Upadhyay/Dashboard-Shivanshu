import {
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
  CLOSE_DROPDOWN,
  OPEN_DROPDOWN,
  OPEN_TOP_DRAWER,
  CLOSE_TOP_DRAWER,
} from "./types";

export const openSideBar = () => {
  return {
    type: OPEN_SIDEBAR,
  };
};
export const closeSideBar = () => {
  return {
    type: CLOSE_SIDEBAR,
  };
};
export const closeDropDown = () => {
  return {
    type: CLOSE_DROPDOWN, 
  };
};

export const openDropDown = () => {
  return {
    type: OPEN_DROPDOWN,
  };
};

export const openTopDrawer = () => {
  return {
    type: OPEN_TOP_DRAWER,
  };
};

export const closeTopDrawer = () => {
  return {
    type: CLOSE_TOP_DRAWER,
  };
};
