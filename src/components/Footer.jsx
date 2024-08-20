import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="logo"></div>
      <div className="subscribe">
        <div className="label">
          <h2>Join The Team</h2>
        </div>
        <div className="input"></div>
        <div className="join">
          <div className="submit-btn">
            <Link to="/about">
              <button className="button-main">Learn More</button>
            </Link>
          </div>
          <div className="social">
            <div className="Ytube">
              <a href="/">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div className="Fbook">
              <a href="/">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
