import React from "react";
import styled from "styled-components";

import Button from "components/buttons/Button";
import image from "Asset/BarkLogo.png";
import Profile from "components/common/Profile";

const Post = (props) => {
  const item = props.comments ? props.comments : props.detailPost;
  const itemWriteDate = new Date(item?.writeDate).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div>
      <PostInfo>
        <UserImg src={image} />
        <UserInfo>
          <div style={{ display: "flex" }}>
            <UserName>{item?.author}</UserName>
            <Userdate>{itemWriteDate}</Userdate>
          </div>

          <UserContent>{item?.coContents}</UserContent>
          <ButtonArea>
            <Button>수정</Button>
            <Button>삭제</Button>
          </ButtonArea>
        </UserInfo>
      </PostInfo>
    </div>
  );
};

export default Post;

const PostInfo = styled.div`
  display: flex;
  border-bottom: 1px solid pink;
  height: 100px;
  padding: 15px;
  background-color: #fff;
`;

const UserImg = styled(Profile)`
  margin: 0;
  min-width: 50px;
  width: 50px;
  min-height: 50px;
  height: 50px;
`;
const UserInfo = styled.div`
  height: 70px;
  margin-left: 15px;
`;

const UserName = styled.p`
  font-weight: 700;
`;

const Userdate = styled.p`
  color: #b8b8b8;
  font-size: 11px;
  margin: auto 10px;
`;

const UserContent = styled.p`
  font-weight: 400;
`;

const ButtonArea = styled.div`
  height: 20px;
  margin-top: 5px;
  & > button {
    margin-right: 10px;
  }
`;
