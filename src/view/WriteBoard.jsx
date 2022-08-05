import React from "react"; //가져오자~
import styled from "styled-components"; // styled-components에서 styled 키워드 가져와
import Header from "../components/header/Header"; //components Header 연결해줌

function WriteBoard() {
  return (
    <A>
      <B>
        <p> 작성자 </p>
        <p> 내용 </p>
        <div>
          <button style={{ margin: "0 10px" }}>등록</button>
          <button>취소</button>
        </div>
      </B>
    </A>
  );
}

const A = styled.div`
  font-size: 30px;
  border: 3px solid rgb(176, 80, 80);
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 600px;
  height: 700px;
  display: flex;
 
`;
const B = styled.div`
  .body {
    border: 2px solid rgb(238, 238, 238);
    width: 100%;
    height: 100vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
`;
export default WriteBoard; //내보내자~
