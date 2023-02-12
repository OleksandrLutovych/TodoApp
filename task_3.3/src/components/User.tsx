import { IUser } from "../types/usersTypes";
import classes from "../styles//User.module.scss";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

interface IUserProps {
  user: IUser;
}

const User = ({ user }: IUserProps) => {
  return (
    <div className={classes.userWrapper}>
      <div className={classes.userMainInfo}>
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
          className={classes.userPhoto}
        />
        <div className={classes.usernameBox}>
          <span>{user.name}</span>
          <span className={classes.userNickname}>{user.username}</span>
        </div>
      </div>

      <div className={classes.userMainInfo}>
        <FontAwesomeIcon
          icon={faLocationDot}
          style={{ opacity: ".8", color: "rgb(100, 95, 198)" }}
        />
        <span className={classes.otherInfo}>{user.address.city}</span>
      </div>
      <div className={classes.userMainInfo}>
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{ opacity: ".8", color: "rgb(198, 159, 60)" }}
        />
        <span className={classes.otherInfo}>{user.email}</span>
      </div>
      <button className={classes.deleteUser}>
        <FontAwesomeIcon icon={faTrash} style={{ color: "rgb(205, 59, 59)" }} />
      </button>
    </div>
  );
};

export default User;
