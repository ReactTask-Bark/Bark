import styled from "styled-components"

import Card from "components/card/Card"

const CardList = () => {
    const dummyList = [
        {
            id: '789asdg',
            contents: '내용1입니다',
            author: '작성자1입니다',
            writeDate: '08-05'
        },
        {
            id: '789asd9',
            contents: '내용2입니다',
            author: '작성자2입니다',
            writeDate: '08-06'
        },
        {
            id: '789asd8',
            contents: '내용3입니다',
            author: '작성자3입니다',
            writeDate: '08-07'
        },
    ]
    return(
        <List className="fcc">
            {dummyList.map((c) => {
                return <Card card={c} key={c.id}/>
            })}
        </List>
    )
}

const List = styled.div`
    flex-flow: column;
`

export default CardList