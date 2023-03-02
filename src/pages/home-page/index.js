import "./styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import menuImage from "./images/menubar.png";
import profileImage from "./images/profileicon.png";
import homeBtnImage from "./images/homebutton.png";
import promoImage from "./images/promotionex.jpg";
import kfImage from "./images/kficon.png";
import noPromoImage from "../../images/nopromotionsimage.png";
import PromotionIcon from "../../images/promotionicon.png";
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
import {
  getRestaurantFetch,
  getRestaurantEvaluation,
  getRestaurantPromotions,
  getRestaurantFeedbacks,
} from "../../services/restaurant";
import { useLocation } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();
  const [btnState, setBtnState] = React.useState(false);
  const [resImage, setResImage] = React.useState("");
  const [evImage1, setEvImage1] = React.useState("");
  const [evImage2, setEvImage2] = React.useState("");
  const [evImage3, setEvImage3] = React.useState("");
  const [resName, setResName] = React.useState(""); // Informações do restaurante
  const [resId, setResId] = React.useState(""); // Informações do restaurante
  const [resEvaluation, setResEvaluation] = React.useState("");
  const [promoMessage, setPromoMessage] = React.useState("");
  const [resFeedbacks, setResFeedbacks] = React.useState([]);
  const [showedEvaluations, setShowedEvaluations] = React.useState(3);

  const { state } = useLocation();
  const { token } = state;

  function openNav() {
    setBtnState((btnState) => !btnState);
  }

  React.useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = async () => {
    const restaurant = await getRestaurantFetch(token);
    onFetchSucess(restaurant);
  };

  const onFetchSucess = async (resData) => {
    setResName(resData.name);
    setResId(resData.id);

    const promotion = await getRestaurantPromotions(resData.id);
    const evaluation = await getRestaurantEvaluation(resData.id);
    const feedbacks = await getRestaurantFeedbacks();
    const parseFeedbacks = setEvaluationImage(feedbacks);

    setResFeedbacks(parseFeedbacks);
    setResEvaluation(evaluation.grade);
    evaluationImage(evaluation.grade);
    setPromoMessage(promotion.message);
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

  const evaluationImage = (grade) => {
    const evalImage = parseEvaluation(grade);
    setResImage(evalImage);
  };

  const setEvaluationImage = (feedbacks) => {
    const parsedFeedbacks = feedbacks.map((feedback) => ({
      ...feedback,
      image: parseEvaluation(feedback.evaluation),
    }));

    return parsedFeedbacks;
  };

  const parseEvaluation = (evaluation) => {
    if (evaluation >= 5) {
      return image5;
    } else if (evaluation > 4.4 && evaluation < 5) {
      return image45;
    } else if (evaluation >= 4) {
      return image4;
    } else if (evaluation > 3.4 && evaluation < 4) {
      return image35;
    } else if (evaluation >= 3) {
      return image3;
    } else if (evaluation > 2.4 && evaluation < 3) {
      return image25;
    } else if (evaluation >= 2) {
      return image2;
    } else if (evaluation > 1.4 && evaluation < 2) {
      return image15;
    } else if (evaluation >= 1) {
      return image1;
    } else if (evaluation > 0.4 && evaluation < 1) {
      return image05;
    } else if (evaluation >= 0) {
      return image0;
    }
  };

  const parsedResFeedbacks = resFeedbacks.slice(0, showedEvaluations);

  return (
    <div className="homepage">
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
              onClick={() => window.location.assign("/home")}
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
      <div className="resHome">
        <h1>{resName}</h1>
        <div className="separateBoxes">
          <div className="center-align">
            <div className="evaluationBox">
              <h3>Sua nota</h3>
              <img src={resImage} id="evaluationImage" />
            </div>
            <div className="promotionsBox">
              <h3>Promoções ativas</h3>
              <div className="promoImages">
                <img src={noPromoImage} id="nopromotionImage" />
                <h3>{promoMessage}</h3>
              </div>
            </div>
          </div>
          <div className="right-align">
            <div className="clientsFeedbacks">
              <h3>Avaliações dos Clientes</h3>
              {resFeedbacks.length &&
                parsedResFeedbacks.map((feedback) => (
                  <div className="feedbacks">
                    <p>{feedback.message}</p>
                    <img src={feedback.image} className="evaluation-image" />
                    <p>{feedback.date}</p>
                  </div>
                ))}
            </div>
            <button onClick={() => setShowedEvaluations(showedEvaluations + 3)}>
              Mostrar mais
            </button>
          </div>
        </div>
        <div className="bottom-align"></div>
      </div>
    </div>
  );
}

export default HomePage;
