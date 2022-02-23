import axios from "axios";
import * as types from "./actionType";

const getUser = (users) => ({
  type: types.GET_USER,
  payload: users,
});

export const loadUser = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        console.log("res", res);
        dispatch(getUser(res.data));
      })
      .catch((error) => console.log(error));
  };
};
