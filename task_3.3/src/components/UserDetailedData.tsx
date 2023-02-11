import classes from "../styles//User.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IUserDataProps {
  userData: string;
  userDataInfo: string;
  icon: IconDefinition;
}

const UserDetailedData = (props: IUserDataProps) => {
  const { userData, userDataInfo, icon } = props;
  const iconStyle = {
    fontSize: "25px",
    color: "rgb(100, 95, 198)",
  };

  return (
    <div className={classes.userInfoContentBox}>
      <FontAwesomeIcon icon={icon} style={iconStyle} />
      <div className={classes.userInfoContentBox_info}>
        <span>{userData}</span>
        <span className={classes.infoText}>{userDataInfo}</span>
      </div>
    </div>
  );
};

export default UserDetailedData;
