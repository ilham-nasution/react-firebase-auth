import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const PrivateRoute = ({ component: Component, ...restProps }) => {
  const currentUser = useAuth();

  return (
    <Route
      {...restProps}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
