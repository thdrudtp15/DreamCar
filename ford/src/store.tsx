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

let slideContent = createSlice({
  name: "slideContent",
  initialState: 0,
  reducers: {
    changeContent(state, number) {
      return number.payload;
    },
  },
});

let slideImg = createSlice({
  name: "img",
  initialState: 0,
  reducers: {
    changeImg(state, number) {
      return number.payload;
    },
  },
});

let slideWidth = createSlice({
  name: "slideWidth",
  initialState: 0,
  reducers: {
    sliding(state, x) {
      return x.payload;
    },
  },
});

let newsPage = createSlice({
  name: "newsPage",
  initialState: 0,
  reducers: {
    setNewsPage(state, number) {
      return number.payload;
    },
  },
});





export default configureStore({
  reducer: {
    sidebarOpen: sidebarOpen.reducer,
    navbar: navBarStatus.reducer,
    slideContent: slideContent.reducer,
    slideImg: slideImg.reducer,
    slideWidth: slideWidth.reducer,
    newsPage: newsPage.reducer,
  },
});


export let { setNavStatus } = sidebarOpen.actions;
export let { setNavbar } = navBarStatus.actions;
export let { changeContent } = slideContent.actions;
export let { changeImg } = slideImg.actions;
export let { sliding } = slideWidth.actions;
export let { setNewsPage } = newsPage.actions;
