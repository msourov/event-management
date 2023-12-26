import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducers/loginSlice";
import errorSlice from "./reducers/errorSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    error: errorSlice,
  },
});
export default store;
