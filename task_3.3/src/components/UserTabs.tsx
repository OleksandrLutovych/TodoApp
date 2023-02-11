import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import classes from "../styles/Usertabs.module.scss";
import UserTabsContent from "./UserTabsContent";

interface IUserTabsProps {
  id: string | undefined;
}

const UserTabs = (props: IUserTabsProps) => {
  const { id } = props;

  const { section = 'albums' } = useParams();
  const [data, setData] = useState([]);
console.log(section)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/${section}`)
      .then((respone) => respone.json())
      .then((data) => setData(data));
  }, [section]);

  const [activeTabs, setActiveTabs] = useState("albums");
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
          {/* {activeTabs === "albums" && <UserTabsContent data={data} section={section}/>}
          <UserTabsContent data={data} section={section}/> */}
          {/* <Outlet /> */}
          <UserTabsContent data={data} section={section}/>
        </div>
      </div>
    </>
  );
};

export default UserTabs;
