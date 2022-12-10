import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import movieReducer from "../features/Movies/MovieSlice";

import userReducer from "../features/user/userSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middlware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
