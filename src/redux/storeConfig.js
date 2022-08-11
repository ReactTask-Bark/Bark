import { configureStore } from "@reduxjs/toolkit";

import post from "redux/modules/post"

const store = configureStore({
    // 나중에 reducer 추가 등록시 객체 안에 넣으면 됨
    reducer : {post}
});
  
export default store;