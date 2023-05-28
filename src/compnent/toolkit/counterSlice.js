import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  dataArr: [],
  newMovie: {},
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addOne: (state) => {
      state.dataArr.push(state.newMovie);
      state.newMovie = {};
    },
    deleteOne: (state, action) => {
      state.dataArr.splice(action.payload, 1);
    },
    updateOne: (state, action) => {
      state.dataArr[action.payload.id] = action.payload.data;
    },
    setNewMovie: (state, action) => {
      state.newMovie = action.payload;
    },
  },
});
export const { addOne, deleteOne, setNewMovie } = counterSlice.actions;

export default counterSlice.reducer;
