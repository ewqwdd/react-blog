
export const getPostsById = async(id)=>{
    let data = await fetch("https://dummyjson.com/posts/"+String(id))
    return data
}