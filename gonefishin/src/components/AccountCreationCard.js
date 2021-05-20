import React from "react"
import AccountCreationForm from "./AccountCreationForm";
import '../styles/main.css';

function AccountCreationCard() {
    return <div className="h-auto bg-gray flex flex-col space-y-10 object-right items-right">
        <AccountCreationForm/>
    </div>
}

export default AccountCreationCard;