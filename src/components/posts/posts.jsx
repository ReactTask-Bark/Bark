import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Post = () => {
  const postList = useSelector((state) => state.post.list);
  const param = useParams();
  const findPost = postList.find((post) => {
    return post.postId == param.postid;
  });

  // input값 수정 및 저장
  const [content, setContent] = useState({
    contents: findPost.contents,
  });

  const onChange = (e) => {
    setContent({
      ...content,
      contents: e.target.value,
    });
  };
  const [disabled, setDisabled] = useState(true);
  const onToggle = (e) => {
    setDisabled(!disabled);
  };

  //수정 내용 db에 저장하기
  const editHandler = (Id, edit) => {
    axios.patch(`http://localhost:3001/post/${Id}`, edit);
  };

  const done = (e) => {
    editHandler(param.postid, content);
    onToggle(e);
  };

  return (
    <div>
      <PostInfo>
        <UserImg />
        <UserInfo>
          <div style={{ display: "flex" }}>
            <UserName>{findPost.author}</UserName>
            <Userdate>2022년 8월 8일</Userdate>
          </div>
          <input
            disabled={disabled}
            onChange={onChange}
            value={content.contents}
          />
          <ButtonArea>
            {disabled ? (
              <Button onClick={onToggle}> 수정 </Button>
            ) : (
              <Button onClick={done}>저장</Button>
            )}

            <Button> delete </Button>
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
