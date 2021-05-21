import React from "react";
import '../styles/main.css';

function LoginHeader () {
    return (
    <div className="h-auto bg-gray flex flex-col space-y-10 object-center items-center pt-10 pb-5">
        <div className="bg-yellow-800 bg-opacity-50 w-96 shadow-xl rounded p-5 pb-5">
            <h1 className="text-3xl font-medium text-white text-center">Welcome!</h1>
            <p className="text-md text-white text-center">If you already have an account please log in, otherwise take the time to create one below</p>
        </div>
    </div>
    )
}

export default LoginHeader;