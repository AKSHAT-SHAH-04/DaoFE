import React from "react";
import { Navbar } from "../components/Navbar.jsx";
import { Create } from "../components/Create.jsx";

const Createpage = () => {
	return (
		<div>
			<Navbar />
			<div className="mx-5 md:mx-0">
    <Create />
	
   </div>
		</div>
	);
};

export default Createpage;
