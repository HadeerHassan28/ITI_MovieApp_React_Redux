//import { compose } from "@mui/system";
import { configureStore } from "@reduxjs/toolkit";
//import { createStore, applyMiddleware } from "react-redux";
//import reduxThunk from "redux-thunk";
//import AddMovie from "./reducers/moiveReducer";

import moivieSlice from "../compnent/toolkit/moivieSlice";
//const googleExt = window._REDUX_DEVTOOLS_EXTENTION_COMPSE__ || compose;

//const store = createStore(AddMovie, googleExt(applyMiddleware(reduxThunk)));

const store = configureStore({
  reducer: {
    movie: moivieSlice,
  },
});
export default store;
