import React from "react";
import '../styles/main.css';

function AccountCreationBtn(props) {
    return (
      <button onClick={props.onClick} className={`${props["data-value"]}`} {...props} />
    );
  }

export default AccountCreationBtn;