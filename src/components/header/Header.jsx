import styled from "styled-components";

import Profile from "components/common/Profile";
import TitleText from "components/common/TitleText";
import image from "Asset/BarkLogo.png";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container className="fcc" jc="space-between">
      <div className="fcc">
        <HeaderLogo src={image}
          onClick={() => {
            navigate("/");
          }}
        >
        </HeaderLogo>
        <TitleText titleSize="40">
          <p>Bark</p>
          <div>@ 함께 짖어봐요!</div>
        </TitleText>
      </div>
      <div>
        <TitleText titleSize="25">
          <p>주특기 3주차</p>
        </TitleText>
      </div>
    </Container>
  );
};

const Container = styled.header`
  justify-content: ${(props) => props.jc} !important;
  padding: 15px;
`;

const HeaderLogo = styled(Profile)`
  cursor: pointer;
  width: 150px;
  height: 150px;
  transition-duration: 0.5s;
  &:hover {
    background-color: rgb(255, 204, 204);
  }
`;
export default Header;
