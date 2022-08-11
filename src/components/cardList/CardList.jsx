import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
// 무한 스크롤용
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import Card from "components/card/Card";
import { _LoadPostAll } from "redux/modules/post";

const CardList = () => {
  // 무한 스크롤 사용법 : 감시용 ref, boolean용 lastCard
  const [lastRef, lastCard] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);
  // 렌더링 여러번 발생하는거 확인하기 => 일단 기능부터 구현하고 고치기######

  useEffect(() => {
    dispatch(_LoadPostAll(page));
  }, []);

  useEffect(() => {
    dispatch(_LoadPostAll(page));
  }, [page]);
  useEffect(() => {
    if (lastCard && page < postList.length) setPage(page + 5);
  }, [lastCard]);
  return (
    <List className="fcc">
      {postList.map((post, i) => {
        const card =
          postList.length - 1 === i && postList.length > 4 ? (
            <Card card={post} key={post.id} ref={lastRef} />
          ) : (
            <Card card={post} key={post.id} />
          );
        return card;
      })}
    </List>
  );
};

const List = styled.div`
  flex-flow: column;
`;

export default CardList;
