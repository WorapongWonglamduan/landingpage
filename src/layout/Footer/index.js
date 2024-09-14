import React from "react";
import "./index.css";
const index = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-3 me-auto">
            {/* <a href="#home"> */}
            <h3 href="#home">Food Delivery</h3>
            <span>for food lovers</span>
            {/* </a> */}

            <ul className="socials">
              <li>
                <a
                  href="https://www.facebook.com/"
                  title="Facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require("../../assets/image/fb.png")}
                    alt="Facebook"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/"
                  title="Twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require("../../assets/image/tw.png")}
                    alt="Twitter"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  title="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require("../../assets/image/ln.png")}
                    alt="LinkedIn"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h5>Food Delivery</h5>
            <ul className="nav">
              <li>
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#service" className="nav-link">
                  service
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  contact
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="col-2">
            <h5>Account</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Create an Account
                </a>
              </li>
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Members
                </a>
              </li>
            </ul>
          </div> */}
          {/* 
          <div className="col-2">
            <h5>Legal</h5>
            <ul className="nav flex-column">
              <li>
                <a href="#home" className="nav-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#home" className="nav-link">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#home" className="nav-link">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#home" className="nav-link">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <hr />
        <p>© 2024Limited – All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default index;
