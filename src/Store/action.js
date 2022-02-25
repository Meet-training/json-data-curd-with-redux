import axios from "axios";
import * as types from "./actionType";

export const fetchAirline = () => {
  return async function (dispatch) {
    const response = await axios.get(`${process.env.REACT_APP_API}/airlines`);
    dispatch({
      type: types.GET_AIRLINE,
      payload: response.data,
    });
  };
};

export const fetchRecord = () => {
  return async function (dispatch) {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/passenger?page=0&size=10`
    );
    dispatch({
      type: types.GET_RECORDS,
      payload: response.data.data,
    });
  };
};

export const addRecord = (data) => {
  return async function (dispatch) {
    await axios.post(`${process.env.REACT_APP_API}/passenger`, data);
    dispatch({
      type: types.ADD_RECORDS,
    });
  };
};

export const getSingleRecord = (id) => {
  return async function (dispatch) {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/passenger/${id}`
    );
    dispatch({
      type: types.GET_SINGLE_RECORD,
      payload: response.data,
    });
  };
};

export const updateRecord = (id, data) => {
  return async function (dispatch) {
    await axios.put(`${process.env.REACT_APP_API}/passenger/${id}`, data);
    dispatch({
      type: types.EDIT_RECORDS,
    });
    dispatch(fetchRecord());
  };
};

export const deleteRecord = (id) => {
  return async function (dispatch) {
    await axios.delete(`${process.env.REACT_APP_API}/passenger/${id}`);
    dispatch({
      type: types.DELETE_RECORDS,
    });
    dispatch(fetchRecord());
  };
};
