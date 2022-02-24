import axios from "axios";
import * as types from "./actionType";

export const fetchRecord = () => {
  return async function (dispatch) {
    const response = await axios.get(`${process.env.REACT_APP_API}`);
    dispatch({
      type: types.GET_RECORDS,
      payload: response.data.data.slice(0, 10),
    });
  };
};

export const addRecord = (data) => {
  return async function (dispatch) {
    await axios.post(`${process.env.REACT_APP_API}`, data);
    dispatch({
      type: types.ADD_RECORDS,
    });
  };
};

export const deleteRecord = (id) => {
  return async function (dispatch) {
    await axios.delete(`${process.env.REACT_APP_API}/${id}`).then((res) => {
      dispatch({
        type: types.DELETE_RECORDS,
      });
      dispatch(fetchRecord());
    });
  };
};
