import React, { useState } from "react"; //리액트 라이브러리, useState를 사용하자
import styled from "styled-components";
import Button from "components/buttons/Button";
import { nanoid } from "nanoid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function WritePost() {
  const id = nanoid(); //나노아이디 추가
  const writeDate = new Date().getTime();
  const [contents, setContents] = useState("");
  const [author, setAuthor] = useState("");
  const nav = useNavigate();

  const onChangeHandlerContents = (e3) => {
    setContents(e3.target.value);
  };
  const onChangeHandlerAuthor = (e4) => {
    setAuthor(e4.target.value);
  };

  const addButton = (e) => {
    e.preventDefault();
    const postList = { id, contents, author, writeDate };
    axios.post(process.env.REACT_APP_POSTPATH, postList);
    setContents("");
    setAuthor("");
    nav(-1);
  };
  return (
    <>
      <Board>
        <BoardTopArea>
          <input
            type="text"
            name="Author"
            className="add-input"
            onChange={onChangeHandlerAuthor}
          />
        </BoardTopArea>
        <Contents>
          <input
            type="text"
            name="contents"
            placeholder="내용을 입력해주세요"
            className="add-input"
            onChange={onChangeHandlerContents}
          />
        </Contents>
        <ButtonArea>
          <Button onClick={addButton} type="submit">
            등록
          </Button>
          <Button onClick={() => nav(-1)}>뒤로가기</Button>
        </ButtonArea>
      </Board>
    </>
  );
}

const Contents = styled.div`
  height: 300px;
  margin: 10px;
  border: 1px solid rgb(226, 128, 128);
  border-radius: 15px;
  box-shadow: 0 0 5px 0;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  color: #e2a9a9;
`;

const Board = styled.div`
  width: 600px;
  height: 550px;
  margin: 10px auto;
  border: 1px solid rgb(255, 204, 204);
  border-radius: 15px;
  box-shadow: 0 0 5px 0;
`;

const BoardTopArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  color: #e2a9a9;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default WritePost;
