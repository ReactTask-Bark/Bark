import styled from "styled-components"

const FixedForm = () => {
    return(
    <Form>
        <AddBtn>+</AddBtn>
    </Form>
    )
}

const Form = styled.div`
    position: fixed;
    bottom: 100px; right: 25vw;
`
const AddBtn = styled.button`
    cursor: pointer;
    width: 80px;
    height: 80px;
    
    background: rgb(255,204,204);
    border: 2px solid rgb(255,204,204);
    border-radius: 50%;
    
    font-size: 50px;
    font-weight: bold;
    color: white;

    transition-duration: .5s;
    &:hover {
        background-color: white;
        color: rgb(255,204,204);
    }
`

export default FixedForm