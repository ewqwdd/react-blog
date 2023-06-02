import React, {useContext} from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/authContext"
import PrimaryButton from "../UI/Buttons/PrimaryButton"
import LightButton from "../UI/Buttons/LightButton"


const Nav = ()=>{
    
    let {isAuth, setIsAuth} = useContext(AuthContext) 

    let logOut = ()=>{
        localStorage.removeItem("user")
        setIsAuth(false)
    }

    return(
        <div className="nav">
            <div className="nav-bar content-wrap">
                <div className="nav-links">
                    
                    <Link to="/">
                        <div className="nav-elem">
                            Main
                            </div>
                    </Link>
                    
                    <div className="nav-elem">
                        <Link to="/Posts">
                            Posts
                        </Link>
                    </div>
                </div>
                <div className="nav-buttons">
                    {isAuth ? 
                    <LightButton onClick={logOut}>Log out</LightButton>:
                    <Link to="/login"><PrimaryButton>Log in</PrimaryButton></Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Nav;