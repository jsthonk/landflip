import React, { useState } from "react";

const OurLands = () => {
  const [landTabs, setLandTabs] = useState(0);
  return (
    <div className="w-full bg-gray-300">
      <div className="mt-10">
        <h1 className="-ml-96">Our Land Locations</h1>
      </div>
      <div name="Tabs" className="flex flex-col items-center justify-center">
        <div name="TabsList" className="flex items-center">
          <div name="TabsHead" className="" onClick={() => setLandTabs(0)}>
            Lagos
          </div>
          <div name="TabsHead" className="" onClick={() => setLandTabs(1)}>
            Abuja
          </div>
        </div>
        <div name="TabsCOntents" hidden={landTabs !== 0}>
          Lagos
        </div>
        <div name="TabsCOntents" hidden={landTabs !== 1}>
          Abuja
        </div>
      </div>
    </div>
  );
};

export default OurLands;
