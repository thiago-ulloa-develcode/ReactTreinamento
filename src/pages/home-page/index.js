import "./styles.css";
import React, { useState } from "react";
import menuImage from "./images/menubar.png";
import profileImage from "./images/profileicon.png";
import homeBtnImage from "./images/homebutton.png";
import { useLocation } from "react-router-dom";

function HomePage() {
  const [btnState, setBtnState] = React.useState(false);
  // Informações do restaurante
  const [resName, setResName] = React.useState("");
  const [resId, setResId] = React.useState("");

  const { state } = useLocation();
  const { token } = state;

  function openNav() {
    setBtnState((btnState) => !btnState);
  }

  React.useEffect(() => {
    getRestaurant();
    // getRestaurantEvaluation();
  }, []);

  let toggleClassCheck = btnState ? "-open" : "";

  // Função GET com utilização do token
  const getRestaurant = () => {
    fetch("https://develfood-3.herokuapp.com/restaurant/auth", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf8",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((response) => onFetchSucess(response))
      .catch((err) => console.log("Erro de solicitação", err));
  };

  /* async function getRestaurantEvaluation() {
    await fetch(
      "https://develfood-3.herokuapp.com/restaurantEvaluation/" + { resId },
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf8",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => console.log(response));
  } */

  // Separar as informações do restaurante com o resultado do GET
  const onFetchSucess = (resData) => {
    setResName(resData.name);
    setResId(resData.id);
    console.log(resData);
  };

  // função para alternar texto de acordo com o menu
  function toggleText() {
    var text = document.getElementById("profileText");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  return (
    <div className="homepage">
      <div className="headerseparate">
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
          <div className="homebutton">
            <img
              src={homeBtnImage}
              id="homebutton"
              alt="homebutton"
              onClick={() => window.location.assign("/home")}
            />
          </div>
          <div className="profilebutton">
            <img
              src={profileImage}
              alt="profilebutton"
              id="profilebutton"
              onClick={() => window.location.assign("/profile-page")}
            />
            <p
              id="profileText"
              style={{ display: "none", color: "white", fontSize: "20px" }}
            >
              Perfil
            </p>
          </div>
        </div>
        <div className="resHome">
          <div className="top-align">
            <h1>{resName}</h1>
          </div>
          <div className="center-align">
            <div className="promotionBox">
              <p>Lista de Promoções</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
