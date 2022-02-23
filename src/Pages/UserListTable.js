import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import { Table, TableBody, TableContainer } from "@mui/material";
import { TableHead, TableRow, Paper } from "@mui/material";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { loadUser } from "../Store/action";

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
  const { users } = useSelector((state) => state.data);

  console.log("users", users);

  let dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  console.log("env", process.env.REACT_APP_API);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Due Date</StyledTableCell>
            <StyledTableCell align="center">Completed</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={`${user.id}`}>
              <StyledTableCell component="th" scope="row">
                {user.id}
              </StyledTableCell>
              <StyledTableCell align="center">{user.title}</StyledTableCell>
              <StyledTableCell align="center">{user.dueDate}</StyledTableCell>
              <StyledTableCell align="center">{user.completed}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserListTable;
