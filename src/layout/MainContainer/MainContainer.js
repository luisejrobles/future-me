import React from "react";

const MainContainer = ({ view = 0 }) => {
  const handleView = () => {
    switch (view) {
      case 0:
        return <h1>Caso 0 entre</h1>;
      case 1:
        return <h1>Caso 1 entre</h1>;
      default:
        return <h1>UPS</h1>;
    }
  };
  return (
    <div className="w-4/5 h-5/6 mx-4 shadow-lg p-2 rounded-lg bg-white">
      {handleView()}
    </div>
  );
};

export default MainContainer;
