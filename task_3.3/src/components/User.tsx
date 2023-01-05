import React from "react";
import { IUser } from "../types/usersTypes";
import { users } from "./Users";

interface IUserProps {
  user: IUser;
}

const User = ({ user }: IUserProps) => {
  return (
    <div>
      <img
        className=""
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <div className="">
        <p className="">{user.id}</p>
        <p className="">{user.name}</p>
        <p className="">{user.username}</p>
        <p className="">{user.email}</p>
      </div>
    </div>
  );
};

export default User;
