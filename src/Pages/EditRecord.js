import React, { useState, useEffect } from "react";

import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getSingleRecord, updateRecord } from "../Store/action";

const paperstyle = { padding: "15px 15px", width: 600, margin: "20px auto" };

const EditRecord = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const history = useHistory();

  const { airlines } = useSelector((state) => state);

  const { record } = useSelector((state) => state);

  const [state, setState] = useState({});

  let data = {
    name: record.name,
    trips: record.trips,
    airline: record.airline && record.airline[0].id,
  };

  useEffect(() => {
    dispatch(getSingleRecord(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (record) {
      setState({ ...data });
    }
  }, [record]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateRecord(id, state));
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
            value={state.name || ""}
            sx={{ mb: 2, mt: 2 }}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
          <TextField
            fullWidth
            label="Trips"
            name="trips"
            value={state.trips || ""}
            sx={{ mb: 2 }}
            onChange={(e) => setState({ ...state, trips: e.target.value })}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Airline</InputLabel>
            <Select
              name="airline"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.airline || ""}
              onChange={(e) => setState({ ...state, airline: e.target.value })}
              label="Airline"
              style={{
                textAlign: "left",
                marginBottom: "15px",
              }}
            >
              {airlines.map((row, index) => (
                <MenuItem key={index} value={row.id}>
                  {row.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Grid>
            <Button
              type="submit"
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
              Update
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default EditRecord;
