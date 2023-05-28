const initialState = {
  dataArr: [],
  newMovie: {},
};
export const AddMovie = (state = initialState, action) => {
  switch (state.type) {
    case "SET_MOVIES":
      return {
        ...state,
        dataArr: action.payload,
      };
    case "SET_NEW_MOVIE":
      return {
        ...state,
        newMovie: action.payload,
      };
    default:
      return state;
  }
};
