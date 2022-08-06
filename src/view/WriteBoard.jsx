import React from "react"; //가져오자~
import styled from "styled-components"; // styled-components에서 styled 키워드 가져와
import Header from "../components/header/Header"; //components Header 연결해줌


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})




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
  color: #90cedd9a;
  font-size: 30px;
  border: 3px solid rgba(255,204,204,.5);
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 600px;
  height: 700px;
  display: flex;
 
`;
const B = styled.div`
  .body {
    
  }
`;
export default WriteBoard; //내보내자~
