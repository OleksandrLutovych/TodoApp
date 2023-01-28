import User from "../components/User";
import { useEffect } from "react";
import { IUser } from "../types/usersTypes";
import { useAppDispatch, useAppSelector } from "../reducers/hook";
import { fetchUsers } from "../reducers/UsersReducer";
import Button from "../components/UI/Button";
import classes from "../styles/User.module.scss";

const UsersList = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="main">
      <div className="subNav">
        <h2>Users List</h2>
        <Button>+ Add New User</Button>
      </div>
      <div className={classes.usersContainer}>
        {users.map((user: IUser) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
