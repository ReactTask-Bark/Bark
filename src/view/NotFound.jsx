import { useNavigate } from "react-router-dom"

import FullPage from "components/common/FullPage"

const NotFound = () => {
    const navigate = useNavigate("")
    const goHome = () => navigate("/")
    setTimeout(goHome, 2000)
    return (
        <FullPage className="fcc" onClick={goHome}>
            <h2 style={{color: "red"}}>없는 페이지 입니다.</h2>
        </FullPage>
    )
}

export default NotFound