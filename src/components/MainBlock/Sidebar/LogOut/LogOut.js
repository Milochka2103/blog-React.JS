import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import './LogOut.css';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export const LogOut = () => {

  const history = useHistory();

  const dispatch = useDispatch();


  const logOut = () => {
    dispatch(logOut());
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
