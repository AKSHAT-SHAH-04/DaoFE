import React from "react";
import { useState, useEffect } from "react";
import { governanceContract } from "../utils/Connectors";
import { useNavigate } from "react-router-dom";
import ButtonLoader from "./ButtonLoader";

const Vote = (props) => {
 const navigate = useNavigate();
 const [Stage, setStage] = useState("");
 const [Loading, setLoading] = useState(false);

 const { data } = props;

 useEffect(() => {
  receipt(data);
 }, [data]);

 const receipt = async (IDS) => {
  const id = IDS.proposal_id.toString();
  const state = await governanceContract.state(id);
  setStage(state);
 };

 const handleButton = async (e) => {
  try {
   const choice = Number(e.target.id);
   setLoading(true);
   const Tx = await governanceContract.castVote(data.proposal_id.toString(), choice);
   const voteTX = await Tx.wait();
   console.log(voteTX);
   navigate("/");
  } catch (error) {
   console.error(`Error - ${error}`);
   setLoading(false);
  }
 };

 if (Stage !== 1) {
  return (
   <div>
    <p className="text-white mt-10 text-3xl hover:text-green-700">Voting period is over</p>
   </div>
  );
 } else {
  return (
   <div>
    <div>
     <ul
      className="mx-auto max-w-2xl mt-5 text-lg font-medium   rounded-lg border   border-gray-600 text-white"
      style={{ borderColor: "#2d2d2d" }}
     >
      <li className="py-2 px-4 w-full rounded-t-lg border-b  border-gray-600" style={{ borderColor: "#2d2d2d" }}>
       Cast Your Vote
      </li>
      {!Loading ? (
       <li className=" py-2 px-4 w-full border-b  border-gray-600" style={{ borderColor: "#2d2d2d" }}>
        <button
         id="0"
         className="text-white ml-5 mt-5 mx-auto font-bold w-11/12  py-2 rounded-full border hover:bg-blue-600"
         style={{ borderColor: "#2d2d2d" }}
         onClick={handleButton}
        >
         Vote against the proposal
        </button>
        <button
         id="1"
         className="text-white ml-5 mt-5 mx-auto font-bold w-11/12  py-2 rounded-full border hover:bg-blue-600"
         style={{ borderColor: "#2d2d2d" }}
         onClick={handleButton}
        >
         Vote for the proposal
        </button>
        <button
         id="2"
         className="text-white ml-5 mt-5 mb-5  w-11/12  mx-auto font-bold  py-2 rounded-full border hover:bg-blue-600"
         style={{ borderColor: "#2d2d2d" }}
         onClick={handleButton}
        >
         Abstain your vote
        </button>
       </li>
      ) : (
       <ButtonLoader />
      )}
     </ul>
    </div>
   </div>
  );
 }
};

export default Vote;
