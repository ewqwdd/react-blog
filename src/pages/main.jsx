import React, { Fragment } from "react";
import reactLogo from "../images/react--logo.png"
import PictureAndText from "../components/pictureAndText";
import jsonLogo from "../images/json.png"

const Main = ()=>{

    return(
        <div className="content-wrap main">
            <div className="main-title">
                <h1>Casual blog project</h1>
                <h3>using react</h3>
            </div>
            
            <PictureAndText content={
                <div>
                    <h2>About</h2>
                    <p>
                        This prohect is created, using react and jsondummy API to generate example data.
                    </p>
                </div>
            }
            img={reactLogo} />

            <PictureAndText content={
                <div>
                    <h2>DummyJSON</h2>
                    <p>
                        DummyJSON is an API, which procides fake JSON data to use as placeholder in development or in prototype testing. It also has some POST requests, bur they don't do any impact on data on the server.
                    </p>
                </div>
            }
            img={jsonLogo} 
            reverse={true}    
            />
            
            <div className="main-title">
                <h2>Sample login details:</h2>
                <p>Login: <b>kminchelle</b></p>
                <p>Password: <b>0lelplR</b></p>
            </div>
            
        </div>

        
    )
}

export default Main;