import React from "react";
import styled from "styled-components";
// import { EditAlt } from "@styled-icons/boxicons-regular";

const Post = () => {
  return (
    <div>
      <PostInfo>
        <UserImg />
        <UserInfo>
          <div style={{ display: "flex" }}>
            <UserName>Jack</UserName>
            <Userdate>2022년 8월 8일</Userdate>
          </div>

          <UserContent>hello everyone</UserContent>
          <ButtonArea>
            <Button>{/* <EditAlt size="15" /> */} edit</Button>
            <Button>{/* <EditAlt size="15" /> */}✖ delete</Button>
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

const UserImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid pink;
  align-items: center;
  background-color: #eee;
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
`;

const Button = styled.button`
  border: none;
  background-color: white;
  margin-right: 10px;
`;
