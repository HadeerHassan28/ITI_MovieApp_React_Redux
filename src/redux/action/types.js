export const setMovies = async (dispatch) => {
  return dispatch({ type: "SET_MOVIES" });
  // return {
  //   type: "SET_MOVIES",

  // };
};
export const setNewMovie = async (dispatch) => {
  return dispatch({ type: "SET_NEW_MOVIE" });

  // return {
  //   type: "SET_NEW_MOVIE",
  //   payload: movie,
  // };
};
