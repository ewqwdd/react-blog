import React, { Fragment, useContext, useState, useEffect } from "react";
import avatar from "../images/avatar.png"
import { AuthContext } from "../context/authContext";
import LightButton from "../UI/Buttons/LightButton";
import { postComment } from "../api/postComment";
import { ModalContext } from "../context/modalContext";

const AddComment = ({comments, setComments, postId})=>{

    let {isAuth, setIsAuth} = useContext(AuthContext)

    let {setShow, setChildren} = useContext(ModalContext)
    
    let [textVal, setTextVal] = useState("")

    let [user, setUser] = useState({})



    useEffect(()=>{
        if(isAuth){
            setUser(JSON.parse(localStorage.getItem("user")))

        }
    }, [isAuth]) 
    
    

    const publish = async(e)=>{
        if(textVal!==""){
            let data = await postComment(user.id, postId, textVal)
        
        if(data.ok){
            let parsed = await data.json();
            let temp = {...comments}
            temp.comments=[parsed, ...temp.comments]
            setComments(temp)
            setChildren(<p>Published successfully</p>)
            setShow(true)
            setTextVal("")
        }
        else{
            setChildren(<p>Oops! Something went wrong.</p>)
            setShow(true)
        }     
        }
        
    }

    return(
        <div className="addcom">
            <h3>Add a comment:</h3>
            <div className="comment-post">
                <div  className="comment-form">
                    <img className="comment-avatar" src={user.image ? user.image : avatar} />
                    <textarea cols="60" rows="6" maxLength="360" value={textVal} onChange={e=>setTextVal(e.target.value)}/>
                </div>
                {isAuth ? null :<span className="red-text">Log in to publish comments</span>}
                <LightButton onClick={publish} disabled={!isAuth}>Submit</LightButton>
            </div>
        </div>
    )
}

export default AddComment;