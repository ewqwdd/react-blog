

export const postComment = async(userId, postId, body)=>{
    let res = await fetch("https://dummyjson.com/comments/add", {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            userId:userId,
            postId:postId,
            body:body
        })
    })
    return res;
}