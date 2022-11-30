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
import { useLocation } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();
  const [btnState, setBtnState] = React.useState(false);
  const [promoMessage, setPromoMessage] = React.useState("");
  const [resPromotions, setResPromotions] = React.useState("");
  const [resEvaluation, setResEvaluation] = React.useState("");
  const [resImage, setResImage] = React.useState("");
  const [evImage1, setEvImage1] = React.useState("");
  const [evImage2, setEvImage2] = React.useState("");
  const [evImage3, setEvImage3] = React.useState("");
  const [resName, setResName] = React.useState(""); // Informações do restaurante
  const [resId, setResId] = React.useState(""); // Informações do restaurante

  const { state } = useLocation();
  const { token } = state;

  const feedbacktxt1 = {
    message: "A comida desse lugar é ótima, uma pena que o pedido atrasou.",
    evaluation: 4,
    date: "15/11/2022",
  };

  const feedbacktxt2 = {
    message: "A comida estava ótima.",
    evaluation: 4.5,
    date: "12/11/2022",
  };

  const feedbacktxt3 = {
    message: "A comida desse lugar é ótima, mas esqueceram parte do pedido.",
    evaluation: 2,
    date: "10/11/2022",
  };

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

  let toggleClassCheck = btnState ? "-open" : "";

  // Função para chamar as mensagens de avaliação dos clientes

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
  const onFetchSucess = async (resData) => {
    setResName(resData.name);
    setResId(resData.id);
    getRestaurantPromotions(resData.id);
    console.log(resData);

    const resp = await getRestaurantEvaluation(resData.id);
  };

  async function getRestaurantEvaluation(id) {
    try {
      const response = await fetch(
        "https://develfood-3.herokuapp.com/restaurantEvaluation/" +
          id +
          "/grade",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=utf8",
            Authorization: "Bearer " + token,
          },
        }
      );
      const json = await response.json();
      setResEvaluation(json);
    } catch (err) {
      console.log("Erro de solicitação", err);
    }
  }

  const getRestaurantPromotions = (id = resId) => {
    fetch("https://develfood-3.herokuapp.com/restaurantPromotion/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf8",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((response) => setResPromotions(response));
    if (!resPromotions.ok) {
      setPromoMessage("Nenhuma promoção foi encontrada");
    }
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
    if (feedbacktxt1.evaluation >= 5) {
      setEvImage1(image5);
    } else if (feedbacktxt1.evaluation > 4.4 && feedbacktxt1.evaluation < 5) {
      setEvImage1(image45);
    } else if (feedbacktxt1.evaluation >= 4) {
      setEvImage1(image4);
    } else if (feedbacktxt1.evaluation > 3.4 && feedbacktxt1.evaluation < 4) {
      setEvImage1(image35);
    } else if (feedbacktxt1.evaluation >= 3) {
      setEvImage1(image3);
    } else if (feedbacktxt1.evaluation > 2.4 && feedbacktxt1.evaluation < 3) {
      setEvImage1(image25);
    } else if (feedbacktxt1.evaluation >= 2) {
      setEvImage1(image2);
    } else if (feedbacktxt1.evaluation > 1.4 && feedbacktxt1.evaluation < 2) {
      setEvImage1(image15);
    } else if (feedbacktxt1.evaluation >= 1) {
      setEvImage1(image1);
    } else if (feedbacktxt1.evaluation > 0.4 && feedbacktxt1.evaluation < 1) {
      setEvImage1(image05);
    } else if (feedbacktxt1.evaluation >= 0) {
      setEvImage1(image0);
    }
  };

  const evaluationImageFd2 = () => {
    if (feedbacktxt2.evaluation >= 5) {
      setEvImage2(image5);
    } else if (feedbacktxt2.evaluation > 4.4 && feedbacktxt2.evaluation < 5) {
      setEvImage2(image45);
    } else if (feedbacktxt2.evaluation >= 4) {
      setEvImage2(image4);
    } else if (feedbacktxt2.evaluation > 3.4 && feedbacktxt2.evaluation < 4) {
      setEvImage2(image35);
    } else if (feedbacktxt2.evaluation >= 3) {
      setEvImage2(image3);
    } else if (feedbacktxt2.evaluation > 2.4 && feedbacktxt2.evaluation < 3) {
      setEvImage2(image25);
    } else if (feedbacktxt2.evaluation >= 2) {
      setEvImage2(image2);
    } else if (feedbacktxt2.evaluation > 1.4 && feedbacktxt2.evaluation < 2) {
      setEvImage2(image15);
    } else if (feedbacktxt2.evaluation >= 1) {
      setEvImage2(image1);
    } else if (feedbacktxt2.evaluation > 0.4 && feedbacktxt2.evaluation < 1) {
      setEvImage2(image05);
    } else if (feedbacktxt2.evaluation >= 0) {
      setEvImage2(image0);
    }
  };

  const evaluationImageFd3 = () => {
    if (feedbacktxt3.evaluation >= 5) {
      setEvImage3(image5);
    } else if (feedbacktxt3.evaluation > 4.4 && feedbacktxt3.evaluation < 5) {
      setEvImage3(image45);
    } else if (feedbacktxt3.evaluation >= 4) {
      setEvImage3(image4);
    } else if (feedbacktxt3.evaluation > 3.4 && feedbacktxt3.evaluation < 4) {
      setEvImage3(image35);
    } else if (feedbacktxt3.evaluation >= 3) {
      setEvImage3(image3);
    } else if (feedbacktxt3.evaluation > 2.4 && feedbacktxt3.evaluation < 3) {
      setEvImage3(image25);
    } else if (feedbacktxt3.evaluation >= 2) {
      setEvImage3(image2);
    } else if (feedbacktxt3.evaluation > 1.4 && feedbacktxt3.evaluation < 2) {
      setEvImage3(image15);
    } else if (feedbacktxt3.evaluation >= 1) {
      setEvImage3(image1);
    } else if (feedbacktxt3.evaluation > 0.4 && feedbacktxt3.evaluation < 1) {
      setEvImage3(image05);
    } else if (feedbacktxt3.evaluation >= 0) {
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
                <p>{feedbacktxt1.message}</p>
                <img src={evImage1} id="evImage1" />
                <p>{feedbacktxt1.date}</p>
              </div>
              <div className="feedback2">
                <p>{feedbacktxt2.message}</p>
                <img src={evImage2} id="evImage1" />
                <p>{feedbacktxt2.date}</p>
              </div>
              <div className="feedback3">
                <p>{feedbacktxt3.message}</p>
                <img src={evImage3} id="evImage1" />
                <p>{feedbacktxt3.date}</p>
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
