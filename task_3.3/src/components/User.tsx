import { IUser } from "../types/usersTypes";
import classes from "../styles//User.module.scss";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

interface IUserProps {
  user: IUser;
}

const User = ({ user }: IUserProps) => {
  return (
    <div>
      <p>
        <b>Name:</b> {user.name}
      </p>
      <p>
        <b>Username:</b> {user.username}
      </p>
    </div>
  );
};

export default User;
