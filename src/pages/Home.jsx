import React, { useState } from "react";
import { Navbar } from "../components/Navbar.jsx";
import Card from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import Heading from "../components/Heading.jsx";
import Axios from "axios";
import { url } from "../utils/Connectors.jsx";

const Home = () => {
 const [Data, setData] = useState([]);

 React.useEffect(() => {
  Axios.get(url)
   .then((res) => {
    setData(res.data);
   })
   .catch((error) => console.log(`Error: ${error}`));
 }, []);

 return (
  <div>
   <Navbar />
   <div className="flex flex-col md:flex-row justify-center">
    <div>
     <Sidebar />
    </div>
    <div className="flex flex-col">
     <Heading />
     {Data.map((item, index) => {
      return <Card key={index} data={item} />;
     })}
    </div>
   </div>
  </div>
 );
};

export default Home;
