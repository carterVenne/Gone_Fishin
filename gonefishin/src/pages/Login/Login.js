import React from "react";
import LoginCard from "../../components/LoginCard";
import AccountCreationCard from "../../components/AccountCreationCard";
import LoginHeader from "../../components/LoginHeader";

function Login(){
    return(
    <div className="object-center">
        <LoginHeader/>
        <LoginCard/>
        <AccountCreationCard/>
    </div>
    )
};

export default Login;