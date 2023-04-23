import { configureStore, createSlice } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import apiCacheSlice from "./apiCacheSlice";

const store = configureStore({
  reducer: {
    app : appSlice,
    ApiCache : apiCacheSlice 
  },
});

export default store;
