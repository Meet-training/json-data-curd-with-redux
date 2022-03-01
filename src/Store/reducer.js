import * as types from "./actionType";

const initialState = {
  airlines: [],
  getPassenger: [],
  passengerRecord: {},
};

const recordsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_AIRLINE:
      return {
        ...state,
        airlines: action.payload,
      };
    case types.GET_PASSENGER:
      return {
        ...state,
        getPassenger: action.payload,
      };
    case types.ADD_PASSENGER:
    case types.GET_SINGLE_PASSENGER:
      return {
        ...state,
        passengerRecord: action.payload,
      };
    case types.EDIT_PASSENGER:
      return {
        ...state,
      };
    case types.DELETE_PASSENGER:
    default:
      return state;
  }
};

export default recordsReducers;
