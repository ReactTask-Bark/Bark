import React from "react"; //가져오자~
import styled from "styled-components"; // styled-components에서 styled 키워드 가져와
import Header from "../components/header/Header"; //components Header 연결해줌

function WriteBoard() {
  return (
    <Board>
      <HeadArea>
        <div>
          <div>제목 : </div>
          <div>내용 : </div>
        </div>

        <div>내가 제목이다!</div>
      </HeadArea>

      <div>
        <Contents>내가 내용이다!</Contents>
        <ButtonArea>
          <button>수정</button>
          <button>삭제</button>
          <button>뒤로가기</button>
        </ButtonArea>
      </div>
    </Board>
  );
}

const Contents = styled.div`
  height: 300px;
  border: 1px solid red;
  border-radius: 15px;
  box-shadow: 0 0 5px 0;
`;

const Board = styled.div`
  width: 600px;
  height: 600px;
  margin: 30px auto;
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 0 0 5px 0;

`;

const HeadArea = styled.div`
  display: flex;
  justify-content: space-between;;
  margin: 10px;
  
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export default WriteBoard;
