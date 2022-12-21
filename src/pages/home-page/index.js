import "./styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import menuImage from "./images/menubar.png";
import profileImage from "./images/profileicon.png";
import homeBtnImage from "./images/homebutton.png";
import promoImage from "./images/promotionex.jpg";
import kfImage from "./images/kficon.png";
import noPromoImage from "../../images/nopromotionsimage.png";
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
  const [resFeedbacks, setResFeedbacks] = React.useState("");

  const { state } = useLocation();
  const { token } = state;

  function openNav() {
    setBtnState((btnState) => !btnState);
  }

  React.useEffect(() => {
    if (resEvaluation) evaluationImage();
  }, [resEvaluation]);

  React.useEffect(() => {
    getRestaurant();
    evaluationImage();
    evaluationImageFd1();
    evaluationImageFd2();
    evaluationImageFd3();
  }, []);

  const getRestaurant = async () => {
    const restaurant = await getRestaurantFetch(token);
    onFetchSucess(restaurant);
  };

  const onFetchSucess = async (resData) => {
    console.log(resData);
    setResName(resData.name);
    setResId(resData.id);
    const promotion = await getRestaurantPromotions(resData.id);
    const evaluation = await getRestaurantEvaluation(resData.id);
    const feedbacks = await getRestaurantFeedbacks();
    setResFeedbacks(feedbacks);
    setResEvaluation(evaluation.grade);
    setPromoMessage(promotion.message);
  };

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

  const evaluationImage = () => {
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
  };

  const evaluationImageFd1 = () => {
    if (resFeedbacks.feedback1.evaluation >= 5) {
      setEvImage1(image5);
    } else if (
      resFeedbacks.feedback1.evaluation > 4.4 &&
      resFeedbacks.feedback1.evaluation < 5
    ) {
      setEvImage1(image45);
    } else if (resFeedbacks.feedback1.evaluation >= 4) {
      setEvImage1(image4);
    } else if (
      resFeedbacks.feedback1.evaluation > 3.4 &&
      resFeedbacks.feedback1.evaluation < 4
    ) {
      setEvImage1(image35);
    } else if (resFeedbacks.feedback1.evaluation >= 3) {
      setEvImage1(image3);
    } else if (
      resFeedbacks.feedback1.evaluation > 2.4 &&
      resFeedbacks.feedback1.evaluation < 3
    ) {
      setEvImage1(image25);
    } else if (resFeedbacks.feedback1.evaluation >= 2) {
      setEvImage1(image2);
    } else if (
      resFeedbacks.feedback1.evaluation > 1.4 &&
      resFeedbacks.feedback1.evaluation < 2
    ) {
      setEvImage1(image15);
    } else if (resFeedbacks.feedback1.evaluation >= 1) {
      setEvImage1(image1);
    } else if (
      resFeedbacks.feedback1.evaluation > 0.4 &&
      resFeedbacks.feedback1.evaluation < 1
    ) {
      setEvImage1(image05);
    } else if (resFeedbacks.feedback1.evaluation >= 0) {
      setEvImage1(image0);
    }
  };

  const evaluationImageFd2 = () => {
    if (resFeedbacks.feedback2.evaluation >= 5) {
      setEvImage2(image5);
    } else if (
      resFeedbacks.feedback2.evaluation > 4.4 &&
      resFeedbacks.feedback2.evaluation < 5
    ) {
      setEvImage2(image45);
    } else if (resFeedbacks.feedback2.evaluation >= 4) {
      setEvImage2(image4);
    } else if (
      resFeedbacks.feedback2.evaluation > 3.4 &&
      resFeedbacks.feedback2.evaluation < 4
    ) {
      setEvImage2(image35);
    } else if (resFeedbacks.feedback2.evaluation >= 3) {
      setEvImage2(image3);
    } else if (
      resFeedbacks.feedback2.evaluation > 2.4 &&
      resFeedbacks.feedback2.evaluation < 3
    ) {
      setEvImage2(image25);
    } else if (resFeedbacks.feedback2.evaluation >= 2) {
      setEvImage2(image2);
    } else if (
      resFeedbacks.feedback2.evaluation > 1.4 &&
      resFeedbacks.feedback2.evaluation < 2
    ) {
      setEvImage2(image15);
    } else if (resFeedbacks.feedback2.evaluation >= 1) {
      setEvImage2(image1);
    } else if (
      resFeedbacks.feedback2.evaluation > 0.4 &&
      resFeedbacks.feedback2.evaluation < 1
    ) {
      setEvImage2(image05);
    } else if (resFeedbacks.feedback2.evaluation >= 0) {
      setEvImage2(image0);
    }
  };

  const evaluationImageFd3 = () => {
    if (resFeedbacks.feedback3.evaluation >= 5) {
      setEvImage3(image5);
    } else if (
      resFeedbacks.feedback3.evaluation > 4.4 &&
      resFeedbacks.feedback3.evaluation < 5
    ) {
      setEvImage3(image45);
    } else if (resFeedbacks.feedback3.evaluation >= 4) {
      setEvImage3(image4);
    } else if (
      resFeedbacks.feedback3.evaluation > 3.4 &&
      resFeedbacks.feedback3.evaluation < 4
    ) {
      setEvImage3(image35);
    } else if (resFeedbacks.feedback3.evaluation >= 3) {
      setEvImage3(image3);
    } else if (
      resFeedbacks.feedback3.evaluation > 2.4 &&
      resFeedbacks.feedback3.evaluation < 3
    ) {
      setEvImage3(image25);
    } else if (resFeedbacks.feedback3.evaluation >= 2) {
      setEvImage3(image2);
    } else if (
      resFeedbacks.feedback3.evaluation > 1.4 &&
      resFeedbacks.feedback3.evaluation < 2
    ) {
      setEvImage3(image15);
    } else if (resFeedbacks.feedback3.evaluation >= 1) {
      setEvImage3(image1);
    } else if (
      resFeedbacks.feedback3.evaluation > 0.4 &&
      resFeedbacks.feedback3.evaluation < 1
    ) {
      setEvImage3(image05);
    } else if (resFeedbacks.feedback3.evaluation >= 0) {
      setEvImage3(image0);
    }
  };

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
              onClick={() => window.location.assign("/plates-page")}
            />
            <p id="menutext" className="text">
              Menu
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
              <div className="feedback1">
                <p>{resFeedbacks.feedback1.message}</p>
                <img src={evImage1} id="evImage1" />
                <p>{resFeedbacks.feedback1.date}</p>
              </div>
              <div className="feedback2">
                <p>{resFeedbacks.feedback2.message}</p>
                <img src={evImage2} id="evImage1" />
                <p>{resFeedbacks.feedback2.date}</p>
              </div>
              <div className="feedback3">
                <p>{resFeedbacks.feedback3.message}</p>
                <img src={evImage3} id="evImage1" />
                <p>{resFeedbacks.feedback3.date}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-align"></div>
      </div>
    </div>
  );
}

export default HomePage;
