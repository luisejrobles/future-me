import React from "react";

const LeftNav = ({ updateState }) => {
  const changeView = (value) => {
    console.log(value);
  };

  return (
    <div className="w-1/5 bg-black-300 m-2 font-sans text-2xl divide-y">
      <button className="border-none border-radius-lg text-left w-4/5 text-white hover:bg-indigo-900">
        Mi guardadito
      </button>
      <button className="border-none border-radius-lg text-left w-4/5 text-white hover:bg-indigo-900">
        Mi Retiro
      </button>
      <button className="border-none border-radius-lg text-left w-4/5 text-white hover:bg-indigo-900">
        Inversión
      </button>
    </div>
  );
};

export default LeftNav;
