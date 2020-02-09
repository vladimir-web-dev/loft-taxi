import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getIsAuthenticatedSelector } from "../containers/login/store";
import { useSelector } from "react-redux";

export function PrivateRoute({ render: RouteComponent, ...rest }) {
  const isAuthenticated = useSelector(state =>
    getIsAuthenticatedSelector(state.authReducer)
  );

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <RouteComponent {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
