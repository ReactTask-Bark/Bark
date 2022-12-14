import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Button from "components/buttons/Button";
import image from "Asset/BarkLogo.png";
import Profile from "components/common/Profile";

const Post = (props) => {
  const item = props.comments;
  const itemWriteDate = new Date(item?.writeDate).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [coContents, setcoContents] = useState({
    coContents: item.coContents,
  });

  // 내용 수정 함수
  const onChange = (e) => {
    setcoContents({
      ...coContents,
      coContents: e.target.value,
    });
  };

  // 버튼으로 disabled 값 변경하기
  const [disabled, setDisabled] = useState(true);
  const onToggle = (e) => {
    setDisabled(!disabled);
  };
  // db 저장함수
  const editHandler = async (edit) => {
    await axios.patch(process.env.REACT_APP_COMMENTSPATH + `/${item.id}`, edit);
  };

  const done = () => {
    onToggle();
    editHandler(coContents);
  };
  const deleteHandler = async (edit) => {
    await axios.delete(process.env.REACT_APP_COMMENTSPATH + `/${item.id}`);
  };
  return (
    <div>
      <PostInfo>
        <UserImg src={image} />
        <UserInfo>
          <div style={{ display: "flex" }}>
            <UserName>{item?.author}</UserName>
            <Userdate>{itemWriteDate}</Userdate>
          </div>

          {disabled ? (
            <UserContent
              disabled={disabled}
              value={coContents.coContents}
              onChange={onChange}
              style={{ border: "none" }}
            />
          ) : (
            <UserContent
              disabled={disabled}
              value={coContents.coContents}
              onChange={onChange}
            />
          )}
          <ButtonArea>
            <Button onClick={disabled ? onToggle : done}>
              {disabled ? "수정" : "완료"}
            </Button>
            <Button
              onClick={() => {
                deleteHandler();
                props.setEmpty(1);
              }}
            >
              삭제
            </Button>
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

const UserContent = styled.input`
  font-weight: 400;
  border-radius: 5px;
  background-color: white;
  border-color: #eee;
  width: 400px;
`;

const ButtonArea = styled.div`
  height: 20px;
  margin-top: 5px;
  & > button {
    margin-right: 10px;
  }
`;
