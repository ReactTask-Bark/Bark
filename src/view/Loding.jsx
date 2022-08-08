import styled, { keyframes } from "styled-components"

import Profile from "components/common/Profile"
import image from "Asset/BarkLogo.png"
import FullPage from "components/common/FullPage"

const LoadingPage = () => {
    return (
        <FullPage className="fcc">
            <Logo src={image}/>
        </FullPage>
    )
}

const boxFade = keyframes`
  0% {
    opacity: 1;

  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Logo = styled(Profile)`
    width: 200px;
    height: 200px;
    animation: ${boxFade} 2s 0s infinite linear alternate;
`

export default LoadingPage