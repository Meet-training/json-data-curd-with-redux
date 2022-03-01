import axios from "axios";
import * as types from "./actionType";

let BASE_API = process.env.REACT_APP_API;

export const fetchAirline = () => {
  return async function (dispatch) {
    const response = await axios.get(`${BASE_API}/airlines`);
    dispatch({
      type: types.GET_AIRLINE,
      payload: response.data,
    });
  };
};

export const fetchRecord = (queryparams) => {
  return async function (dispatch) {
    const response = await axios.get(`${BASE_API}/passenger?${queryparams}`);
    dispatch({
      type: types.GET_PASSENGER,
      payload: response.data.data,
    });
  };
};

export const addRecord = (data) => {
  return async function (dispatch) {
    await axios.post(`${BASE_API}/passenger`, data);
    dispatch({
      type: types.ADD_PASSENGER,
    });
  };
};

export const getSingleRecord = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`${BASE_API}/passenger/${id}`);
    dispatch({
      type: types.GET_SINGLE_PASSENGER,
      payload: response.data,
    });
  };
};

export const updateRecord = (id, data) => {
  return async function (dispatch) {
    await axios.put(`${BASE_API}/passenger/${id}`, data);
    dispatch({
      type: types.EDIT_PASSENGER,
    });
    dispatch(fetchRecord());
  };
};

export const deleteRecord = (id) => {
  return async function (dispatch) {
    await axios.delete(`${BASE_API}/passenger/${id}`);
    dispatch({
      type: types.DELETE_PASSENGER,
    });
    dispatch(fetchRecord());
  };
};
