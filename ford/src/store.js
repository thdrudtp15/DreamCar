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

let navBarStatus = createSlice({
  name: "navBarStatus",
  initialState: "",
  reducers: {
    setNavbar(state, req) {
      return req.payload;
    },
  },
});

export default configureStore({
  reducer: {
    sidebarOpen: sidebarOpen.reducer,
    navbar: navBarStatus.reducer,
  },
});

export let { setNavStatus } = sidebarOpen.actions;
export let { setNavbar } = navBarStatus.actions;
