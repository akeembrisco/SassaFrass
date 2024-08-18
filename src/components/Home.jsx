import React, {useEffect} from "react";
import mainImg from "../assets/images/main-svg.svg";
import {Link} from "react-router-dom";
function Home() {
  useEffect(() => {
    document.getElementById("root").style.backgroundImage =
      "linear-gradient(to right, #1877f2, #1877f2, #1877f2, #ffffff, #ffffff)";
  }, []);

  return (
    <div className="homeWrapper">
      <div className="homeInfo">
        <div className="logo">
          <h1>LogoW</h1>
        </div>
        <div className="header">
          <h1>
            Jamaican recording artist Lord Sassafrass (Michael Johnson) is best
            known as a dancehall Reggae DJ with the Black Scorpio Sound System
          </h1>
          <Link to="/about">
            <button className="button-main">Learn More</button>
          </Link>
        </div>
      </div>
      <div className="homeImg">
        <img src={mainImg} />
      </div>
    </div>
  );
}

export default Home;
