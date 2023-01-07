import { IUser } from "../types/usersTypes";
import classes from "./user.module.css";

interface IUserProps {
  user: IUser;
}

const User = ({ user }: IUserProps) => {
  return (
    <div className={classes.userBox}>
      <img
        className=""
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <div style={{ marginLeft: "10px" }}>
        <p className="">
          <b>Name:</b> {user.name}
        </p>
        <p className="">
          <b>Username:</b> {user.username}
        </p>
      </div>
    </div>
  );
};

export default User;
