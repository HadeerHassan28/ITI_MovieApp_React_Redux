import { SET_MOVIES, DETAIL_MOVIE } from "./actionTypes";
import axios from "axios";
//! Display:
export const setMovies = (dispatch) => {
  axios
    .get("http://localhost:3000/results")
    .then((res) => {
      dispatch({ type: SET_MOVIES, payload: res.data });
      // console.log(res.data); //?arrived
    })
    .catch((error) => {
      console.log("error in action creatoers in setMoive");
    });
};
//! Delate:
export const delateMovie = (id, dispatch) => {
  axios
    .delete(`http://localhost:3000/results/${id}`)
    .then(() => {
      setMovies(dispatch);
    })
    .catch((error) => {
      console.log("error in action creatoers in delate moive");
    });
};
//! Details:
export const detailsOfMoive = (id, dispatch) => {
  axios
    .get(`http://localhost:3000/results/${id}`)
    .then((res) => {
      dispatch({ type: DETAIL_MOVIE, payload: res.data });
    })
    .catch((error) => {
      console.log("error in action creators in detailsOfMovie", error);
    });
};
