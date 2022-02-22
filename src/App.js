import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Navbar";
import UserList from "./Pages/UserList";
import AddUser from "./Pages/AddUser";
import EditUser from "./Pages/EditUser";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={() => <UserList />} />
        <Route path="/addUser" component={() => <AddUser />} />
        <Route path="/editUser" component={() => <EditUser />} />
      </Switch>
    </div>
  );
}

export default App;
