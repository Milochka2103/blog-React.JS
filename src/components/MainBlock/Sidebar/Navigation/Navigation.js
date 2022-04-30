import React from "react";
import "./Navigation.css";

import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import SettingsIcon from "@mui/icons-material/Settings";
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
        <span>Favorite</span>
      </NavLink>
      
      <NavLink exact to="/settings" activeClassName="active">
        <SettingsIcon />
        <span>Settings</span>
      </NavLink>
    </nav>
  );
};