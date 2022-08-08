import { createSlice } from "@reduxjs/toolkit";

const initialState = {          // 초기 값
    isLoding: false,
    list : [
        {
            postId: "dummy",
            contents: "게시글도 없어요!", 
            author: "작성자가 없어요!",
            password: "qwe123",
            writeDate: new Date()
        }
    ]
}

const postSlice = createSlice({
    name: "post",               // 이 모듈의 이름
    initialState,               // 이 모듈의 초기상태 값
    reducers: {                 // 이 모듈의 Reducer 로직이자, 액션크리에이터
        
    },
});

// store에 등록을 위해 export default
export default postSlice.reducer;