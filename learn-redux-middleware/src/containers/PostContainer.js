import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../modules/posts';
import Post from '../components/Post';

const PostContainer = ( ) => {
    const {id} = useParams()
    const {data, loading, error } = useSelector(state=>state.posts.post);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPost(Number(id)))
    }, [dispatch,id,data])
    if(loading) return <div>로딩중입니다....</div>
    if(error) return <div>에러발생</div>
    if(!data) return null;
    return (
        <Post post={data}/>
    );
};

export default PostContainer;