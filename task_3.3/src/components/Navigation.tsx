import { Link } from "react-router-dom";
import IconLogoReact from "./UI/IconLogoReact";
import classes from "../styles/Navigation.module.scss";
import NavigationMeniIcon from "./UI/NavigationMenuIcon";
import NightmodeToogle from "./UI/NightmodeToggle";
import { useState, useEffect } from "react";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface INavProps {
  isMenuHidden: boolean;
  setMenuState: () => void;
}

const Navigation = (props: INavProps) => {
  const { isMenuHidden, setMenuState } = props;
  const [themeMode, setThemeMode] = useState("dark");
  const [onPage, setOnPage] = useState("post");

  const activeBtnStyle = {
    backgroundColor: "rgb(100, 95, 198)",
    color: "#fff",
  };
  const toggleThemeMode = () =>
    setThemeMode(themeMode === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", themeMode);
    document.querySelector(".subNav")?.setAttribute("data-theme", themeMode);
  });

  const navItems = [
    {
      path: "/",
      style: onPage === "post" ? activeBtnStyle : {},
      onClick: () => setOnPage("post"),
      name: "Posts List",
      key: "postList",
    },
    {
      path: "/userslist",
      style: onPage === "user" ? activeBtnStyle : {},
      onClick: () => setOnPage("user"),
      name: "Users List",
      key: "userList",
    },
    {
      path: "/todo",
      style: onPage === "todo" ? activeBtnStyle : {},
      onClick: () => setOnPage("todo"),
      name: "Todo List",
      key: "todoList",
    },
  ];

  return (
    <aside className={isMenuHidden ? "hidden" : "visible"}>
      <nav>
        <div className={classes.mainLogo}>
          <IconLogoReact />
          <span className={classes.logoText}>TODO APP</span>
        </div>
        <ul className={classes.navBtnBox}>
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                to={item.path}
                className={classes.navItem}
                style={item.style}
                onClick={item.onClick}
              >
                <NavigationMeniIcon />
                <span className={classes.navItemText}>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <div className={classes.nightMode}>
          <LightModeIcon sx={{ fontSize: 15 }} />
          <NightmodeToogle
            onChange={toggleThemeMode}
            checked={themeMode === "dark"}
          />
          <NightlightIcon sx={{ fontSize: 15 }} />
        </div>
        <button className={classes.toggleMenu} onClick={setMenuState}>
          <VisibilityOffIcon sx={{ fontSize: 15 }} />
          Hide Sidebar
        </button>
      </div>
    </aside>
  );
};

export default Navigation;
