import React from "react";
import Post from "./post";

const PostsList = ({posts})=>{
    return(
        <div className="posts">
            {posts.map(elem=><Post key={elem.id} post={elem}/>)}
        </div>
    )
}

export default PostsList;