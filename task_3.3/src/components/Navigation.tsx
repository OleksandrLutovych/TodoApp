import { Link } from "react-router-dom";
import IconLogoReact from "./UI/IconLogoReact";
import classes from "../styles/Navigation.module.scss";
import NavigationMeniIcon from "./UI/NavigationMenuIcon";
import NightmodeToogle from "./UI/NightmodeToggle";
import ReactSwitch from "react-switch";
import { useState, useEffect } from "react";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Navigation = (props: any) => {
  const { isMenuHidden, setMenuState } = props;
  const [themeMode, setThemeMode] = useState("dark");

  const toggleThemeMode = () =>
    setThemeMode(themeMode === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", themeMode);
    document.querySelector(".subNav")?.setAttribute("data-theme", themeMode);
  });

  return (
    <aside className={isMenuHidden ? "hidden" : "visible"}>
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
      <div className="">
        <div className={classes.nightMode}>
          <LightModeIcon sx={{ fontSize: 15 }} />
          <NightmodeToogle
            onChange={toggleThemeMode}
            checked={themeMode === "dark"}
          />
          {/* <ReactSwitch
          uncheckedIcon
          checkedIcon 
          onChange={toggleThemeMode}
          checked={themeMode === "dark"}
          size={}
        /> */}
          <NightlightIcon sx={{ fontSize: 15 }} />
        </div>
        <button className={classes.toggleMenu} onClick={setMenuState}>
          <VisibilityOffIcon sx={{fontSize: 15}}/>
          Hide Sidebar
        </button>
      </div>
    </aside>
  );
};

export default Navigation;
