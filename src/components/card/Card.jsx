import styled from "styled-components"

import TitleText from "components/common/TitleText"

const Card = (props) => {
    const card = props.card
    return (
        <CardContainer>
            <TitleText>
                <p className="fcc" style={{minHeight: '100px'}}>{card.contents}</p>
                <div className="fcc" style={{justifyContent: 'space-around'}}>
                    <span>{card.writeDate}</span>
                    <span>{card.author}</span>
                </div>
            </TitleText>
        </CardContainer>
    )
}

const  CardContainer = styled.div`
    margin-top: 30px;
    width: 40%;
    border: 1px solid rgb(255,204,204);
    border-radius: 25px;
    background-color: white;

    cursor: pointer;
    &:hover {
        background : rgba(255,204,204,.3);
    }
`

export default Card