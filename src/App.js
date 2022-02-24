import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Navbar";
import AddRecord from "./Pages/AddRecord";
import UserListTable from "./Pages/UserListTable";
import EditRecord from "./Pages/EditRecord";

const App = () => {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" component={UserListTable} />
        <Route path="/addRecord" component={AddRecord} />
        <Route path="/editRecord/:id" component={EditRecord} />
      </Switch>
    </div>
  );
};

export default App;
