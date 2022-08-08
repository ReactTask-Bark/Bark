import styled, { keyframes } from "styled-components"

import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate("")
    const goHome = () => navigate("/")
    setTimeout(goHome, 2000)
    return (
        <Page className="fcc" onClick={goHome}>
            <h2 style={{color: "red"}}>없는 페이지 입니다.</h2>
        </Page>
    )
}

const Page = styled.div`
    position: fixed;
    top:0; right: 0; bottom: 0; left: 0;
    background: rgb(255,204,204);
`

export default NotFound