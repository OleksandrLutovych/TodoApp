import { IUser } from "../types/usersTypes";
import classes from "./User.module.scss";

interface IUserProps {
  user: IUser;
}

const User = ({ user }: IUserProps) => {
  return (
    <div className={classes.userBox}>
      <div>
        <p>
          <b>Name:</b> {user.name}
        </p>
        <p>
          <b>Username:</b> {user.username}
        </p>
      </div>
    </div>
  );
};

export default User;
