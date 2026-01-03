import React from "react";
const Register = () =>{
    return(
    <>
        <div>
            <h1>Register here</h1>
            <p>Enter email:</p>
            <input type="email"/>
            <p>Enter user code:</p>
            <input type="text"/>
            <p>Enter name:</p>
            <input type="text"/>
            <p>Enter password:</p>
            <input type="text"/>
            <button>register</button>

        </div>
    </>
    );
}
export default Register;