import { configureStore } from "@reduxjs/toolkit";
import fileReducer from "./fileReducer";

export default configureStore({
  reducer: {
    file: fileReducer,
  },
});
