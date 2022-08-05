import styled from "styled-components"

import Profile from "components/common/Profile"
import TitleText from "components/common/TitleText"
import image from "Asset/BarkLogo.png"

const Header = () => {
    return (
        <Container className="fcc" jc="space-between">
            <div className="fcc">
                <HeaderLogo>
                    <img src={image}/>
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
    )
}

const Container = styled.header`
    justify-content: ${props => props.jc} !important;
    padding: 15px;
`

const HeaderLogo = styled(Profile)`
    width: 150px;
    height: 150px;
    & > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    transition-duration: .5s;
    &:hover {
        background-color: rgb(255,204,204);
    }
`
export default Header
