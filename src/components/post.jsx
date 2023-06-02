import React from "react"
import avatar from "../images/avatar.png"

let Post = ({post, user})=>{
    
    let author={}
    if(user.length>0){
        author=user[0]
    }
    
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
            <div className="post-bottom">
                <div className="author">
                    <img src={author.image ? author.image : avatar} />
                    <span>{author.username}</span>
                </div>

                <span className="blue-text">Read more</span>
            </div>
            
        </div>
        </a>
    )
}

export default Post