import React from "react";
import '../styles/main.css';

function AccountCreationBtn(props) {
    return (
      <button onClick={props.onClick} class="text-center w-full bg-green-800 hover:bg-yellow-800 rounded-md text-white py-3 font-medium"> Create an account </button>
    );
  }

export default AccountCreationBtn;