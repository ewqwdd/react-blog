import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { getUser } from "../api/getUser";
import Loader from "../UI/Loader/Loader";
import avatar from "../images/avatar.png"

const FullPagePost = ({post})=>{

    let [author, setAuthor] = useState({})

    let [fetching, isLoading, isError] = useFetch(async()=>{
        let data = await getUser(post.id);
        if(!isError && data.ok){
            let parsed = await data.json()
            setAuthor(parsed)
        }
    }  
    )

    useEffect(()=>{
        fetching()
    }, [])


    return(
        <div className="fullPage-post">
            <div className="post-title">
                <div className="tags">
                    {post.tags.map(elem=><span key={elem}>{elem}</span>)}
                </div>
                <h3>
                    {post.title}
                </h3>
                <hr />
            </div>
            <p>
                {post.body}
            </p>
            {isLoading ? <Loader /> :
            <div style={{display:"inline-block"}}> 
            <div className="author">
                    <img src={author.image ? author.image : avatar} />
                    <span>{author.username}</span>
                </div>
                </div>}
        </div>
    )
}

export default FullPagePost