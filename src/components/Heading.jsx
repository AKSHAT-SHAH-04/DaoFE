import React from "react";

const Heading = () => {
 return (
  <div>
   <div className="mx-auto mx-5 md:mx-0 mt-5 font-bold max-w-2xl text-3xl text-gray-50">
    <h1>Proposals</h1>
   </div>
   <div
    className="mx-auto mx-5 md:mx-2 mt-2 block p-6 m-2 max-w-2xl rounded-lg border shadow-md hover:bg-gray-100"
    style={{ borderColor: "#2d2d2d" }}
   >
    <p className="font-normal text-gray-400 text-center">A decentralized community helping the world go bankless</p>
   </div>
  </div>
 );
};

export default Heading;
