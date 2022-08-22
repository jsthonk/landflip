import React from "react";
import Land from "../Components/LandLocationsComponents/Land";
import OurLands from "../Components/LandLocationsComponents/OurLands";

const LandLocations = () => {
  return (
    <div className="h-screen w-full pt-20 text-black">
      <Land />
      <OurLands />
    </div>
  );
};

export default LandLocations;
