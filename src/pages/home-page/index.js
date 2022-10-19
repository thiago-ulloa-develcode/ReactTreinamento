import "./styles.css";
import React from "react";
import menuImage from "./images/menubar.png";
import profileImage from "./images/profileicon.png";
import homeBtnImage from "./images/homebutton.png";
import { useLocation } from "react-router-dom";

function HomePage() {
  const [btnState, setBtnState] = React.useState(false);

  const { state } = useLocation();
  const { token } = state;
  console.log(state);

  function openNav() {
    setBtnState((btnState) => !btnState);
  }

  React.useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = () => {
    fetch("https://develfood-3.herokuapp.com/restaurant/auth", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf8",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log("Erro de solicitação", err));
  };

  let toggleClassCheck = btnState ? "-open" : "";

  return (
    <div className="homepage">
      <div className="headerseparate">
        <div className={`sideMenu${toggleClassCheck}`}>
          <div className="menubutton">
            <img
              src={menuImage}
              id="menubutton"
              alt="menubutton"
              onClick={openNav}
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
          </div>
        </div>
        <div className="resHome">
          <div className="top-align">
            <b>Nome do Resturante</b>
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
