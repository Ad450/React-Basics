import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="foot">
      <footer>copyright {year} </footer>
    </div>
  );
};

export default Footer;
