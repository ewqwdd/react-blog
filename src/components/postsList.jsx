import React from "react";
import Post from "./post";

const PostsList = ({posts, users})=>{

    return(
        <div className="posts">
            {posts.map(elem=><Post key={elem.id} post={elem} user={users.filter(user=>user.id==elem.userId)} />)}
        </div>
    )
}

export default PostsList;