import styled from "styled-components"
import { useSelector } from "react-redux"

import Card from "components/card/Card"

const CardList = () => {
    const postList = useSelector(state => state.post.list)
    console.log(postList)
    return(
        <List className="fcc">
            {postList.map((post) => {
                return <Card card={post} key={post.postId}/>
            })}
        </List>
    )
}

const List = styled.div`
    flex-flow: column;
`

export default CardList