
import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit"; //createSlice:리듀서를 만드는 함수,createAsyncThunk:미듈웨어중 썽크를 만드는 함수
import axios from "apis/axiosInstance"


const initialState = {
  // 초기 값
  isLoading: false,
  list: [],
};

export const _LoadPostAll = createAsyncThunk(
  // 첫번째 인자 : action value
  "_LoadPostAll",
  // 두번째 인자 : 콜백함수
  async (payload, api) => {
    try {
      const postList = await axios.get(
        process.env.REACT_APP_POSTPATH + "/post"
      );
      const sliceList = postList.data.slice(0, payload + 5);
      return api.fulfillWithValue(sliceList);
    } catch (err) {
      return api.rejectWithValue(err);
    }
  }
);

export const Post = createAsyncThunk( //createAsyncThunk(액션벨류, 콜백함수); 모양이야.
    "Post", 
  async (payload, api) => { //async => 기다려줘~ 무엇을?
    try {                   //axios 를 post 할때까지! (await~~)
        const postList = await axios.post(process.env.REACT_APP_POSTPATH,payload) //간추린 모양은 -> Const postList = axios.post(url,payload)
    return api.fulfillWithValue(postList.data) //api가 잘 들어 갔을때 postlist,data를 디스패치 해줘! 리턴했을때 async,await기다려주지않아 바로 리턴하니까 위에  해줌
    
    }catch(err) {
        return api.rejectWithValue(err) //얘도 dispatch가 합쳐져 있다
    }
  }
);
//인풋값을 리듀서한테 보내면 리듀서는 바로 실행해!, 나는 서버에 보내고 싶은데 리듀서는 기다려주지않아,undefine 을 뱉지! 그래서  필요한게
//미들웨어야 리듀서한테 보내지 않고 사전 작업을 해주지!
//미들웨어로 디스페치 하니까 리듀서가 아닌 엑스트라 리듀서를 만들어 사용
const postSlice = createSlice({
  name: "postSlice", // 이 모듈의 이름
  initialState, // 이 모듈의 초기상태 값
  reducers: {
    // 이 모듈의 Reducer 로직이자, 액션크리에이터
  },
  extraReducers: {
    [_LoadPostAll.pending]: (state) => {
      state.isLoading = true;
    },

    extraReducers: {  //얘가 중간다리 미들웨어 리듀서야! 너한테 dipatch할게
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
        },
        [Post.pending]: (state) => {
            state.isLoading = true
        },
        [Post.fulfilled]: (state, action) => {
            state.isLoading = false
            state.list = [...state, action.payload]
        },
        [Post.rejected]: (state, action) => {
            state.isLoading = false;
            console.log(action.payload)
        }

    },
    [_LoadPostAll.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    },
  },
});



// action생성자 내보내기 => 쓰실때 주석 풀기
// export const {} = postSlice.actions
// store에 등록을 위해 export default
export default postSlice.reducer;
