import { combineReducers } from "redux";
import { auth } from "./userReducer";
import { patients, selectedPatient } from "./patientReducer";

import { sideBarState, dropDownState, topDrawerState } from "./SideBarReducer";
import { tableHeading } from "./tableReducer";
import { ERROR } from "../actions/types";
import { treatments } from "./treatmentReducer";
import { appointments } from "./appointmentReducer";
import { feedbacks } from "./feedbackReducer";
import { invoices } from "./invoiceReducer";
import { demographicData } from './demographicDataReducer';
import { consentData } from './consentReducer';
import { motorData } from './motorExaminationReducer';
import { shoulderData } from './shoulderEvaluationReducer';
import { pediatricData } from './pediatricReducer';
import { kneeData } from './kneeReducers';
import { incomeData } from './incomeReducer';
import { expenseData } from './expenseReducer';
import { staffData } from './staffReducer';
import { physioData } from './physioReducer';
import { referrelData } from './referrelReducer';
import { randomTreatmentData } from './randomTreatmentReducer';
import { exercises, selectedExercises } from "./exerciseReducer";

const errors = (state = {}, action) => {
  switch (action.payload) {
    case ERROR:
      return { ...state, ...action.payload };

    default:
      return {};
  }
};

export default combineReducers({
  sideBarState,
  dropDownState,
  tableHeading,
  auth,
  topDrawerState,
  patients,
  errors,
  treatments,
  appointments,
  feedbacks,
  invoices,
  selectedPatient,
  exercises,
  selectedExercises,
  demographicData,
  motorData,
  shoulderData,
  pediatricData,
  kneeData,
  incomeData,
  expenseData,
  staffData,
  physioData,
  randomTreatmentData,
  referrelData,
  consentData
});
