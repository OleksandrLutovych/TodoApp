import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import UsersList from "./UsersList";
import PostsList from "./PostsList";
import TodoLists from "./TodoLists";

const Navigation = () => {
  return (
    <>
      <header>
        <nav className="header">
          <ul className="container menu">
            <li>
              <Link to="/posts">PostsList</Link>
            </li>
            <li>
              <Link to="/userslist">UsersList</Link>
            </li>
            <li>
              <Link to="/todo">TodoList</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/posts" element={<PostsList />} />
        <Route path="/userslist" element={<UsersList />} />
        <Route path="/todo" element={<TodoLists />} />
      </Routes>
    </>
  );
};

export default Navigation;
