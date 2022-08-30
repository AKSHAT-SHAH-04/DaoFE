import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { useState } from "react";
import { nftContAddress } from "../utils/Connectors";
import axios from "axios";

const Nft = () => {
 const [data, setData] = useState([]);

 const fetchNft = async () => {
  const url = `
  https://deep-index.moralis.io/api/v2/nft/${nftContAddress}/owners?chain=rinkeby&format=decimal&limit=12`;
// https://deep-index.moralis.io/api/v2/nft/${nftContAddress}?chain=rinkeby&format=decimal`;

  axios(url, {
   method: "GET",
   headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "x-api-key": process.env.REACT_APP_API_KEY,
   },
  })
   .then((res) => setData(res.data.result))
   .catch((err) => {
    console.log(err);
   });
 };

 React.useEffect(() => {
  fetchNft();
 }, []);

 return (
  <div>
   <div className="max-w-2xl  py-4 px-3 mt-8  rounded-xl border" style={{ borderColor: "#2d2d2d" }}>
    <div className="flex flex-row justify-between">
     <div>
     <h3 className="text-white">NFTS</h3>
     </div>
     <div className="text-white flex flex-row items-center">
      <a href="/Nft">
       View <BsArrowRightCircle className="ml-2" />
      </a>
     </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-4 ml-2 mr-2 mt-5 mb-5 justify-center items-center ">
     {data.map((item, index) => {
      return (
       <img
        src={item.token_uri}
        className=" h-40 w-60 rounded-lg text-white"
        key={index}
        alt={`TokenID - ${item.token_id}`}
       />
      );
     })}
    </div>
   </div>
  </div>
 );
};

export default Nft;
