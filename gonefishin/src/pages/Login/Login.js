import React from "react";
import LoginCard from "../../components/LoginCard";
import AccountCreationCard from "../../components/AccountCreationCard";
import LoginHeader from "../../components/LoginHeader";
import Header from "../../components/Header"

function Login(){
    return(
    <div>
        <Header/>
        <LoginHeader/>
        <LoginCard/>
        <AccountCreationCard/>
    </div>
    )
};

export default Login;