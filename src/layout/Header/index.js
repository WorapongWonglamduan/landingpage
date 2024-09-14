import React, { useEffect, useState } from "react";
import "./index.css";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const sectionAll = [
    { title: "Home" },
    { title: "About" },
    { title: "Services" },
    { title: "Contact" },
  ];
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`header  ${scrolled ? "scrolled" : ""}`}>
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
            <a href={`#${title.toLowerCase()}`} style={{ "--i": index }}>
              {title}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Index;
