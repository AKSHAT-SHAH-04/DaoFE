import React from "react";
import { useState, useEffect } from "react";
import { nftContAddress } from "../utils/Connectors";

const About = () => {
 const [Data, setData] = useState("");
 const [Loading, setLoading] = useState(true);

 const fetchNft = async () => {
  const url = `https://deep-index.moralis.io/api/v2/0x2b06BB5312EC8De5bD8F59FCd4DEBE4e692514c7/nft/${nftContAddress}?chain=rinkeby&format=decimal`;

  fetch(url, {
   method: "GET",
   headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "x-api-key": process.env.REACT_APP_API_KEY,
   },
  })
   .then((res) => res.json())
   .then((json) => {
    setData(json);
    setLoading(false);
   })
   .catch((err) => {
    console.log(err);
   });
 };

 useEffect(() => {
  fetchNft();
 }, []);

 if (Loading) {
  return (
   <main style={{ padding: "1rem 0" }}>
    <h2 className="text-white ml-10">Loading...</h2>
   </main>
  );
 }
 return (
  <div>
   <>
    <div className="mx-auto mt-5 max-w-xl text-xl text-gray-50">
     <h1>About</h1>
    </div>
    <div
     className="mx-auto mt-2 block p-6 m-2 max-w-xl rounded-lg border shadow-md "
     style={{ borderColor: "#2d2d2d", width: "600px" }}
    >
     <h1 className=" text-gray-50 text-lg font-semibold">Network</h1>
     <p className="font-normal text-gray-400">Rinkeby Testnet</p>

     <h1 className=" text-gray-50 text-lg font-semibold mt-4">Proposal Validation</h1>
     <p className="font-normal text-gray-400 ">ERC 721 votes</p>

     <h1 className=" text-gray-50 text-lg font-semibold mt-4">Voting Strategy</h1>
     <p className="font-normal text-gray-400 ">Single chain</p>
    </div>
    <div>
     <ul
      className="mx-auto max-w-xl mt-5 text-lg font-medium   rounded-lg border border-gray-600 text-white"
      style={{ borderColor: "#2d2d2d" }}
     >
      <li
       className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
       style={{ borderColor: "#2d2d2d" }}
      >
       Admins
      </li>
      <li
       className="flex flex-row py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
       style={{ borderColor: "#2d2d2d" }}
      >
       <img src={Data.result[0].token_uri} className=" h-14 w-14 rounded-full" alt="" />{" "}
       <a
        href="https://rinkeby.etherscan.io/address/0x2b06BB5312EC8De5bD8F59FCd4DEBE4e692514c7"
        className="mt-3 ml-3"
       >
        0x2b06BB5312EC8De5bD8F59FCd4DEBE4e692514c7
       </a>
      </li>
     </ul>
    </div>
    <div>
          <ul
            className="mx-auto max-w-xl mt-5 mb-5 text-lg font-medium rounded-lg border border-gray-200  border-gray-600 text-white"
            style={{ borderColor: "#2d2d2d" }}
          >
            <li
              className="py-3 px-4 w-full rounded-t-lg border-b border-gray-600"
              style={{ borderColor: "#2d2d2d" }}
            >
              Authors
            </li>
            <li
              className="flex flex-row py-3 px-4 w-full border-b border-gray-600"
              style={{ borderColor: "#2d2d2d" }}
            >
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                class=" h-8 w-8 rounded-full"
                alt=""
              />{" "}
              0xaB06D3C161efCca6b67FC62407D956AaeeBaB4dd
            </li>
            <li
              className="flex flex-row py-3 px-4 w-full border-b border-gray-600"
              style={{ borderColor: "#2d2d2d" }}
            >
              <img
                src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                class=" h-8 w-8 rounded-full"
                alt=""
              />{" "}
              0x24F16E5B92dCFF3e3B22e8222579CDa537d1093d
            </li>
            <li
              className="flex flex-row py-3 px-4 w-full border-b border-gray-600"
              style={{ borderColor: "#2d2d2d" }}
            >
              <img
                src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
                class=" h-8 w-8 rounded-full"
                alt=""
              />{" "}
              0x3491a686c6fB9b52F7938e523CFAB766DFa825d6
            </li>
            <li
              className="flex flex-row py-3 px-4 w-full border-b border-gray-600"
              style={{ borderColor: "#2d2d2d" }}
            >
              <img
                src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvcmt8ZW58MHx8MHx8&w=1000&q=80"
                class=" h-8 w-8 rounded-full"
                alt=""
              />{" "}
              0x480a40Af754A49dA1420e5d2E053C779DBCa5e9E
            </li>
           
          </ul>
        </div>
   </>
  </div>
 );
};

export default About;
