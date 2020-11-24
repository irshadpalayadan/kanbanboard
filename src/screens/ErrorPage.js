import React from "react";

const ErrorPage = () => {
    return <div 
            style = {{  height: "100%",
                        display:"flex", 
                        justifyContent:"center", 
                        textAlign:"center", 
                        flexDirection: "column"
                    }}
            >
                <h1>Oh oh... Something went wrong... please try again ...!</h1>
            </div>
}

export default ErrorPage;