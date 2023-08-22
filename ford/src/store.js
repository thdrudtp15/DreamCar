import { createSlice, configureStore } from "@reduxjs/toolkit";

let sidebarOpen = createSlice({
  name: "sidebarOpen",
  initialState: "",
  reducers: {
    setNavStatus(state, req) {
      if (req.payload === "close") {
        return "";
      } else {
        return "sidebar-open";
      }
    },
  },
});

export default configureStore({
  reducer: {
    sidebarOpen: sidebarOpen.reducer,
  },
});

export let { setNavStatus } = sidebarOpen.actions;
