import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import TitleText from "components/common/TitleText";
import Profile from "components/common/Profile";
import image from "Asset/BarkLogo.png"

const Card = (props) => {
  const card = props.card;
  const writeDate = card.writeDate.toLocaleString("ko-KR", {
    month: "long",
    day: "numeric"
  })
  const navigate = useNavigate();
  return (
    <CardContainer
      onClick={() => {
        navigate("/detailpost/" + card.id);
      }}
    >
      <TitleText>
        <div className="fcc" style={{ justifyContent: "flex-start" }}>
          <CardProfile src={image}/>
          <div>
            <CardAuthor className="fcc">{card.author}</CardAuthor>
            <CardDate className="fcc" style={{ justifyContent: "flex-start" }}>{writeDate}</CardDate>
          </div>
        </div>
        <p className="fcc" style={{ minHeight: "100px" }}>
          {card.contents}
        </p>
      </TitleText>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  margin-top: 30px;
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
  width: 50px;
  height: 50px;
`;

const CardAuthor = styled.div`
  height: 25px;
`

const CardDate = styled(CardAuthor)`
  font-size: 12px;
`

export default Card;
