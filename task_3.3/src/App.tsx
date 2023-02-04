import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import PostsList from "./pages/PostsList";
import UsersList from "./pages/UsersList";
import Todo from "./pages/Todo";
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';

const App = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  const toggleMenu = () => {
    setIsMenuHidden((prev) => !prev);
  };

  return (
    <div className="main-page">
      <Navigation
        isMenuHidden={isMenuHidden}
        setMenuState={toggleMenu}
      ></Navigation>
      <div className="content-page">
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/userslist" element={<UsersList />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
        {isMenuHidden && <button className='toggle-btn' onClick={toggleMenu}><VisibilityIcon sx={{fontSize: 15}}/></button>}
      </div>
    </div>
  );
};

export default App;
