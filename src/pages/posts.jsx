import React, { useState, useEffect, Fragment, useMemo, useRef } from "react";
import { getPosts } from "../api/getPosts";
import { useFetch } from "../hooks/useFetch";
import PostsList from "../components/postsList";
import CheckBox from "../UI/checkbox/checkbox";
import Loader from "../UI/Loader/Loader";
import Select from "../components/select";
import { Pagination } from "../hooks/usePagination";
import { getUsers } from "../api/getUsers";

const PostsPage = ()=>{
    
    let [posts, setPosts] = useState([])

    let [limit, setLimit] = useState(30)

    let [totalPosts, setTotalPosts] = useState()

    let sortBy = [{title: "by id", value:"id"}, {title: "by title", value: "title"}]

    let [selectValue, setSelectValue] = useState()

    let tags = ["history", "american", "crime", "french", "english", "mystery"]

    let [tagsValue, setTagsValue] = useState([])

    let [users, setUsers] = useState([])

    let bottom = useRef()

    let [fetchPosts, isLoading, isError] = useFetch(
        async(lim)=>{
            let data = await getPosts(limit=lim)
            if(!isError && data.ok){
                let parsed = await data.json()
                setPosts(parsed.posts);
                setTotalPosts(parsed.total)
            }
            
        }
    ) 
    
    useEffect(()=>{fetchPosts(limit)},[limit])
    
    let [usersFetching, isUsersLoading, isUsersError] = useFetch(async()=>{
        let data = await getUsers()
        if(!isUsersError && data.ok){
            let parsed = await data.json()
            
            setUsers(parsed.users)
        }
    })

    useEffect(()=>{
        usersFetching()
    }, [])

    Pagination(limit, setLimit, isLoading, totalPosts, bottom, 30)

    let sorted = useMemo(()=>{
        let temp = [...posts]
        if(selectValue){
            if(selectValue==="id"){
                temp.sort((a,b)=>{return a.id-b.id})
            }
            else{
                temp.sort((a,b)=>{return a[selectValue].localeCompare(b[selectValue])})
            }
        }
        return temp;
    },
    [selectValue, posts])
    
    
    let sortedAndFiltered = useMemo(()=>{
        
        return sorted.filter(post => {
            return tagsValue.every(tag => post.tags.includes(tag));
          })
    }, [sorted, tagsValue])

    

    let addCheckboxValue = (event)=>{
        if(event.target.checked){
            setTagsValue([...tagsValue, event.target.value])
        }
        else{
            setTagsValue([...tagsValue].filter(elem=>elem!=event.target.value))
        }
    }
    
    return(
        <div className="content-wrap">
        <CheckBox checks={tags} callback={addCheckboxValue}/>
        <Select onChange={(event)=>{setSelectValue(event.target.value)}} sortBy={sortBy} />
            {isUsersLoading ? null : <PostsList users={users} posts={sortedAndFiltered} />}
            {isLoading || isUsersLoading ? <Loader />:null}
            {isLoading ? null:<div ref={bottom} style={{height:"80px", display:"block"}} />}
        </div>
    )
}

export default PostsPage;