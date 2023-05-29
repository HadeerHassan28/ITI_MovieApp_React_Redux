import { SET_MOVIES, DETAIL_MOVIE } from "../action/actionTypes";
const initialState = {
  dataArr: [],
  detailMovie: {},
};
export const AddMovie = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, dataArr: action.payload };
    case DETAIL_MOVIE:
      return {
        ...state,
        detailMovie: action.payload,
      };
    default:
      return state;
  }
};
