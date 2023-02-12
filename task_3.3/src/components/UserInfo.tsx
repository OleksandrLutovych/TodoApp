import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../reducers/hook";
import classes from "../styles/User.module.scss";
import UserDetailedData from "./UserDetailedData";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faHashtag,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { fetchUsers } from "../reducers/UsersReducer";
import UserTabs from "./UserTabs";

const UserInfo: React.FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const usersArr = useAppSelector((state) => state.users.users);
  const [targetUser] = usersArr.filter((user) => user.id === Number(id));

  return (
    <>
      <div className={classes.pageHeader}>
        <h2>Users List</h2>
      </div>
      <div className={classes.userPageMain}>
        {targetUser ? (
          <div className={classes.userAsideWrapper}>
            <div className={classes.userAsideWrapper_header}>
              <div className={classes.headerDecoration}></div>
              <div className={classes.headerInfo}>
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt=""
                />
                <div className={classes.userAsideInfo}>
                  <span>{targetUser.name}</span>
                  <span>{targetUser.address.city}</span>
                </div>
              </div>
            </div>

            <div className={classes.userInfoWrapper}>
              <UserDetailedData
                icon={faEnvelope}
                userData={targetUser.email}
                userDataInfo={"Email"}
              />
              <UserDetailedData
                icon={faPhone}
                userData={targetUser.phone}
                userDataInfo={"Mobile"}
              />
              <UserDetailedData
                icon={faLocationDot}
                userData={targetUser.address.street}
                userDataInfo={"Adress"}
              />
              <UserDetailedData
                icon={faHashtag}
                userData={targetUser.website}
                userDataInfo={"Website"}
              />
              <UserDetailedData
                icon={faBuilding}
                userData={targetUser.company.name}
                userDataInfo={"Company"}
              />
            </div>
          </div>
        ) : (
          <UserDetailedData
            icon={faBuilding}
            userData={"Loading..."}
            userDataInfo={""}
          />
        )}
        <div className={classes.userTabs}>
          <UserTabs id={id} />
        </div>
      </div>
    </>
  );
};

export default UserInfo;
