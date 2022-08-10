import styled from "styled-components"
import { useNavigate } from "react-router-dom"
const Button = (props) => {
    const btnColor = 
    props.children === "등록" ? "#006600" :
    props.children === "뒤로가기" ? "#CCCC00" : "rgb(255, 204, 204)"

    const btnSize =
    props.buttonType === "comment" ? "20" : "30"
    const navigate = useNavigate();
    const handleronClick  = () => {
        navigate("/writepost")
    
    }

    if (props.buttonType === "main") {
        return (
            <MainButton onClick={props.onClick} color={btnColor}>{props.children}</MainButton>
        )
    }
    else {
        return (
            <CommonButton onClick={props.onClick} color={btnColor} size={btnSize}>{props.children}</CommonButton>
        )
    }
}

const MainButton = styled.button`
    cursor: pointer;
    width: 80px;
    height: 80px;

    background: ${props => props.color};
    border: 2px solid ${props => props.color};
    border-radius: 50%;

    font-size: 50px;
    font-weight: bold;
    color: white;

    transition-duration: 0.5s;
    &:hover {
    background-color: white;
    color: ${props => props.color};
    }
`

const CommonButton = styled(MainButton)`
    width: auto;
    height: ${props => props.size + "px"};

    border-radius: 25px;
    font-size: ${props => (props.size / 2) + "px"};
`

export default Button