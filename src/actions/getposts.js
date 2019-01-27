import { RSAA } from 'redux-api-middleware'

export const GET_POST_REQUEST = '@@getposts/GET_POST_REQUEST';
export const GET_POST_SUCCESS = '@@getposts/GET_POST_SUCCESS';
export const GET_POST_FAILURE = '@@getposts/GET_POST_REQUEST';

export const getposts = () => (
    {
    [RSAA] : {
        endpoint: '/api/posts/',
        method: 'GET',
        types: [
            GET_POST_REQUEST, GET_POST_SUCCESS, GET_POST_FAILURE
        ]
    }
}
)