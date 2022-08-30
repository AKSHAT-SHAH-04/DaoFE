import React from "react";
import { governanceContract } from "../utils/Connectors";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";

const Details = (prop) => {
 const [QuorumPercentage, setQuorumPercentage] = useState(0);
 const [ProposalThreshold, setProposalThreshold] = useState(0);
 const [Loading, setLoading] = useState(true);
 const [Stage, setStage] = useState({});

 const { data } = prop;

 useEffect(() => {
  receipt(data);
 }, [data, Stage]);

 const receipt = async (data) => {
  const ID = data.proposal_id.toString();
  const stage = await governanceContract.state(ID);
  setStage(stage);

  const quorum = await governanceContract.quorumNumerator();
  setQuorumPercentage(quorum.toString());
  const threshold = await governanceContract.proposalThreshold();
  setProposalThreshold(threshold.toString());
  setLoading(false);
 };

 if (Loading) {
  return <Loader />;
 } else {
  return (
   <div>
    <div className="mx-auto max-w-2xl">
     <div className=" mt-5  text-3xl font-bold text-gray-50">
      <h1>{`${data.proposal_description.slice(0, 20)}`}</h1>
     </div>
     <div className="mt-5 flex flex-row">
      {Stage === 1 ? (
       <button className="bg-green-500 text-white font-bold  px-1 rounded-full">Active</button>
      ) : Stage === 7 ? (
       <button className="bg-violet-500 text-white font-bold  px-1 rounded-full">Closed</button>
      ) : Stage === 3 || Stage === 6 ? (
       <button className="bg-red-500 hover:bg-blue-700 text-white font-bold  px-1 rounded-full">Rejected</button>
      ) : (
       <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold  px-1 rounded-full">Pending</button>
      )}
      <p className=" font-extrabold  text-gray-50 ml-2">{data.proposer_address.slice(0, 20)}</p>
     </div>
     <div>
     <p className="font-xs md:font-medium text-xs md:text-xl text-gray-400 mt-5">
       Proposer Address: {data.proposer_address}
      </p>
      <p className=" font-medium text-xl text-gray-200 mt-5">Quorum Required: {QuorumPercentage} Percentage</p>
     <p className=" font-medium text-xl text-gray-400 mt-5">Proposal Threshold: {ProposalThreshold} NFTTOKEN</p>
     <p className=" font-medium text-xl text-gray-200 mt-5">
       Proposal ID:{" "}
       <span className="font-xs md:font-small text-xs md:text-xl">{`${data.proposal_id.slice(0, 50)}`}</span>
      </p>
     </div>
     <div className=" mt-5  text-3xl font-bold text-gray-50">
      <h1>DESCRIPTION</h1>
     </div>
     <div>
      <p className=" font-medium text-xl text-gray-400 mt-5">{data.proposal_description}</p>
     </div>
    </div>
   </div>
  );
 }
};

export default Details;
