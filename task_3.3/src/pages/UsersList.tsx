import User from "../components/User";
import { useEffect } from "react";
import { IUser } from "../types/usersTypes";
import { useAppDispatch, useAppSelector } from "../reducers/hook";
import { fetchUsers } from "../reducers/UsersReducer";
import classes from "../styles/User.module.scss";
import { Link } from "react-router-dom";

const UsersList: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className={classes.pageHeader}>
        <h2>Users List</h2>
      </div>
      <div className={classes.usersContainer}>
        {users.map((user: IUser) => (
          <Link
            to={`/userslist/user/${user.id}`}
            className={classes.userBox}
            key={user.id}
          >
            <User user={user} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default UsersList;
