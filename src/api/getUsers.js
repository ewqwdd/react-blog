

export const getUsers = async(limit=0)=>{
    let res = await fetch('https://dummyjson.com/users?limit='+String(limit))
    return res;
}