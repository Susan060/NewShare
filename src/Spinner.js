import React from "react";
import Loading from "./Loading.gif";

const Spinner = () => {
  return (
    <div>
      <img src={Loading} className="my-3 text-center" alt="Loading" />
      
    </div>
  );
};
export default Spinner;
