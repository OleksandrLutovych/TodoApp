import User from "../components/User";
import { useEffect } from "react";
import { IUser } from "../types/usersTypes";
import { useAppDispatch, useAppSelector } from "../reducers/hook";
import { fetchUsers } from "../reducers/UsersReducer";
import classes from "../styles/User.module.scss";
import ModalForm from "../components/UI/ModalForm";

const UsersList: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className="subNav">
        <h2>Users List</h2>
        {/* <ModalForm
          btnText="+ Add New User"
          formTitle="Add New User"
        ></ModalForm> */}
      </div>
      <div className={classes.usersContainer}>
        {users.map((user: IUser) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default UsersList;
