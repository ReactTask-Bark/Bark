import React from "react"; //가져오자~
import styled from "styled-components";

import Board from "components/board/Board";

function Board() {
  return (
    <Board>
      <div>
        <Contents>내가 내용이다!</Contents>
      </div>
    </Board>
  );
}

const Board = styled.div`
  width: 600px;
  height: 600px;
  margin: 30px auto;
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 0 0 5px 0;
`;

const Contents = styled.div`
  height: 300px;
  border: 1px solid red;
  border-radius: 15px;
  box-shadow: 0 0 5px 0;
`;
export default CardList;
