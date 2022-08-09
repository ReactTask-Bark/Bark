import React from "react"; //가져오자~
import styled from "styled-components"; // styled-components에서 styled 키워드 가져와

import Button from "components/buttons/Button";

function WriteBoard() {
  return (
    <>
      <Board>
        <BoardTopArea>
          <div>
            <div>제목 : </div>
            <div>내용 : </div>
          </div>

          <div>내가 제목이다!</div>
        </BoardTopArea>

        <div>
          <Contents>내가 내용이다!</Contents>
          <ButtonArea>
            <Button>등록</Button>
            <Button>삭제</Button>
            <Button>뒤로가기</Button>
          </ButtonArea>
        </div>
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

export default WriteBoard;
