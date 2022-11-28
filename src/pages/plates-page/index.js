import "./styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import menuImage from "./images/menubar.png";
import profileImage from "./images/profileicon.png";
import homeBtnImage from "./images/homebutton.png";
import kfImage from "./images/kficon.png";

function PlatesPage() {
  let navigate = useNavigate();
  const [btnState, setBtnState] = React.useState(false);

  function openNav() {
    setBtnState((btnState) => !btnState);
  }

  let toggleClassCheck = btnState ? "-open" : "";

  // função para alternar texto de acordo com o menu
  function toggleText() {
    var text = document.getElementById("hometext");
    var text2 = document.getElementById("profiletext");
    var text3 = document.getElementById("menutext");
    if (text.style.display === "flex") {
      text.style.display = "none";
      text2.style.display = "none";
      text3.style.display = "none";
    } else {
      text.style.display = "flex";
      text2.style.display = "flex";
      text3.style.display = "flex";
    }
  }

  return (
    <div className={`sideMenu${toggleClassCheck}`}>
      <div className="menubutton">
        <img
          src={menuImage}
          id="menubutton"
          alt="menubutton"
          onClick={() => {
            openNav();
            toggleText();
          }}
        />
      </div>
      <div className="menuSeparate">
        <div className="homeMenu">
          <img
            src={homeBtnImage}
            id="homebutton"
            alt="homebutton"
            onClick={() => navigate("/home")}
          />
          <p id="hometext" className="text">
            Home
          </p>
        </div>
        <div className="profileMenu">
          <img
            src={profileImage}
            alt="profilebutton"
            id="profilebutton"
            onClick={() => navigate("/profile-page")}
          />
          <p id="profiletext" className="text">
            Perfil
          </p>
        </div>
        <div className="foodsMenu">
          <img
            src={kfImage}
            id="foodtypebutton"
            alt="foodtypebutton"
            onClick={() => window.location.assign("/plates-page")}
          />
          <p id="menutext" className="text">
            Menu
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlatesPage;
