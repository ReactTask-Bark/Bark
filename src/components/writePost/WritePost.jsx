import React, { useState } from "react"; //리액트 라이브러리, useState를 사용하자
import styled from "styled-components"; 
// import { useDispatch } from "react-redux";//리덕스 디스패치 이용하자
import Button from "components/buttons/Button";
import {Post} from "../../redux/modules/post"
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";

function WritePost() {
  // const [id, setId ] = useState(0);   //[state 이름, state 변경함수], useState(초기값);
  const postId = nanoid();  //나노아이디 추가
  const writeDate = new Date().getTime();
  const [contents, setContents ] = useState("");
  const [author, setAuthor ] = useState("");
  // const [passWorld, setPassword ] = useState("");
  // const [WriteDate, setWriteDate] = useState("");
  // const dispatch = useDispatch(); //useDispatch 라이브러리 사용해주기 전에 dispatch로선언해주자
  
  // const onChangeHandlerId = (e1)=> {
  //   setId(e1.target.value);
    
  // }
  // const onChangeHandlerPostId = (e2)=> {
  //   setPostId(e2.target.value);
    
  // }
  const onChangeHandlerContents = (e3)=> {
    setContents(e3.target.value);
    
  }
  const onChangeHandlerAuthor = (e4)=> { // onChangeHandlerAuthor함수를 선언해주고, 매개변수 e를 받아오는 함수다.
    setAuthor(e4.target.value);          //setAuthor함수는 매개변수 안에있는 target.value 값을 가져온다->setAuthor 함수는
                                      //target.value(입력했던Author)값을 가져온다.
  }

  // const onChangeHandlerPassWord = (e5)=> {
  //   setPassWord(e5.target.value);ㅌ4
    
  // }

  // const onChangeHandlerWriteDate = (e6)=> {
  //   setWriteDate=(e6.target.value);
    
  // }
  
const addbt = (e)=> { //디스패치는 버튼에 달아준다->입력할때마다 붙여주면 값이 너무 많으니, 버튼을 눌렀을때 한번에 뙇!
  e.preventDefault(); //리로드 막아주고 (새로고침)
  // setId(id +1); 
  const postList = {postId, contents, author, writeDate }
  axios.post(process.env.REACT_APP_POSTPATH,postList)
  // dispatch(Post({postId, contents, author, writeDate }));
  // setPostId("");
  setContents("");//버튼 눌러주고 나면 비워 줘
  setAuthor("");  //버튼 눌러주고 나면 비워 줘
  // setWriteDate("");
  // setPassWord("");
  

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
            <Button onClick={addbt} type = "submit">
              등록
              </Button>
              <Button>삭제</Button>
              <Button>뒤로가기</Button>
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
