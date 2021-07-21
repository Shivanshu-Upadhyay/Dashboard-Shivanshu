import { ADD_INVOICE, GET_INVOICE_BY_PATIENT_ID } from "../actions/types";

export const invoices = (state = [], action) => {
  switch (action.type) {
    case ADD_INVOICE:
      const invoice = state.map((inv) => {
        return inv;
      });
      invoice.push(action.payload);
      return invoice;
    case GET_INVOICE_BY_PATIENT_ID:
      return action.payload;
    default:
      return state;
  }
};
