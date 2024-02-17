import React from "react";
import { Mixpanel } from "../../mixpanel";

const ParrotLogin = () => {
  Mixpanel.identify("001");
  Mixpanel.track("[Parrot] Login");
  return (
    <div className="text-9xl justify-center text-center text-indigo-300 h-full flex flex-col ">
      LOGIN{" "}
    </div>
  );
};

export default ParrotLogin;
