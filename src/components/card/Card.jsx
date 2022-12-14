import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { forwardRef } from "react";

import TitleText from "components/common/TitleText";
import Profile from "components/common/Profile";
import image from "Asset/BarkLogo.png";

// forwardRef = ref 하위로 전달용
const Card = forwardRef((props, ref) => {
  const card = props.card;
  const writeDate = new Date(card.writeDate).toLocaleString("ko-KR", {
    month: "long",
    day: "numeric",
  });
  const navigate = useNavigate();
  return (
    <CardContainer
      onClick={() => {
        navigate("/detailpost/" + card.id);
      }}
      ref={ref}
    >
      <TitleText>
        <div className="fcc" style={{ justifyContent: "flex-start" }}>
          <CardProfile src={image} />
          <div>
            <div>{card.author}</div>
            <div style={{ fontSize: "12px" }}>{writeDate}</div>
          </div>
        </div>
        <p style={{ margin: "10px", height: "80px" }}>{card.contents}</p>
      </TitleText>
    </CardContainer>
  );
});

const CardContainer = styled.div`
  margin: 30px 0;
  width: 40%;
  border: 1px solid rgb(255, 204, 204);
  border-radius: 25px;
  background-color: white;

  cursor: pointer;
  &:hover {
    background: rgba(255, 204, 204, 0.3);
  }
`;

const CardProfile = styled(Profile)`
  min-width: 50px;
  width: 50px;
  min-height: 50px;
  height: 50px;
`;

export default Card;
