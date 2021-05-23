import React from "react";
import { Facebook, GitHub, Instagram, Twitter } from "react-feather";

const Footer = () => {
  return (
    <div className=" flex flex-col text-center font-sans text-xl text-indigo-900">
      <div className="self-center">Made with ♥ by luisejrobles </div>
      <div className="self-center flex">
        <a
          href="https://twitter.com/luisejrobles"
          rel="noreferrer"
          target="_blank"
        >
          <Twitter color="#1A237E" />
        </a>
        <a
          href="https://github.com/luisejrobles"
          rel="noreferrer"
          target="_blank"
        >
          <GitHub color="#1A237E" />
        </a>
        <a
          href="https://instagram.com/luisejrobles"
          rel="noreferrer"
          target="_blank"
        >
          <Instagram color="#1A237E" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
