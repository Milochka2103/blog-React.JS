import React from "react";
import { Route, Redirect } from "react-router-dom";
import { APP_ROUTES } from "../../Utils/constants";
import "./PrivateRoute.css";
import { NoMatch } from "../../pages/NoMatch/NoMatch";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../store/slices/auth";


export const PrivateRoute = ({
  path,
  exact = false,
  children: Component,
  blogPostRoutes
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Route
      path={path}
      exact={exact}
      render={({ location }) => {
        const allRoutes = [...APP_ROUTES, ...blogPostRoutes];

        const isPathExists = allRoutes.some(
          (route) => route === location.pathname
        );

        if (!isPathExists) return <NoMatch />;

        if (isLoggedIn) return Component;
        return <Redirect to="/login" />;
      }}
    />
  );
};
