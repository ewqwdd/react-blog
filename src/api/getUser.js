export const getUser = async(id)=>{
    let res = await fetch("https://dummyjson.com/user/"+String(id))
    return res;
}