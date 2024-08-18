import React, {useEffect} from "react";
import mainImg from "../assets/images/main-svg.svg";
function About() {
  // set navbar color
  useEffect(() => {
    document.getElementById("root").style.backgroundColor = "#f38919";
  }, []);

  return (
    <div className="aboutWrapper">
      <div className="aboutInfo">
        <h1>About</h1>
        <p>
          Jamaican recording artist Lord Sassafrass (Michael Johnson) is best
          known as a dancehall Reggae DJ with the Black Scorpio Sound System. On
          Black Scorpio Sound, Lord Sassafrass introduced the world to General
          Trees, and the entire Horseman Crew. Sassafrass record the album
          “Horseman Connection” 1982 on Striker Lee’s Starlight label and the
          top selling album “Pocomania Jump” 1985 on Black Scorpio Records,
          controlling the number one slot on the charts with “Poco Jump.” He
          recorded other great songs like “Jamaica Way,” “Murder She Wrote”
          (with General Trees), and the enormous hit “Step Up In Life” (with
          Barrington Levy).
        </p>
      </div>
      <div className="aboutImg">
        <img src={mainImg} />
      </div>
    </div>
  );
}

export default About;
