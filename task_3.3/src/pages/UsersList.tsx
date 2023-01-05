import React from "react";
import User from "../components/User";
import { users } from "../components/Users";
import classes from "./UsersList.module.css";

function UsersList() {
  return (
    <div className="container">
      <h2>Users</h2>
      {users.map(user =><User user={user} key={user.id}/> )}
    </div>
  );
}

export default UsersList;
