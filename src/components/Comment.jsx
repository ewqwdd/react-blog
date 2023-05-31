import React from "react";
import avatar from "../images/avatar.png"

const Comment = ({comment, user})=>{
    
    return(
        <div key={comment.id} className="comment">
            <img className="comment-avatar" src={user[0].image ? user[0].image : avatar} />
            <div className="comment-body">
                <h4>{comment.user.username}</h4>
                <p>{comment.body}</p>
            </div>
        </div>
    )
}

export default Comment;

/*
{comment.user.avatar ? comment.user.avatar :
    */