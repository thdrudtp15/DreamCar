import { createSlice, configureStore } from "@reduxjs/toolkit";

let navHeight = createSlice({
  name: "navHeight",
  initialState: "",
  reducers: {
    setNavHeight() {},
  },
});

export default configureStore({
  reducer: {
    user: navHeight.reducer,
  },
});
