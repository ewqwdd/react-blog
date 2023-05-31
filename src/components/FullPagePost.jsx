import React from "react";

const FullPagePost = ({post})=>{


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
        </div>
    )
}

export default FullPagePost