import React from "react"
import AccountCreationForm from "./AccountCreationForm";

function AccountCreationCard() {
    return <div className="h-screen bg-white flex flex-col space-y-10 justify-right items-center">
        <AccountCreationForm/>
    </div>
}

export default AccountCreationCard;