import authReducer from "../../containers/login/store";
import profileReducer from "../../containers/profile/store";
import routeReducer from "../../containers/map/store";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  authReducer,
  profileReducer,
  routeReducer
});
