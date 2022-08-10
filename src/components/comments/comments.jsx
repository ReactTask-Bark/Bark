import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { nanoid } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

import useLimitInput from "hooks/useLimitInput";

import Post from "components/posts/posts";
import { readAllComments, addComments } from "apis/commentAPI";
import Button from "components/buttons/Button";
import Modal from "components/common/Modal";

const Comments = () => {
  const [commentsList, setList] = useState([]);
  const [pagingBtn, setPagingBtn] = useState([]);
  const [page, setPage] = useState(0);

  // 강의에 있는 커스텀 훅 살짝 커스텀해서 씀
  const [author, changeAuthor, resetAuthor] = useLimitInput(10);
  const [contents, changeContents, resetContents] = useLimitInput(20);

  const params = useParams().postid;
  const modalRef = useRef(null);

  const getList = () => {
    readAllComments(page, params).then((result) => {
      setList(result.list);
      let pasingNumber = [];
      for (let i = 0; i < result.listLength / 3; i++) {
        pasingNumber.push(i + 1);
      }
      setPagingBtn(pasingNumber);
    });
  };
  const modalOpen = () => {
    modalRef.current.style.opacity = 1;
    modalRef.current.style.zIndex = 100;
    modalRef.current.children[0].style.opacity = 1;
  };
  const modalClose = () => {
    modalRef.current.style.opacity = 0;
    modalRef.current.style.zIndex = -100;
    modalRef.current.children[0].style.opacity = 0;
  };
  const createComments = () => {
    if (author === "" || contents === "") {
      alert("작성자 혹은 댓글 내용이 없습니다!");
      return;
    }
    const newComments = {
      commentsId: nanoid(),
      postId: params,
      author,
      writeDate: new Date().getTime(),
      coContents: contents,
    };
    addComments(newComments).then((bl) => {
      if (bl) {
        getList();
        resetAuthor();
        resetContents();
      } else {
        alert("댓글 등록에 실패하셨습니다.");
      }
    });
  };

  useEffect(() => {
    getList();
  }, [page]);

  return (
    <CmArea>
      <CommentsTitle className="fcc">
        <span>답글</span>
        <span>
          <Button onClick={modalOpen}>등록</Button>
        </span>
      </CommentsTitle>
      {commentsList.map((c) => {
        return <Post comments={c} key={c.commentsId} />;
      })}
      <BtnArea className="fcc">
        {pagingBtn.map((p, i) => {
          return (
            <Button
              className="fcc"
              key={p + i}
              onClick={() => {
                setPage(p - 1);
              }}
            >
              {p}
            </Button>
          );
        })}
      </BtnArea>
      <Modal ref={modalRef}>
        <ModalInner>
          <p>작성자</p>
          <input
            onChange={changeAuthor}
            value={author}
            placeholder="10자 제한"
          ></input>
        </ModalInner>
        <ModalInner>
          <p>댓글 내용</p>
          <textarea
            onChange={changeContents}
            value={contents}
            style={{ height: "80px" }}
            placeholder="20자 제한"
          ></textarea>
        </ModalInner>
        <BtnArea className="fcc">
          <Button onClick={createComments}>추가하기</Button>
          <Button onClick={modalClose}>뒤로가기</Button>
        </BtnArea>
      </Modal>
    </CmArea>
  );
};

export default Comments;

const CmArea = styled.div`
  margin-top: 20px;
  border-top: 1px solid pink;
  padding: 15px;
  background-color: #fff;
`;

const CommentsTitle = styled.div`
  justify-content: space-between !important;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid pink;
  padding-bottom: 10px;
`;

const BtnArea = styled.div`
  padding-top: 10px;
  & * {
    margin-right: 10px;
  }
`;
const ModalInner = styled.div`
  margin-bottom: 10px;
  & * {
    width: 100%;
    padding: 10px;
    font-size: 20px;
  }
  & > p {
    padding: 0;
    font-size: 25px;
    color: rgb(255, 204, 204);
  }
  & > input,
  & > textArea {
    border: 1px solid rgb(255, 204, 204);
    border-radius: 25px;
    outline: 0;
  }
  & > textArea {
    resize: none;
  }
`;
