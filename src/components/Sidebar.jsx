import React from "react";
import { MdOutlineVerified } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
 return (
  <div className="md:w-64 sm:w-full  py-4 px-3 m-5 rounded-xl border" style={{ borderColor: "#2d2d2d" }}>
   <img
    src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
    className="w-12 mx-auto md:max-w-full h-auto rounded-full"
    alt=""
   />

   <h5 className="mb-2 text-2xl mt-4 font-bold text-center text-white flex flex-row justify-center">
    SOLULAB DAO
    <MdOutlineVerified style={{ fontSize: "30px" }} />
   </h5>
   <p className="font-normal text-gray-400 text-center">20k members</p>

   <ul className="space-y-2">
    <li>
     <NavLink
      to="/"
      className="flex items-center ml-3 p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700"
     >
      {" "}
      Proposals
     </NavLink>
    </li>
    <li>
     <NavLink
      to="/Create"
      className="flex items-center ml-3 p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700"
     >
      {" "}
      New Proposal
     </NavLink>
    </li>
    <li>
     <NavLink
      to="/Treasury"
      className="flex items-center ml-3 p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
     >
      {" "}
      Treasury
     </NavLink>
    </li>
    
    <li>
     <NavLink
      to="/NFTS"
      className="flex items-center ml-3 p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
     >
      {" "}
      NFTS Page
     </NavLink>
    </li>
    <li>
     <NavLink
      to="/Delegate"
      className="flex items-center ml-3 p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
     >
      {" "}
      Delegate
     </NavLink>
    </li>
    <li>
     <NavLink
      to="/About"
      className="flex items-center ml-3 p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700"
     >
      {" "}
      About
     </NavLink>
    </li>
   </ul>
  </div>
 );
};
