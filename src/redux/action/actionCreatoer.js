//import SET_NEW_MOVIE from "./actionTypes";
import { SET_MOVIES, delate_Movie } from "./actionTypes";
import { fetchMoives } from "../../API/callMovieAPI";
// export const setMovies = async (dispatch) => {
//   return dispatch({ type: SET_MOVIES });
//   // return {
//   type: "SET_MOVIES",

// };
//};

export const setMovies = () => (dispatch) => {
  fetchMoives().then((res) => {
    dispatch({ type: SET_MOVIES, payload: res.data });
  });
};
export const delateMovie = (id, dispatch) => {
  fetchMoives().then((res) => {
    dispatch({ type: delate_Movie });
  });
};

// }
// export const setNewMovie = async (dispatch) => {
//   return dispatch({ type: SET_NEW_MOVIE });

// return {
//   type: "SET_NEW_MOVIE",
//   payload: movie,
// };
//};
