import React from "react";

const LeftNav = ({ updateState, currentView }) => {
  const changeView = (value) => {
    updateState(value);
  };
  console.log(`actually: ${currentView}`);

  return (
    <div className="w-1/5 bg-black-300 m-2 space-y-4 font-sans text-2xl divide-y">
      <button
        className={
          currentView === 0
            ? "border-none rounded-md text-left pl-2 w-4/5 text-white bg-indigo-900 "
            : "border-none rounded-md text-left pl-2 w-4/5 text-white hover:bg-indigo-900 hover:border-radius-lg"
        }
        onClick={() => changeView(0)}
      >
        Mi guardadito
      </button>
      <button
        className={
          currentView === 1
            ? "border-none rounded-md text-left pl-2 w-4/5 text-white bg-indigo-900 "
            : "border-none rounded-md text-left pl-2 w-4/5 text-white hover:bg-indigo-900 hover:border-radius-lg"
        }
        onClick={() => changeView(1)}
      >
        Mi Retiro
      </button>
      <button
        className={
          currentView === 2
            ? "border-none border-transparent rounded-md text-left pl-2 w-4/5 text-white bg-indigo-900 "
            : "border-none border-transparent rounded-md text-left pl-2 w-4/5 text-white hover:bg-indigo-900 hover:border-radius-lg"
        }
        onClick={() => changeView(2)}
      >
        Inversión
      </button>
    </div>
  );
};

export default LeftNav;
