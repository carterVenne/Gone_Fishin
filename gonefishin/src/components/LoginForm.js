import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/main.css';

function LoginForm() {
    const { loginWithRedirect } = useAuth0();
    return(
            <div className="bg-brown w-96 shadow-xl rounded p-5">
                <h1 className="text-3xl font-medium">Welcome</h1>
                    <p className="text-sm">Please login or create an account</p>
    
                    <form className="space-y-5 mt-5">
                        <input type="text" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="Email" />
                         <div className="w-full flex items-center border border-gray-800 rounded px-3">
                        <input type="text" class="w-4/5 h-12" placeholder="Password" />
                        <span className="text-green-700 hover:bg-blue-400 rounded-md px-3">Show</span>
                </div>

                    <div class="">
                        <a href="#!" className="font-medium text-green-800 hover:bg-blue-300 rounded-md p-2">Forgot Password ?</a>
                    </div>

                <button onClick={() => loginWithRedirect()} class="text-center w-full bg-green-800 rounded-md text-white py-3 font-medium">Login</button>
            </form>
         </div>
    );
}
export default LoginForm;