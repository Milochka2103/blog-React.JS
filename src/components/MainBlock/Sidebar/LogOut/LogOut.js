import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import './LogOut.css';
import { useHistory } from "react-router-dom";

export const LogOut = ({setIsLoggedIn}) => {

  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    history.push('/login');
  };

  return (
    <section className="sidebarBottom">
      <button onClick={logOut}>
        <LogoutIcon />
        <span>
          Exit
        </span>
      </button>
    </section>
  );
};
