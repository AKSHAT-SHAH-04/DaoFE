import React from "react";
import { Navbar } from "../components/Navbar";
import Delegate from "../components/Delegate";

const Delegatepage = () => {
 return (
  <div>
   <div>
    <Navbar />
    <div className="mx-5 md:mx-0">
     <Delegate />
    </div>
   </div>
  </div>
 );
};

export default Delegatepage;