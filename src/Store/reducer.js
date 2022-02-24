import * as types from "./actionType";

const initialState = {
  records: [],
  record: {},
};

const recordsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_RECORDS:
      return {
        ...state,
        records: action.payload,
      };
    case types.DELETE_RECORDS:
    case types.ADD_RECORDS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default recordsReducers;
