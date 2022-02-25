import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import { Button, Table, TableBody, TableContainer } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import { TableHead, TableRow, Paper } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { deleteRecord, fetchAirline, fetchRecord } from "../Store/action";
import { useHistory } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const UserListTable = () => {
  const { records } = useSelector((state) => state);

  let history = useHistory();

  let dispatch = useDispatch();

  useEffect(() => {
    let queryParams = {
      page: 0,
      size: 5,
    };
    dispatch(fetchRecord(queryParams));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAirline());
  }, [dispatch]);

  const handleDeleteRecord = (id) => {
    console.log("Delete Id :", id);
    window.confirm(`are you sure you want to delete ${id} ?`);
    dispatch(deleteRecord(id));
  };

  return (
    <Paper elevation={4} sx={{ mt: 1, mb: 3 }}>
      <TableContainer component={Paper}>
        <Button
          color="primary"
          aria-label="add"
          variant="contained"
          onClick={() => history.push("/addRecord")}
          sx={{
            mr: 5,
            mt: 2,
            mb: 2,
            float: "right",
          }}
        >
          Add New Record
        </Button>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Trips</StyledTableCell>
              <StyledTableCell align="center">Id</StyledTableCell>
              <StyledTableCell align="center">Airline Id</StyledTableCell>
              <StyledTableCell align="center">Airline Name</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records &&
              records.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row">
                    {row.name || "-"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.trips || "-"}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row._id}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.airline[0].id || "-"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.airline[0].name || "-"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      onClick={() => {
                        history.push(`/editRecord/${row._id}`);
                      }}
                    >
                      <EditRoundedIcon sx={{ color: "mediumseagreen" }} />
                    </Button>

                    <Button onClick={() => handleDeleteRecord(row.id)}>
                      <DeleteOutlineTwoToneIcon sx={{ color: "red" }} />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
        <Pagination count={10} color="primary" />
      </TableContainer>
    </Paper>
  );
};

export default UserListTable;
