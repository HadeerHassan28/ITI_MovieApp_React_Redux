//import { compose } from "@mui/system";
import { configureStore } from "@reduxjs/toolkit";
//import { createStore, applyMiddleware } from "react-redux";
//import reduxThunk from "redux-thunk";
//import AddMovie from "./reducers/moiveReducer";
import counterReducer from "../compnent/toolkit/counterSlice";
//const googleExt = window._REDUX_DEVTOOLS_EXTENTION_COMPSE__ || compose;

//const store = createStore(AddMovie, googleExt(applyMiddleware(reduxThunk)));

const store = configureStore({
  reducer: counterReducer,
});
export default store;
