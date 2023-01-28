import { Link } from "react-router-dom";
import IconLogoReact from "./UI/IconLogoReact";
import classes from "../components/Navigation.module.scss";
import NavigationMeniIcon from "./UI/NavigationMenuIcon";
import NightmodeToogle from "./UI/NightmodeToggle";

const Navigation = () => {
  return (
    <aside>
      <nav>
        <div>
          <div className={classes.mainLogo}>
            <IconLogoReact />
            <span className={classes.logoText}>TODO APP</span>
          </div>
          <span className={classes.border}></span>
          <ul className="menu">
            <li className={classes.navBox}>
              <Link to="/" className={classes.link}>
                <NavigationMeniIcon />
                <span className={classes.navItemText}>Posts List</span>
              </Link>
            </li>
            <li className={classes.navBox}>
              <Link to="/userslist" className={classes.link}>
                <NavigationMeniIcon />
                <span className={classes.navItemText}>User List</span>
              </Link>
            </li>
            <li className={classes.navBox}>
              <Link to="/todo" className={classes.link}>
                <NavigationMeniIcon />
                <span className={classes.navItemText}>Todo List</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={classes.nightMode}>
        <NightmodeToogle />
      </div>
    </aside>
  );
};

export default Navigation;
