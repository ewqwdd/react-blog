
export const getPosts = async(limit=0, skip=0)=>{
    let data = await fetch("https://dummyjson.com/posts?limit="+String(limit)+"&skip="+String(skip))
    return data;
}