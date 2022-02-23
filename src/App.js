import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Navbar";

import UserData from "./Pages/UserData";
import ViewUser from "./Pages/ViewUser";
import UserListTable from "./Pages/UserListTable";

const App = () => {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" component={() => <UserListTable />} />
        <Route path="/addUser" component={() => <UserData />} />
        <Route path="/editUser/:id" component={() => <UserData />} />
        <Route path="/viewUser/:id" component={() => <ViewUser />} />
      </Switch>
    </div>
  );
};

export default App;
