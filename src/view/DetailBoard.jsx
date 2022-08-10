import styled from "styled-components";
import React from "react";

import Comments from "components/comments/comments";
import DetailPost from "components/posts/detailposts";

const DetailBoard = () => {
  return (
    <BoardLayout>
      <DetailPost />
      <Comments></Comments>
    </BoardLayout>
  );
};

export default DetailBoard;

const BoardLayout = styled.div`
  position: relative;
  top: 30px;
  background-color: rgba(255, 204, 204, 0.1);
  width: 500px;
  margin: 0 auto;
  border: 1px solid pink;
`;
