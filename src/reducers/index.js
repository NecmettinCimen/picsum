import { combineReducers } from "redux";

import {  routerReducer } from 'react-router-redux'

import picsum from "./picsumReducer";

export default combineReducers({
  picsum,
  routing: routerReducer
});

