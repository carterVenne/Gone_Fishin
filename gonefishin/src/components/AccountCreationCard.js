import React from "react"
import AccountCreationForm from "./AccountCreationForm";
import '../styles/main.css';

function AccountCreationCard() {
    return <div className="h-auto bg-gray flex flex-col space-y-10 object-center items-center">
        <AccountCreationForm/>
    </div>
}

export default AccountCreationCard;