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

const AboutUser: React.FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const usersArr = useAppSelector((state) => state.users.users);
  const [targetUser] = usersArr.filter((user) => user.id === Number(id));

  return (
    <>
      {targetUser ? (
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
      ) : (
        <UserDetailedData
          icon={faBuilding}
          userData={"Loading..."}
          userDataInfo={""}
        />
      )}
    </>
  );
};

export default AboutUser;
