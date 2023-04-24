import { createSlice } from "@reduxjs/toolkit";

const apiCacheSlice = createSlice({
  name: "cache",
  initialState: {},
  reducers: {
    addCache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { addCache } = apiCacheSlice.actions;
export default apiCacheSlice.reducer;
