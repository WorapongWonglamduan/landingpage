import React from "react";
import "./index.css";

const Index = () => {
  const sectionAll = [
    { title: "Home" },
    { title: "About" },
    { title: "Services" },
    { title: "Contact" },
  ];

  return (
    <header className="header">
      <a href="#" className="logo">
        Logo
      </a>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <i className="bx bx-menu" id="menu-icon"></i>
        <i className="bx bx-x" id="close-icon"></i>
      </label>
      <nav className="navbar">
        {sectionAll.map(({ title }, index) => {
          return (
            <a href="#" style={{ "--i": index }}>
              {title}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Index;
