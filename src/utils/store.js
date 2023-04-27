import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import apiCacheSlice from "./apiCacheSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    ApiCache: apiCacheSlice,
    chat : chatSlice
  },
});

export default store;
