import React, { useEffect } from "react";
import { LoginPage } from "./containers/login/components/LoginPage";
import { RegistrationPage } from "./containers/registration/components/RegistrationPage";
import { MapPage } from "./containers/map/components/MapPage";
import { ProfilePage } from "./containers/profile/components/ProfilePage";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { PrivateRoute } from "./HOCs";
import { useDispatch, useSelector } from "react-redux";
import { authSuccess } from "./containers/login/store";
import { getIsAuthenticatingSelector } from "./containers/login/store";
import { LoadingModal } from "./containers/general/LoadingModal";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticating = useSelector(state => getIsAuthenticatingSelector(state.authReducer));

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (token) {
      dispatch(authSuccess(token))
      history.push("/map");
    }
  }, []);
  
  return (
    <>
    <Switch>
      <Route
        path="/login"
        render={props => <LoginPage data-testid="login-page" {...props} />}
      />
      <Route
        path="/registration"
        render={props => (
          <RegistrationPage data-testid="registration-page" {...props} />
        )}
      />
      <PrivateRoute
        path="/map"
        render={props => <MapPage data-testid="map-page" {...props} />}
      />
      <PrivateRoute
        path="/profile"
        render={props => <ProfilePage data-testid="profile-page" {...props} />}
      />
      <Redirect to="/login" />
    </Switch>
    <LoadingModal showModal={isAuthenticating}/>
    </>
  );
}

export default App;
