import React from "react";
import "./Create.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import Header from "";
// import Buttons from "";
// import Layout from "";
// import Board from "";

const Create = () => {
  const navigate = useNavigate();
  const container = useSelector((state) => state.todo.list);

  return (
    <div className="body">
      <div className="box-wrapper">
        <div className="box">
          <h1> 작성자 </h1>
          <p> 내용 </p>
          <div>
            <button className="back-button" onClick={() => navigate("/")}>
              등록
            </button>
            <button className="back-button" onClick={() => navigate("/")}>
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
