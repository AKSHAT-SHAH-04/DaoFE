import React, { useState } from "react";
import ButtonLoader from "./ButtonLoader";
import { nftContract } from "../utils/Connectors";

const Delegate = () => {
 const [Loading, setLoading] = useState(false);
 const [Address, setAddress] = useState("");
 const [Hash, setHash] = useState("");

 const handleAddress = (e) => {
  e.preventDefault();
  setAddress(e.target.value);
 };

 const handleDelegate = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
   const checkDelegate = await nftContract.delegates(Address);
   if (checkDelegate === Address) {
    alert("Address already delegated");
   } else if (checkDelegate === "0x0000000000000000000000000000000000000000") {
    const tx = await nftContract.delegate(Address);
    const Tx = await tx.wait();
    setHash(Tx.transactionHash);
    setAddress("");
   }
   setLoading(false);
  } catch (error) {
   console.error(error);
   setLoading(false);
  }
 };

 return (
  <div>
   <div className="mx-auto mt-10  text-white text-3xl font-bold max-w-2xl" id="delegate">
    <div
     className="mx-auto mt-5 block p-6 m-2 max-w-2xl rounded-lg border shadow-md hover:bg-gray-100"
     style={{ borderColor: "#2d2d2d" }}
    >
     <p className="font-normal text-lg text-center text-gray-400">Add the address you want to delegate.</p>
    </div>
    <div className="border max-w-2xl mt-7 rounded-lg p-3" style={{ borderColor: "#2d2d2d" }}>
     <label htmlFor="email" className="block mt-3 mb-2 ml-0 md:ml-5 mr-3 mx-auto max-w-2xl text-sm font-medium text-gray-400 ">
      To
     </label>
     <input
      type="email"
      id="email"
      aria-describedby="helper-text-explanation"
      className=" border bg-transparent mx-auto max-w-lg ml-0 md:ml-5 mr-3 text-white text-sm rounded-full  focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 "
      placeholder="Enter The Address You Want To Delegate"
      style={{ borderColor: "#2d2d2d" }}
      required={true}
      onChange={handleAddress}
      value={Address}
     />
     {!Loading ? (
      <button
       className="bg-transparent border  max-w-lg ml-0 md:ml-5 mr-3 mb-5 mt-4 mx-12 empty:3 px-12 py-1 rounded-full   font-medium text-white text-lg hover:bg-blue-600"
       style={{ borderColor: "#2d2d2d" }}
       onClick={handleDelegate}
      >
       Confirm
      </button>
     ) : (
      <ButtonLoader />
     )}
     <div>
      <a className="text-sm ml-2 hover:text-blue-600" href={`https://rinkeby.etherscan.io/tx/${Hash}`}>
       {Hash}
      </a>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Delegate;