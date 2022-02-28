import * as types from "./actionType";

const initialState = {
  airlines: [],
  getrecords: [],
  record: {},
};

const recordsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_AIRLINE:
      return {
        ...state,
        airlines: action.payload,
      };
    case types.GET_RECORDS:
      return {
        ...state,
        getrecords: action.payload,
      };
    case types.ADD_RECORDS:
    case types.GET_SINGLE_RECORD:
      return {
        ...state,
        record: action.payload,
      };
    case types.EDIT_RECORDS:
      return {
        ...state,
      };
    case types.DELETE_RECORDS:
    default:
      return state;
  }
};

export default recordsReducers;
