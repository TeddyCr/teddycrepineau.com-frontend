import { RSAA } from 'redux-api-middleware'

export const GET_PROFILE_REQUEST = '@@getprofile/GET_POST_REQUEST';
export const GET_PROFILE_SUCCESS = '@@getprofile/GET_POST_SUCCESS';
export const GET_PROFILE_FAILURE = '@@getprofile/GET_POST_FAILURE';

export const getprofile = () => (
    {
    [RSAA] : {
        endpoint: '/api/profiles',
        method: 'GET',
        types: [
            GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS,  GET_PROFILE_FAILURE
        ]
    }
}
)
