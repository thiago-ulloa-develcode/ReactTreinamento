import "./styles.css";
import React, { useState } from "react";
import menuImage from "./images/menubar.png";
import profileImage from "./images/profileicon.png";
import homeBtnImage from "./images/homebutton.png";
import image0 from "./images/starsimages/0.png";
import image05 from "./images/starsimages/0.5.png";
import image1 from "./images/starsimages/1.png";
import image15 from "./images/starsimages/1.5.png";
import image2 from "./images/starsimages/2.png";
import image25 from "./images/starsimages/2.5.png";
import image3 from "./images/starsimages/3.png";
import image35 from "./images/starsimages/3.5.png";
import image4 from "./images/starsimages/4.png";
import image45 from "./images/starsimages/4.5.png";
import image5 from "./images/starsimages/5.png";
import { useLocation } from "react-router-dom";

function HomePage() {
  const [btnState, setBtnState] = React.useState(false);
  const [resEvaluation, setResEvaluation] = React.useState("");
  const [resImage, setResImage] = React.useState("");
  const [resName, setResName] = React.useState(""); // Informações do restaurante
  const [resId, setResId] = React.useState(""); // Informações do restaurante

  const { state } = useLocation();
  const { token } = state;

  function openNav() {
    setBtnState((btnState) => !btnState);
  }

  React.useEffect(() => {
    getRestaurant();
    // getRestaurantEvaluation();
    evaluationImage();
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

  // Separar as informações do restaurante com o resultado do GET
  const onFetchSucess = (resData) => {
    setResName(resData.name);
    setResId(resData.id);
    console.log(resData);
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

  // função para alternar texto de acordo com o menu
  function toggleText() {
    var text = document.getElementById("textMenu");
    if (text.style.display === "flex") {
      text.style.display = "none";
    } else {
      text.style.display = "flex";
    }
  }

  function evaluationImage() {
    if (resEvaluation >= 5) {
      setResImage(image5);
    } else if (resEvaluation > 4.4 && resEvaluation < 5) {
      setResImage(image45);
    } else if (resEvaluation >= 4) {
      setResImage(image4);
    } else if (resEvaluation > 3.4 && resEvaluation < 4) {
      setResImage(image35);
    } else if (resEvaluation >= 3) {
      setResImage(image3);
    } else if (resEvaluation > 2.4 && resEvaluation < 3) {
      setResImage(image25);
    } else if (resEvaluation >= 2) {
      setResImage(image2);
    } else if (resEvaluation > 1.4 && resEvaluation < 2) {
      setResImage(image15);
    } else if (resEvaluation >= 1) {
      setResImage(image1);
    } else if (resEvaluation > 0.4 && resEvaluation < 1) {
      setResImage(image05);
    } else if (resEvaluation >= 0) {
      setResImage(image0);
    }
  }

  function rateButton() {
    evaluationImage();
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
          <div className="menuSeparate">
            <div className="menuImages">
              <img
                src={homeBtnImage}
                id="homebutton"
                alt="homebutton"
                onClick={() => window.location.assign("/home")}
              />
              <img
                src={profileImage}
                alt="profilebutton"
                id="profilebutton"
                onClick={() => window.location.assign("/profile-page")}
              />
            </div>
            <div className="textMenu" id="textMenu">
              <p className="text">Home</p>
              <p className="text">Perfil</p>
            </div>
          </div>
        </div>
        <div className="resHome">
          <div className="top-align">
            <h1>{resName}</h1>
          </div>
          <div className="center-align">
            <div className="promotionBox">
              <h3>Sua nota</h3>
              <img src={resImage} id="evaluationImage" />
            </div>
          </div>
          <div className="bottom-align">
            <input
              type="number"
              placeholder="Insira sua nota"
              min={1}
              max={5}
              value={resEvaluation}
              onChange={(e) => setResEvaluation(e.target.value)}
            ></input>
            <button
              onClick={() => {
                rateButton();
              }}
            >
              Avaliar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
