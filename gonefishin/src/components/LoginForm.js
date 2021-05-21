import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/main.css';

function LoginForm() {
    const { loginWithRedirect } = useAuth0();
    return(
            <div className="bg-yellow-800 bg-opacity-50 w-96 shadow-xl rounded p-5 pb-5">
                <h1 className="text-3xl font-medium text-white text-center">Login</h1>
    
                    <form className="space-y-5 mt-5">
                        <input type="text" class="placeholder-white w-full h-12 bg-blue-300 bg-opacity-75 border border-gray-800 rounded px-3" placeholder="Email" />
                        <input type="text" class="placeholder-white w-full h-12 bg-blue-300 bg-opacity-75 border border-gray-800 rounded px-3" placeholder="Password" />
                        {/* <span className="text-green-700 hover:bg-blue-400 rounded-md px-3">Show</span> */}
                

                    <div class="">
                        <a href="#!" className="font-medium text-green-800 hover:bg-yellow-700 hover:text-white rounded-md p-2">Forgot Password ?</a>
                    </div>

                <button onClick={() => loginWithRedirect()} class="text-center w-full bg-green-800 hover:bg-yellow-800 rounded-md text-white py-3 font-medium">Login</button>
            </form>
         </div>
    );
}
export default LoginForm;