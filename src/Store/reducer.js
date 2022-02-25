import * as types from "./actionType";

const initialState = {
  airlines: [],
  records: [],
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
        records: action.payload,
      };
    case types.ADD_RECORDS:
    case types.DELETE_RECORDS:
    case types.EDIT_RECORDS:
      return {
        ...state,
      };
    case types.GET_SINGLE_RECORD:
      return {
        ...state,
        record: action.payload,
      };
    default:
      return state;
  }
};

export default recordsReducers;
