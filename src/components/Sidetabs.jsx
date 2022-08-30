import { ethers } from "ethers";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { governanceContract } from "../utils/Connectors";
import ButtonLoader from "./ButtonLoader";

const Sidetabs = (props) => {
 const navigate = useNavigate();
 const [ProposalSnapshot, setProposalSnapshot] = useState(0);
 const [Stage, setStage] = useState("");
 const [ProposalVotes, setProposalVotes] = useState("");
 const [Loading, setLoading] = useState(false);
 const { data } = props;

 useEffect(() => {
  receipt(data.proposal_id);
 }, [data]);

 const receipt = async (id) => {
  try {
   const ID = id.toString();
   const stage = await governanceContract.state(ID);
   setStage(stage);

   const snapshot = await governanceContract.proposalSnapshot(ID);
   setProposalSnapshot(snapshot.toString());

   const proposalVotes = await governanceContract.proposalVotes(ID);
   setProposalVotes(proposalVotes.toString());
  } catch (error) {
   console.error(error);
  }
 };

 const handleQueue = async (e) => {
  try {
   e.preventDefault();
   setLoading(true);
   const encodeFunctionCall = data.calldata;
   const targets = data.targetContract;
   const values = data.values;
   const description = data.proposal_description;

   const Tx = await governanceContract.queue(
    [targets],
    [values],
    [encodeFunctionCall],
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes(description))
   );

   const queueTx = await Tx.wait();
   console.log(queueTx);
   navigate("/");
  } catch (error) {
   console.error(error);
   setLoading(false);
  }
 };

 const handleExecute = async (e) => {
  try {
   e.preventDefault();
   setLoading(true);
   const encodeFunctionCall = data.calldata;
   const targets = data.targetContract;
   const values = data.values;
   const description = data.proposal_description;

   const Tx = await governanceContract.execute(
    [targets],
    [values],
    [encodeFunctionCall],
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes(description))
   );

   const executeTx = await Tx.wait();
   console.log(executeTx);
   navigate("/");
  } catch (error) {
   console.error(error);
   setLoading(false);
  }
 };

 return (
  <div>
   <div>
    <ul
     className="mx-auto w-72 mt-5 font-normal  rounded-lg border border-gray-600 text-white"
     style={{ borderColor: "#2d2d2d" }}
    >
     <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-600" style={{ borderColor: "#2d2d2d" }}>
      information
     </li>

     <li
      className="flex flex-row justify-between py-2 px-4 w-full border-b border-gray-600"
      style={{ borderColor: "#2d2d2d" }}
     >
      <div style={{ color: "#8b949e" }}>Voting system</div>
      <div className="text-white">Single NFT voting</div>
     </li>
     <li
      className="flex flex-row justify-between py-2 px-4 w-full border-b border-gray-600"
      style={{ borderColor: "#2d2d2d" }}
     >
      <div style={{ color: "#8b949e" }}>Start Block</div>
      <div className="text-white">{data.startBlock}</div>
     </li>
     <li
      className="flex flex-row justify-between py-2 px-4 w-full border-b border-gray-600"
      style={{ borderColor: "#2d2d2d" }}
     >
      <div style={{ color: "#8b949e" }}>End Block</div>
      <div className="text-white">{data.endBlock}</div>
     </li>
     <li
      className="flex flex-row justify-between py-2 px-4 w-full border-b border-gray-600"
      style={{ borderColor: "#2d2d2d" }}
     >
      <div style={{ color: "#8b949e" }}>Snapshot</div>
      <div className="text-white">{ProposalSnapshot}</div>
     </li>
    </ul>
   </div>
   <div>
    <ul
     className="mx-auto w-72 mt-5 font-normal  rounded-lg border border-gray-600 text-white"
     style={{ borderColor: "#2d2d2d" }}
    >
     <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-600" style={{ borderColor: "#2d2d2d" }}>
      Votes
     </li>
     <li className=" py-2 px-4 w-full border-b border-gray-600" style={{ borderColor: "#2d2d2d" }}>
      <div>Against Votes - {ProposalVotes[0]}</div>
     </li>
     <li className=" py-2 px-4 w-full border-b border-gray-600" style={{ borderColor: "#2d2d2d" }}>
      <div>For Votes - {ProposalVotes[2]}</div>
     </li>
     <li className=" py-2 px-4 w-full border-b border-gray-600" style={{ borderColor: "#2d2d2d" }}>
      <div>Abstain - {ProposalVotes[4]}</div>
     </li>
    </ul>
   </div>
   {Stage !== 4 ? (
    <></>
   ) : (
    <div className="w-72 h-30 mt-5 ml-12 md:ml-0 rounded-lg border" style={{ borderColor: "#2d2d2d" }}>
     <div className="mt-2 mx-auto ">
      <h1 className="text-center text-white text-xl font-bold">Queued Proposal</h1>
      <div className="flex justify-center">
       {!Loading ? (
        <button
         className=" text-gray-100 border font-bold py-2 px-4 w-48 mb-5 mt-2 align-center rounded-full hover:bg-blue-500"
         style={{ borderColor: "#2d2d2d" }}
         onClick={handleQueue}
        >
         Queue
        </button>
       ) : (
        <ButtonLoader />
       )}
      </div>
     </div>
    </div>
   )}
   {Stage !== 5 ? (
    <></>
   ) : (
    <div className="w-72 h-30 ml-12 md:ml-0 mt-5  rounded-lg border" style={{ borderColor: "#2d2d2d" }}>
     <div className="mt-2 mx-auto ">
      <h1 className="text-center text-white text-xl font-bold">Execute Proposal</h1>
      <div className="flex justify-center">
       {!Loading ? (
        <button
         className=" text-gray-100 border font-bold py-2 px-4 w-48 mb-5 mt-2 align-center rounded-full hover:bg-blue-500"
         style={{ borderColor: "#2d2d2d" }}
         onClick={handleExecute}
        >
         Execute
        </button>
       ) : (
        <ButtonLoader />
       )}
      </div>
     </div>
    </div>
   )}
  </div>
 );
};

export default Sidetabs;
