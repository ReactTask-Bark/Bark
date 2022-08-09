import styled from "styled-components"

const Button = (props) => {

    if (props.buttonType === "main") {
        return (
            <MainButton>{props.children}</MainButton>
        )
    }
    else {
        const btnColor = 
        props.children === "등록" ? "#006600" :
        props.children === "뒤로가기" ? "#CCCC00" : "white"
        return (
            <CommonButton color={btnColor}>{props.children}</CommonButton>
        )
    }
}
// 예시안
{/* <Button>등록</Button> */}
{/* <Button>뒤로가기</Button> */}

const MainButton = styled.button`
    cursor: pointer;
    width: 80px;
    height: 80px;

    background: rgb(255, 204, 204);
    border: 2px solid rgb(255, 204, 204);
    border-radius: 50%;

    font-size: 50px;
    font-weight: bold;
    color: white;

    transition-duration: 0.5s;
    &:hover {
    background-color: white;
    color: rgb(255, 204, 204);
    }
`

const CommonButton = styled(MainButton)`
    width: 120px;
    height: 50px;
    padding: 10px;

    background: ${props => props.color};
    border: 2px solid ${props => props.color};
    border-radius: 25px;
    font-size: 20px;

    &:hover {
    color: ${props => props.color};
    }
`

export default Button