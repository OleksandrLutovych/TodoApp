import React from "react";
import User from "../components/User";
import classes from "./UsersList.module.css";

function UsersList() {
  return (
    <div className="container">
      <h2>Users</h2>
      <User></User>
      <User></User>
      <User></User>
    </div>
  );
}

export default UsersList;
