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
import { getRestaurantFetch } from "../../services/restaurant";

function NewPlatePage() {
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
        </div>
      </div>
      <h1>Cadastro/Edição de Prato</h1>
      <div className="centerDivide">
        <div className="editplate">
          <input
            type="text"
            name="pltsrcInput"
            placeholder="Nome do prato"
            id="pltsrcInput"
          />
          <textarea
            type="text"
            name="pltdscInput"
            placeholder="Descrição do prato"
            id="pltdscInput"
          />
          <div className="mergeInputs">
            <input
              type="text"
              name="priceInput"
              placeholder="Preço"
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
