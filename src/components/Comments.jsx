import React, { useEffect, useState, useRef } from "react";
import { useFetch } from "../hooks/useFetch";
import { getComments } from "../api/getComments";
import Comment from "./Comment";
import { getUsers } from "../api/getUsers";
import Loader from "../UI/Loader/Loader";
import { Pagination } from "../hooks/usePagination";
import AddComment from "./addComment";

const Comments = ({id})=>{

    let [comments, setComments] = useState({})

    let [limit, setLimit] = useState(5)

    let [users, setUsers] = useState([])

    let [total, setTotal] = useState()

    let bottom = useRef()

    let [fetching, isLoading, isError] = useFetch(async()=>{
        let data = await getComments(id, limit)
        if(!isError && data.ok){
            let parsed = await data.json()
            setTotal(parsed.total)
            setComments(parsed)
        }
    })

    let [usersFetching, isUsersLoading, isUsersError] = useFetch(async()=>{
        let data = await getUsers()
        if(!isUsersError && data.ok){
            let parsed = await data.json()
            
            setUsers(parsed.users)
        }
    })

    Pagination(limit, setLimit, isLoading, total, bottom, 5)

    useEffect(()=>{
        fetching()
    }, [limit, total])

    useEffect(()=>{
        usersFetching()
    }, [])

    

    return(
        <div className="comments">
            <AddComment comments={comments} setComments={setComments} postId={id}/>
            {isLoading || isUsersLoading ? <Loader /> : null}
            {isLoading || isUsersLoading ? null : comments.comments.map(comment=><Comment key={comment.id} user={users.filter(elem=>elem.id===comment.user.id)} comment={comment}/>)}
            <div ref={bottom} style={{height:"80px"}}/>
        </div>
    )

}

export default Comments;