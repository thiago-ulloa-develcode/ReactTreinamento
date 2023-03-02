import "./styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import menuImage from "./images/menubar.png";
import profileImage from "./images/profileicon.png";
import homeBtnImage from "./images/homebutton.png";
import kfImage from "./images/kficon.png";
import editIcon from "./images/editicon.png";
import PromotionIcon from "../../images/promotionicon.png";
import deleteIcon from "./images/deleteicon.png";
import { getRestaurantFetch, getPlatesFetch } from "../../services/restaurant";

function PlatesPage() {
  let navigate = useNavigate();
  const [btnState, setBtnState] = React.useState(false);
  const [resName, setResName] = React.useState("");

  const { state } = useLocation();
  const { token } = state;

  function openNav() {
    setBtnState((btnState) => !btnState);
  }

  React.useEffect(() => {
    getRestaurant();
  }, []);

  let toggleClassCheck = btnState ? "-open" : "";

  const getRestaurant = async () => {
    const restaurant = await getRestaurantFetch(token);
    onFetchSucess(restaurant);
  };

  const onFetchSucess = async (resData) => {
    setResName(resData.name);
  };

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
              onClick={() => navigate("/promotions-page", { state: state })}
            />
            <p id="promotiontext" className="text">
              Promoções
            </p>
          </div>
        </div>
      </div>
      <h1>Menu do Restaurante:</h1>
      <h1>{resName}</h1>
      <div className="centerDivide">
        <div className="plateFunctions">
          <input
            type="text"
            name="pltsrcInput"
            placeholder="Nome do prato"
            id="pltsrcInput"
          />
          <button
            type="button"
            id="newplatebtn"
            onClick={() => navigate("/newplate-page", { state: state })}
          >
            Novo Prato
          </button>
        </div>
        <div className="plateslist">
          <div className="plate1">
            <img
              src={editIcon}
              id="editbutton"
              alt="editbutton"
              onClick={() => navigate("/newplate-page", { state: state })}
            />
            <img src={deleteIcon} id="deletebutton" alt="deletebutton" />
          </div>
          <div className="plate2">
            <img
              src={editIcon}
              id="editbutton"
              alt="editbutton"
              onClick={() => navigate("/newplate-page", { state: state })}
            />
            <img src={deleteIcon} id="deletebutton" alt="deletebutton" />
          </div>
          <div className="plate3">
            <img
              src={editIcon}
              id="editbutton"
              alt="editbutton"
              onClick={() => navigate("/newplate-page", { state: state })}
            />
            <img src={deleteIcon} id="deletebutton" alt="deletebutton" />
          </div>
          <div className="plate4">
            <img
              src={editIcon}
              id="editbutton"
              alt="editbutton"
              onClick={() => navigate("/newplate-page", { state: state })}
            />
            <img src={deleteIcon} id="deletebutton" alt="deletebutton" />
          </div>
          <div className="plate5">
            <img
              src={editIcon}
              id="editbutton"
              alt="editbutton"
              onClick={() => navigate("/newplate-page", { state: state })}
            />
            <img src={deleteIcon} id="deletebutton" alt="deletebutton" />
          </div>
          <div className="plate6">
            <img
              src={editIcon}
              id="editbutton"
              alt="editbutton"
              onClick={() => navigate("/newplate-page", { state: state })}
            />
            <img src={deleteIcon} id="deletebutton" alt="deletebutton" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlatesPage;
