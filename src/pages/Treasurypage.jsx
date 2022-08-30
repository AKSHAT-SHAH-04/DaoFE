import React, { useState } from "react";
import Treasury from "../components/Treasury";
import { Navbar } from "../components/Navbar";
import Nft from "../components/Nft.jsx";
import { Sidebar } from "../components/Sidebar";
import { url } from "../utils/Connectors";
import Hash from "../components/Hash";

const Treasurypage = () => {
 const [Data, setData] = useState([]);

 React.useEffect(() => {
  fetch(`${url}transactions`)
   .then((res) => res.json())
   .then((json) => setData(json));
 }, []);

 return (
  <div>
   <Navbar />
   <div className="flex flex-col md:flex-row justify-center">
    <div className="mt-4  ">
     <Sidebar />
    </div>

    <div className="flex flex-col p-4">
     <div className="mt-5">
      <Treasury />
     </div>
     <div className="mt-5 text-gray-400 ">
     </div>
     {Data.map((item, index) => {
      return <Hash data={item} key={index} />;
     })}
    </div>
   </div>
  </div>
 );
};

export default Treasurypage;
