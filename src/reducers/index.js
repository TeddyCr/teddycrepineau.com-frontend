import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import getposts, * as fromGetPosts from './getposts.js'
import getprofile, * as fromGetProfile from './getprofile.js'

const rootReducer = (history) => combineReducers({
    getposts: getposts,
    getprofile: getprofile,
    router: connectRouter(history)
})

export default rootReducer

export const posts =
    state => fromGetPosts.serverPosts(state.getposts)

export const profile = 
    (state) => fromGetProfile.serverProfile(state.getprofile)