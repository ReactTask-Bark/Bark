import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Button from "components/buttons/Button";
import Profile from "components/common/Profile";
import image from "Asset/BarkLogo.png";

const DetailPost = () => {
  const postList = useSelector((state) => state.post.list);
  const param = useParams();
  const findPost = postList.find((post) => {
    return post.postId === param.postid;
  });

  // input값 수정 및 저장
  const [content, setContent] = useState({
    contents: findPost.contents,
  });

  // writeDate 문자로 변환하는 방법 => 바뀐거
  const writeDate = new Date(findPost.writeDate).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const onChange = (e) => {
    setContent({
      ...content,
      contents: e.target.value,
    });
  };

  //focus 구현

  const [disabled, setDisabled] = useState(true);
  const onToggle = (e) => {
    setDisabled(!disabled);
  };

  //수정 내용 db에 저장하기
  const editHandler = async (Id, edit) => {
    const target = await axios.get(
      process.env.REACT_APP_POSTPATH + `?postId=${Id}`
    );
    await axios.patch(
      process.env.REACT_APP_POSTPATH + `/${target.data[0].id}`,
      edit
    );
  };

  const done = (e) => {
    editHandler(param.postid, content);
    onToggle(e);
  };

  return (
    <div>
      <PostInfo>
        <PostContainer>
          <UserImg src={image} />
          <UserInfo>
            <div style={{ display: "flex" }}>
              <UserName>@{findPost.author}</UserName>
              <Userdate>{writeDate}</Userdate>
            </div>
            {disabled ? (
              <UserContent
                disabled={disabled}
                onChange={onChange}
                value={content.contents}
                style={{ border: "none" }}
              />
            ) : (
              <UserContent
                disabled={disabled}
                onChange={onChange}
                value={content.contents}
              />
            )}
          </UserInfo>
        </PostContainer>
        <ButtonArea>
          {disabled ? (
            <Button onClick={onToggle}>수정</Button>
          ) : (
            <Button onClick={done}>저장</Button>
          )}
          <Button>삭제</Button>
        </ButtonArea>
      </PostInfo>
    </div>
  );
};
export default DetailPost;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid pink;
  height: 150px;
  padding: 15px;
  background-color: #fff;
`;
const PostContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
// 바뀐거
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
const UserContent = styled.input`
  margin-top: 5px;
  font-size: 15px;
  font-weight: 400;
  background-color: #fff;
  width: 400px;
  height: 30px;
  border-radius: 6px;
  border-color: #eee;
`;

const ButtonArea = styled.div`
  height: 20px;
  margin-top: 5px;
  // 바뀐거
  & > * {
    margin-right: 10px;
  }
`;
