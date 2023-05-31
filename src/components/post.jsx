import React from "react"


let Post = ({post})=>{
    
    return(
        <a href={"/posts/"+post.id}>
        <div className="post">
            
            <div className="tags">
                {post.tags.map(elem=><span key={elem}>{elem}</span>)}
            </div>
            <h3>
                {post.title}
            </h3>
            <p>
                {post.body.slice(0, 120)}...
            </p>
            <span className="blue-text">Read more</span>
        </div>
        </a>
    )
}

export default Post