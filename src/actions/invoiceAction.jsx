import physiomaticApi from "../api/physiomaticApi";

import { ADD_INVOICE, ERROR, GET_INVOICE_BY_PATIENT_ID } from "./types";

export const addInvoice = (invoiceData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.post(
      "/api/invoice/addInvoice",
      invoiceData
    );
    dispatch({
      type: ADD_INVOICE,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};

export const getInvoicesByPatientID = (patientId) => async (dispatch) => {
  try {
    const response = await physiomaticApi.get(
      `/api/invoice/patient/${patientId}`
    );
    dispatch({
      type: GET_INVOICE_BY_PATIENT_ID,
      payload: response.data.invoices,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};
