import * as getposts from '../actions/getposts'

const initialState = {
    posts: ""
}

export default (state=initialState, action) => {
    switch(action.type) {
        case getposts.GET_POST_SUCCESS:
            return ({
                posts: action.payload
            })
        default:
            return state
    }
}
export const serverPosts = (state) => state.posts
