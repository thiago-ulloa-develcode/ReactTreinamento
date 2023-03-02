import "./styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import menuImage from "./images/menubar.png";
import profileImage from "./images/profileicon.png";
import homeBtnImage from "./images/homebutton.png";
import kfImage from "./images/kficon.png";
import PromotionIcon from "../../images/promotionicon.png";
import { getPlatesFetch } from "../../services/restaurant";

function NewPlatePage() {
  let navigate = useNavigate();
  const [btnState, setBtnState] = React.useState(false);
  const [plate, setPlate] = React.useState("");

  const { state } = useLocation();
  const { token } = state;

  function openNav() {
    setBtnState((btnState) => !btnState);
  }

  React.useEffect(() => {
    getPlates();
  }, []);

  const getPlates = async () => {
    const plate = await getPlatesFetch();
    setPlate(plate);
  };

  let toggleClassCheck = btnState ? "-open" : "";

  // função para alternar texto de acordo com o menu
  function toggleText() {
    var hometext = document.getElementById("hometext");
    var profiletext = document.getElementById("profiletext");
    var menutext = document.getElementById("menutext");
    var promotiontext = document.getElementById("promotiontext");

    if (hometext.style.display === "flex") {
      hometext.style.display = "none";
      profiletext.style.display = "none";
      menutext.style.display = "none";
      promotiontext.style.display = "none";
    } else {
      hometext.style.display = "flex";
      profiletext.style.display = "flex";
      menutext.style.display = "flex";
      promotiontext.style.display = "flex";
    }
  }

  return (
    <div className="editPlatesPage">
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
              onClick={() => navigate("/home", { state: state })}
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
              onClick={() => navigate("/profile-page", { state: state })}
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
              onClick={() => navigate("/plates-page", { state: state })}
            />
            <p id="menutext" className="text">
              Menu
            </p>
          </div>
          <div className="promotionMenu">
            <img
              src={PromotionIcon}
              id="promotion-button"
              alt="promotion-button"
              onClick={() => navigate("/plates-page", { state: state })}
            />
            <p id="promotiontext" className="text">
              Promoções
            </p>
          </div>
        </div>
      </div>
      <h1>Cadastro/Edição de Prato</h1>
      <div className="centerDivide">
        <div className="editplate">
          <input
            type="text"
            name="pltsrcInput"
            placeholder="Nome do prato"
            defaultValue={plate.name}
            id="pltsrcInput"
          />
          <textarea
            type="text"
            name="pltdscInput"
            placeholder="Descrição do prato"
            defaultValue={plate.description}
            id="pltdscInput"
          />
          <div className="mergeInputs">
            <input
              type="text"
              name="priceInput"
              placeholder="Preço"
              defaultValue={plate.price}
              id="priceInput"
            />
            <input
              type="text"
              name="fdTypeInput"
              placeholder="Tipo de comida"
              id="fdTypeInput"
            />
          </div>
          <button
            type="button"
            id="newplatebtn"
            onClick={() => navigate("/plates-page", { state: state })}
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewPlatePage;
