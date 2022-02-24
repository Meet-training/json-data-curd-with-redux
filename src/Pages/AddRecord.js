import {
  TextField,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  Typography,
  Button,
} from "@mui/material";

import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addRecord } from "../Store/action";

const paperstyle = { padding: "15px 15px", width: 600, margin: "20px auto" };

const AddRecord = () => {
  const [state, setState] = React.useState({
    name: "",
    trips: "",
    airline: "",
  });

  let dispatch = useDispatch();

  let history = useHistory();

  const { name, trips, airline } = state;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addRecord(state));
    history.push("/");
  };

  return (
    <Grid>
      <Paper elevation={5} style={paperstyle}>
        <Grid align="center">
          <Typography
            variant="h5"
            sx={{ textDecoration: "underline", fontStyle: "italic" }}
          >
            Records
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={name}
            sx={{ mb: 2, mt: 2 }}
            onChange={changeHandler}
          />
          <TextField
            fullWidth
            label="Trips"
            name="trips"
            value={trips}
            sx={{ mb: 2 }}
            onChange={changeHandler}
          />
          <TextField
            fullWidth
            type="number"
            label="Airline"
            name="airline"
            value={airline}
            sx={{ mb: 2 }}
            onChange={changeHandler}
          />

          <Grid>
            <Button
              variant="contained"
              color="error"
              sx={{ mr: 1 }}
              onClick={() => history.push("/")}
            >
              Exit
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={submitHandler}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default AddRecord;
