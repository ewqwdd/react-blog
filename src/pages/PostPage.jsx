import React, { useEffect, useState } from "react";
import { getPostsById } from "../api/getPostById";
import { useParams, Navigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../UI/Loader/Loader";
import FullPagePost from "../components/FullPagePost";
import Comments from "../components/Comments";

const PostsPage = ()=>{
    let params = useParams()

    let [post, setPost,] = useState()

    let [fetching, isLoading, isError, setIsError] = useFetch(async()=>{
        let data = await getPostsById(params.id)
        
        if(!isError){
            if(data.ok){
                let parsed = await data.json()
                setPost(parsed);
            }
            else{
                setIsError(true)
            }
            
        }
    }
    )

    

    useEffect(()=>{
        fetching()
    }, [])

    

    return(
        <div className="postPage">

            {isLoading ? <Loader /> : null}
            {isError ? <Navigate to="/error"/> : null}
            {post && !isError ? <FullPagePost post={post} /> : null}
            <Comments id={params.id} />
        </div>
    )
}

export default PostsPage;