import { Link } from "react-router-dom";
import IconLogoReact from "./UI/IconLogoReact";
import classes from "../components/Navigation.module.scss";
import NavigationMeniIcon from "./UI/NavigationMenuIcon";

const Navigation = () => {
  return (
    <aside>
      <nav className={classes.navigation}>
        <div>
          <div className={classes.mainLogo}>
            <IconLogoReact />
            <span className={classes.navItemText}>TodoApp</span>
          </div>
          <span className={classes.border}></span>
          <ul className="menu">
            <li className={classes.navBox}>
              <Link to="/posts">
                <NavigationMeniIcon />
                <span className={classes.navItemText}>PostsList</span>
              </Link>
            </li>
            <li className={classes.navBox}>
              <Link to="/userslist">
                <NavigationMeniIcon />
                <span className={classes.navItemText}>User List</span>
              </Link>
            </li>
            <li className={classes.navBox}>
              <Link to="/todo">
                <NavigationMeniIcon />
                <span className={classes.navItemText}>Todo List</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="">Night mode</div>
    </aside>
  );
};

export default Navigation;
