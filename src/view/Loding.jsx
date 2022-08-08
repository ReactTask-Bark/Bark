import styled, { keyframes } from "styled-components"

import Profile from "components/common/Profile"
import image from "Asset/BarkLogo.png"

const LoadingPage = () => {
    return (
        <Page className="fcc">
            <Logo src={image}/>
        </Page>
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

const Page = styled.div`
    position: fixed;
    top:0; right: 0; bottom: 0; left: 0;
    background: rgb(255,204,204);
`
const Logo = styled(Profile)`
    width: 200px;
    height: 200px;
    animation: ${boxFade} 2s 0s infinite linear alternate;
`

export default LoadingPage