import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const useLocationHook = useLocation();
  console.log(useLocationHook.pathname);

  return (
    <div>
      Details of the product:
      <br></br>
      {useLocationHook.pathname}
    </div>
  );
};

export default Details;
