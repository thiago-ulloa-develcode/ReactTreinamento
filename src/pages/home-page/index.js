import "./styles.css";
import React from "react";
import menuImage from "./images/menubar.png";
import homeBtnImage from "./images/homebutton.png";
import { useEffect } from "react";

function HomePage() {
  const [btnState, setBtnState] = React.useState(false);

  function openNav() {
    setBtnState((btnState) => !btnState);
  }

  let toggleClassCheck = btnState ? "-open" : "";

  return (
    <div className="homepage">
      <div className="headerseparate">
        <div className={`sideMenu${toggleClassCheck}`}>
          <div className="menubutton">
            <img src={menuImage} id="menubutton" onClick={openNav} />
          </div>
          <div className="homebutton">
            <img src={homeBtnImage} id="homebutton" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
