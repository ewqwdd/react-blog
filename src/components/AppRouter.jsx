import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsPage from "../pages/posts";
import Page404 from "../pages/404";
import Login from "../pages/login";
import PostPage from "../pages/PostPage"
import Main from "../pages/main";
import Nav from "./nav";

const AppRouter = ()=>{
    return(
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/posts/:id" Component={PostPage}/>
                    <Route path="/posts" Component={PostsPage}/>
                    <Route path="/login" Component={Login} />
                    <Route path="/" Component={Main} />
                    <Route path="*" Component={Page404}/>
                </Routes>
            </BrowserRouter>
    )
}

export default AppRouter