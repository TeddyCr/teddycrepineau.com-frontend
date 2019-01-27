import * as getprofile from '../actions/getprofile'

const inititalState = {
    profile: ""
}

export default (state=inititalState, action) => {
    switch(action.type) {
        case getprofile.GET_PROFILE_SUCCESS:
            return({
                profile: action.payload
            })
        default:
            return state
    }
}

export const serverProfile = (state) => state.profile