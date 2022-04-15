import React from "react";
import { GitHub, Instagram, Linkedin, Twitter, User } from "react-feather";

const Footer = () => {
  return (
    <div className=" flex flex-col font-sans mr-4 text-xl text-indigo-900">
      <div className="self-end">Made with ♥ by luisejrobles </div>
      <div className="self-end flex space-x-4">
        <a
          href="https://twitter.com/luisejrobles"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Twitter color="#322E81" />
        </a>
        <a
          href="https://github.com/luisejrobles"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub color="#322E81" />
        </a>
        <a
          href="https://instagram.com/luisejrobles"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Instagram color="#322E81" />
        </a>
        <a
          href="https://lu.ma/luisejrobles"
          rel="noopener noreferrer"
          target="_blank"
        >
          <User color="#322E81" />
        </a>
        <a
          href="https://linkedin.com/in/luisejrobles"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Linkedin color="#322E81" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
