import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import axios from "apis/axiosInstance"

const initialState = {          // 초기 값
    isLoading: false,
    list : []
}

export const _LoadPostAll = createAsyncThunk(
	// 첫번째 인자 : action value
  "_LoadPostAll", 
	// 두번째 인자 : 콜백함수 
  async (payload, api) => {
    try {
        const postList = await axios.get(process.env.REACT_APP_POSTPATH)
        const sliceList = postList.data.slice(0, payload + 5)
        return api.fulfillWithValue(sliceList)
    }catch(err) {
        return api.rejectWithValue(err)
    }
  }
);

const postSlice = createSlice({
    name: "postSlice",          // 이 모듈의 이름
    initialState,               // 이 모듈의 초기상태 값
    reducers: {                 // 이 모듈의 Reducer 로직이자, 액션크리에이터
    },
    extraReducers: {
        [_LoadPostAll.pending]: (state) => {
            state.isLoading = true
        },
        [_LoadPostAll.fulfilled]: (state, action) => {
            state.isLoading = false
            state.list = action.payload
        },
        [_LoadPostAll.rejected]: (state, action) => {
            state.isLoading = false;
            console.log(action.payload)
        }
    },
});

// action생성자 내보내기
export const {} = postSlice.actions
// store에 등록을 위해 export default
export default postSlice.reducer;