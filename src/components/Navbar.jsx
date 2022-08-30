import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Navbar = () => {
 return (
  <div>
   <nav className="border-b" style={{ borderColor: "#2d2d2d" }}>
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg px-4 md:px-6 py-2.5">
     <a href="/" className="flex items-center">
      <img
       src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
       className="mr-3 h-6 sm:h-9 rounded-full"
       alt="Flowbite Logo"
      />
      <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Dao</span>
     </a>
     <div className="flex items-center">
      <ConnectButton />
     </div>
    </div>
   </nav>
  </div>
 );
};
