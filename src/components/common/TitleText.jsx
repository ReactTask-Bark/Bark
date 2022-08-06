import styled from "styled-components"

const TitleText = (props) => {
    const titleSize = props.titleSize ? props.titleSize : '20'
    return(
        <Container titleSize={titleSize}>{props.children}</Container>
    );
}

const Container = styled.div`
    padding: 20px;

    color: rgb(255,204,204);
    font-size: 20px;
    & > p {
        font-size: ${props => props.titleSize + 'px'};
        font-weight: bold;
    }
`

export default TitleText