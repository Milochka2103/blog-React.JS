import React from "react";
import "./Navigation.css";

import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink exact to="/blog" activeClassName="active">
        <LaptopChromebookIcon />
        <span>Blog</span>
      </NavLink>
      
      <NavLink exact to="/favourite" activeClassName="active">
        <LocalActivityIcon />
        <span>Favourite</span>
      </NavLink>
      
      <NavLink exact to="/account" activeClassName="active">
        <AccountCircleIcon />
        <span>Account</span>
      </NavLink>
    </nav>
  );
};