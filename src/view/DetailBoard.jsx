import styled from "styled-components";
import React from "react";

import Comments from "../components/comments/comments";
import Post from "components/posts/posts";

const DetailBoard = () => {
  return (
    <BoardLayout>
      <Post />
      <Comments></Comments>
    </BoardLayout>
  );
};

export default DetailBoard;

const BoardLayout = styled.div`
  background-color: rgba(255, 204, 204, 0.1);
  width: 500px;
  height: 500px;
  margin: 10px auto 0;
  border: 1px solid pink;
`;
