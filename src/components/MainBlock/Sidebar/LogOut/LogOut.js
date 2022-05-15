import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import './LogOut.css';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../../../store/slices/auth";

export const LogOut = () => {

  const history = useHistory();

  const dispatch = useDispatch();


  const handleLogOut = () => {
    dispatch(logOut());
    history.push('/login');
  };

  return (
    <section className="sidebarBottom">
      <button onClick={handleLogOut}>
        <LogoutIcon />
        <span>
          Exit
        </span>
      </button>
    </section>
  );
};
