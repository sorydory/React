//import {getPosts,getPostById} from '../api/posts';
//getPosts()
//postsAPI.getPosts()
import axios from "axios";
//1.액션타입
//포스트 여러개 조회하기
const GET_POSTS ="GET_POSTS";
const GET_POSTS_SUCCESS ="GET_POSTS_SUCCESS";
const GET_POSTS_ERROR ="GET_POSTS_ERROR";

//포스트 하나 조회하기
const GET_POST ="GET_POST";
const GET_POST_SUCCESS ="GET_POST_SUCCESS";
const GET_POST_ERROR ="GET_POST_ERROR";

//thunk 함수
export const getPosts =() => async (dispatch) => {
    dispatch({type:GET_POSTS}); //요청이 시작됨
    try{
        const post = await axios.get('http://localhost:3005/posts/');
        dispatch({type:GET_POSTS_SUCCESS, data:post})
    }
    catch(e){
        dispatch({type:GET_POSTS_ERROR , error:e})
    }
}

export const getPost =(id) => async (dispatch) => {
    dispatch({type:GET_POST}); //요청이 시작됨
    try{
        const post = await axios.get(`http://localhost:3005/posts/${id}`);
        dispatch({type:GET_POST_SUCCESS, data:post.data})
    }
    catch(e){
        dispatch({type:GET_POST_ERROR , error:e})
    }
}

//초기상태값 
const initialState = {
    posts : {
        loading : false,
        data : null,
        error : null
    },
    post : {
        loading : false,
        data : null,
        error : null
    }
}

export default function posts(state=initialState,action){
    switch(action.type){
        case GET_POST:
                return{
                    ...state,
                    post: {
                        loading:true,
                        data:null,
                        error:null
                    }
                };
            case GET_POST_SUCCESS:
                return{
                    ...state,
                    post:{
                        loading:false,
                        data:action.data,
                        error:null
                    }
                };
            case GET_POST_ERROR:
                return{
                    ...state,
                    post:{
                        loading:false,
                        data:null,
                        error:action.error
                    }
                };
                case GET_POSTS:
                return{
                    ...state,
                    post: {
                        loading:true,
                        data:null,
                        error:null
                    }
                };
            case GET_POSTS_SUCCESS:
                return{
                    ...state,
                    post:{
                        loading:false,
                        data:action.data,
                        error:null
                    }
                };
            case GET_POSTS_ERROR:
                return{
                    ...state,
                    posts:{
                        loading:false,
                        data:null,
                        error:action.error
                    }
                };
            default:
                return state;
    }
}