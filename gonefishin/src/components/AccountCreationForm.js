import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AccountCreationBtn from "./AccountCreationBtn";
<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

function AccountCreationForm() {
    const { loginWithRedirect } = useAuth0();
    return(
        <div class="h-screen bg-white flex flex-col space-y-10 justify-center items-center">
        <div class="bg-white w-96 shadow-xl rounded p-5">
            <h1 class="text-3xl font-medium">Welcome</h1>
                <p class="text-sm">If you already have an account, please log in, otherwise create one below</p>

                <form class="space-y-5 mt-5">
                <input type="text" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="Name" />
                <button class="py-2 px-4 capitalize tracking-wide bg-gray-800 text-white font-medium rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Select a skill level</button>

<span class="border"></span>

<div x-data="{ dropdownOpen: true }" class="relative">
  <button OnClick="dropdownOpen = !dropdownOpen" class="relative z-10 block bg-gray-800 rounded p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
    </svg>
  </button>

  <div x-show="dropdownOpen" OnClick="dropdownOpen = false" class="fixed inset-0 h-full w-full z-10"></div>

  <div x-show="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-20">
    <a href="#" class="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200">Beginner <span class="text-gray-600">You're new to fishing</span></a>
    <a href="#" class="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200">Experienced <span class="text-gray-600">You can cast with confidence</span></a>
    <a href="#" class="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200">Pro <span class="text-gray-600">You spool reels in your sleep</span></a>
  </div>
</div>
                    <input type="text" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="Email" />
                     <div class="w-full flex items-center border border-gray-800 rounded px-3">
                    <input type="text" class="w-4/5 h-12" placeholder="Password" />
                    <span class="text-blue-700 hover:bg-blue-400 rounded-md px-3">Show</span>
            </div>

            <AccountCreationBtn/>
        </form>
     </div>
    </div>
    );
}

export default AccountCreationForm;