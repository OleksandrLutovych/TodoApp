import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "../styles/Usertabs.module.scss";

interface IUserTabsProps {
  id: string | undefined;
}

const UserTabs = (props: IUserTabsProps) => {
  const { id } = props;

  const [activeTabs, setActiveTabs] = useState("about");
  const tabsNavBtnsArr = [
    {
      className:
        activeTabs === "albums"
          ? `${classes.tabsBtn} ${classes.active}`
          : classes.tabsBtn,
      onClick: () => setActiveTabs("albums"),
      path: `/userslist/user/${id}/albums`,
      name: "Albums",
      key: "1",
    },
    {
      className:
        activeTabs === "todos"
          ? `${classes.tabsBtn} ${classes.active}`
          : classes.tabsBtn,
      onClick: () => setActiveTabs("todos"),
      path: `/userslist/user/${id}/todos`,
      name: "Todos",
      key: "2",
    },
    {
      className:
        activeTabs === "posts"
          ? `${classes.tabsBtn} ${classes.active}`
          : classes.tabsBtn,
      onClick: () => setActiveTabs("posts"),
      path: `/userslist/user/${id}/posts`,
      name: "Posts",
      key: "3",
    },
  ];

  return (
    <>
      <div className={classes.userTabs}>
        <div className={classes.tabsNav}>
          {tabsNavBtnsArr.map((btn) => (
            <Link
              key={btn.key}
              className={btn.className}
              to={btn.path}
              onClick={btn.onClick}
            >
              {btn.name}
            </Link>
          ))}
        </div>
        <div className={classes.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserTabs;
