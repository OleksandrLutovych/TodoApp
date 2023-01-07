import { Link } from "react-router-dom";

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
    </>
  );
};

export default Navigation;
