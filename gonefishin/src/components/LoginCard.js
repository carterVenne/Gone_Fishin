import React from "react";
import "../styles/LoginCard.css";
import LoginForm from "./LoginForm";
// import LoginBtn from "../LoginBtn";

function LoginCard() {
    return <div className="h-screen bg-white flex flex-col space-y-10 object-left items-left">
        <LoginForm/>
    </div>
}

export default LoginCard;