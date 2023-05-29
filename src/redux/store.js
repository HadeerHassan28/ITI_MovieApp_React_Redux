//import { compose } from "@mui/system";
//import { configureStore } from "@reduxjs/toolkit";
//import reduxThunk from "redux-thunk";
import { AddMovie } from "./reducers/moiveReducer";
import { createStore } from "redux";
//import moivieSlice from "../compnent/toolkit/moivieSlice";
//const enhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPSE__;

const store = createStore(AddMovie);

// const store = configureStore(
//   {
//     reducer: {
//       movie: moivieSlice,
//     },
//   }
// googleExt(applyMiddleware(reduxThunk))
//);
export default store;
