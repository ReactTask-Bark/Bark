import React from "react";
import styled from "styled-components";

import Post from "components/posts/posts";

const Comments = () => {
  return (
    <CmArea>
      <CommentsTitle>답글</CommentsTitle>
      <Post />
      <Post />
    </CmArea>
  );
};

export default Comments;

const CmArea = styled.div`
  margin-top: 20px;
  border-top: 1px solid pink;
  height: 300px;
  padding: 15px;
  background-color: #fff;
`;

const CommentsTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid pink;
  padding-bottom: 10px;
`;
