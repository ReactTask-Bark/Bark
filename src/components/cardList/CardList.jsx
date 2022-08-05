import styled from "styled-components"

import Card from "components/card/Card"

const CardList = () => {
    const dummyList = [1,2,3,4,5]
    return(
        <List>
            {dummyList.map((c) => {
                return <Card card={c}/>
            })}
        </List>
    )
}

const List = styled.div`
    
`

export default CardList