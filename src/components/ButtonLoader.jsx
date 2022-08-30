import React from "react";

function ButtonLoader() {
 return (
  <div className="flex justify-center items-center py-3">
   <div className="animate-spin rounded-full h-8 w-8 border-b-4 border-blue-700" />
  </div>
 );
}

export default ButtonLoader;
