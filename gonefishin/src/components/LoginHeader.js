import React from "react";
import '../styles/main.css';

function LoginHeader () {
    return (
    <div className="bg-brown w-96 shadow-xl object-center rounded p-5">
    <h1 className="text-3xl font-medium">Welcome</h1>
        <p className="text-sm">If you already have an account, please log in, otherwise create one below</p>
    </div>
    )
}

export default LoginHeader;