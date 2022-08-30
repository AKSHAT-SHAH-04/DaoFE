import React from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import Nft from "../components/Nft";

const NFTS = () => {
 return (
  <div>
   <Navbar />
   <div className="flex flex-col md:flex-row mx-auto justify-center">
    <div className="mt-3">
     <Sidebar />
    </div>
    <div>
     <Nft />
    </div>
   </div>
  </div>
 );
};

export default NFTS;
