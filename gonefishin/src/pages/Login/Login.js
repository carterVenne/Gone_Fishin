import React from "react";
import LoginCard from "../../components/LoginCard";
import AccountCreationCard from "../../components/AccountCreationCard";
import LoginHeader from "../../components/LoginHeader";

function Login(){
    return(
    <div>
        <LoginHeader/>
        <br></br>
        <LoginCard/>
        <br></br>
        <AccountCreationCard/>
    </div>
    )
};

export default Login;