import React from "react";
import { useLocation } from "react-router-dom";
import "./NoMatch.css";
import { Result, Button } from "antd";

export const NoMatch = () => {
  const location = useLocation();

  return (
    <Result
      status="404"
      title="404"
      subTitle={
        <h2>
          Page <span>{location.pathname}</span> not found
        </h2>
      }
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};
