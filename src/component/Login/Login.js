import React from "react";
const Login = () =>{
    return(
    <>
        <div>
            <h1>Login here</h1>
            <p>Enter email or user code:</p>
            <input type="text"/>
            <p>Enter password:</p>
            <input type="text"/>
            <button>login</button>
        </div>
    </>
    );
}
export default Login;