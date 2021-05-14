import React from "react";
import LoginCard from "../components/LoginCard";
import AccountCreationCard from "../components/AccountCreationCard";

function Login () {
    return (
        <div>
            {/* these classNames are bootstrap components not sure what to change */}
            <h1 className="text-center">Welcome to Gone Fishin'</h1>
            <h3 className="text-center">Please log in or create your account and get fishing</h3>
            <LoginCard>

            </LoginCard>
            <AccountCreationCard>

            </AccountCreationCard>
        </div>
    );
}

export default Login;