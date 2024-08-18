import {Link, Outlet, useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function Root() {
  const location = useLocation();
  let root = document.getElementById("root");
  // set the background for about page
  useEffect(() => {
    if (location.pathname.includes("about")) {
      root.style.backgroundImage = "none";
    } else {
      root.style.backgroundImage =
        "linear-gradient( to right, #1877f2, #1877f2, #1877f2, #ffffff, #ffffff)";
    }
  }, [location]);

  // show Nav bar background on scroll
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 30) {
        document.getElementById("navbar").style.backgroundColor =
          "rgba(255, 255, 255, 0.5)";
      } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="NavBar" id="navbar">
        <div className="active">
          <Link to="/">SassaFrass</Link>
        </div>

        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/music">Music</Link>
          <Link to="/about">About</Link>
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
      <Outlet />
    </>
  );
}
