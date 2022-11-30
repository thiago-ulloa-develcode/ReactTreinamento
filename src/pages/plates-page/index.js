import "./styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import menuImage from "./images/menubar.png";
import profileImage from "./images/profileicon.png";
import homeBtnImage from "./images/homebutton.png";
import kfImage from "./images/kficon.png";
import editIcon from "./images/editicon.png";
import deleteIcon from "./images/deleteicon.png";

function PlatesPage() {
  let navigate = useNavigate();
  const [btnState, setBtnState] = React.useState(false);
  const [resName, setResName] = React.useState("");

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
    <div className="platesPage">
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
      <h1>Menu do Restaurante:</h1>
      <h1>Nome do Restaurante</h1>
      <div className="centerDivide">
        <div className="plateFunctions">
          <input
            type="text"
            name="pltsrcInput"
            placeholder="Nome do prato"
            id="pltsrcInput"
          />
          <button type="button" id="newplatebtn">
            Novo Prato
          </button>
        </div>
        <div className="plateslist">
          <div className="plate1">
            <img src={editIcon} id="editbutton" alt="editbutton" />
            <img src={deleteIcon} id="deletebutton" alt="deletebutton" />
          </div>
          <div className="plate2">
            <img src={editIcon} id="editbutton" alt="editbutton" />
            <img src={deleteIcon} id="deletebutton" alt="deletebutton" />
          </div>
          <div className="plate3">
            <img src={editIcon} id="editbutton" alt="editbutton" />
            <img src={deleteIcon} id="deletebutton" alt="deletebutton" />
          </div>
          <div className="plate4">
            <img src={editIcon} id="editbutton" alt="editbutton" />
            <img src={deleteIcon} id="deletebutton" alt="deletebutton" />
          </div>
          <div className="plate5">
            <img src={editIcon} id="editbutton" alt="editbutton" />
            <img src={deleteIcon} id="deletebutton" alt="deletebutton" />
          </div>
          <div className="plate6">
            <img src={editIcon} id="editbutton" alt="editbutton" />
            <img src={deleteIcon} id="deletebutton" alt="deletebutton" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlatesPage;
