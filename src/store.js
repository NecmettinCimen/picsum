import { createStackNavigator } from "react-navigation";
import { applyMiddleware, createStore, combineReducers } from "redux";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from "react-navigation-redux-helpers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { routerMiddleware, push } from "react-router-redux";

import reducers from "./reducers";

const middleware = applyMiddleware(
  promise(),
  thunk,
  createLogger(),
  routerMiddleware()
);

export default createStore(reducers, middleware);
