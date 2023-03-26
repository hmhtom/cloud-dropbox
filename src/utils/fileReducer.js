import { createSlice } from "@reduxjs/toolkit";

export const fileSlice = createSlice({
  name: "file",
  initialState: {
    filePath: [],
  },

  reducers: {
    addPath: (state, action) => {
      state.filePath = [...state.filePath, action.payload];
    },
    removePath: (state) => {
      state.filePath = state.filePath.slice(0, -1);
    },
    clearPath: (state) => {
      state.filePath = [];
    },
  },
});

export const { addPath, removePath, clearPath } = fileSlice.actions;

export default fileSlice.reducer;
