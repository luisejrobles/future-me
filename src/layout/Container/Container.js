import React, { useState } from "react";
import Footer from "../Footer/Footer";
import LeftNav from "../LeftNav/LeftNav";
import MainContainer from "../MainContainer/MainContainer";

const Container = () => {
  const [view, setView] = useState(0);
  const handleChange = (value) => {
    setView(value);
  };
  return (
    <div className="flex flex-col bg-indigo-500 w-100 h-screen">
      <div className="flex w-100 items-center h-5/6 ">
        <LeftNav updateState={handleChange} />
        <MainContainer view={view} />
      </div>
      <div className="h-1/6">
        <Footer />
      </div>
    </div>
  );
};

export default Container;
