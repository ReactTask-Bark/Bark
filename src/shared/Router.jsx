import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { Route, Routes } from "react-router-dom";
import Main from "view/Main";
import WriteBoard from "view/WriteBoard";
import DetailBoard from "view/DetailBoard";
import NotFound from "view/NotFound";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/writepost" element={<WriteBoard />} />
      <Route path="/detailpost/:postid" element={<DetailBoard />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
