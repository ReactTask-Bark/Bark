import axios from "apis/axiosInstance"

export const readAllComments = async (page, postId) => {
    const commentsList = await axios.get(process.env.REACT_APP_COMMENTSPATH + `?postId=${postId}`)
    const result = {list : commentsList.data.slice(page*3, (page*3) + 3), listLength: commentsList.data.length}
    return result
}

export const addComments = async (newComments) => {
    const res = await axios.post(process.env.REACT_APP_COMMENTSPATH, newComments)
    return res.status === 201 ? true : false
}