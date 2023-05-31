
export const getComments = async(id, limit)=>{
    let data = await fetch("https://dummyjson.com/posts/"+String(id)+"/comments?limit="+String(limit))
    return data
}