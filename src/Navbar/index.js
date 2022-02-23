import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#2E3B55" }}>
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" sx={{ py: 2, pl: 3 }}>
            Curd With Rest API
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
