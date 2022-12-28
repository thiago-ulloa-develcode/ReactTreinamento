import "./styles.css";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import menuImage from "./images/menubar.png";
import profileImage from "./images/profileicon.png";
import homeBtnImage from "./images/homebutton.png";
import kfImage from "./images/kficon.png";
import {
  getRestaurantFetch,
  getAuthFetch,
  updateDataFetch,
} from "../../services/restaurant";

function ProfilePage() {
  let navigate = useNavigate();
  const [btnState, setBtnState] = React.useState(false);
  const [resName, setResName] = React.useState(""); // Informações do restaurante
  const [email, setEmail] = React.useState("");
  const [cnpj, setCNPJ] = React.useState("");
  const [foodType, setFoodType] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [headquarters, setHeadquarters] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [neighborhood, setNeighborhood] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [city, setCity] = React.useState("");
  const [uf, setUf] = React.useState("");
  const [resId, setResId] = React.useState(""); // Informações do restaurante
  const [restaurantData, setRestaurantData] = React.useState({
    id: 0,
    name: "",
    cnpj: 0,
    phone: "",
    address: {
      city: "",
      neighborhood: "",
      number: "",
      street: "",
      state: "",
      zipCode: "",
      nickname: "",
    },
  });

  const { state } = useLocation();
  const { token } = state;

  function openNav() {
    setBtnState((btnState) => !btnState);
  }

  React.useEffect(() => {
    getRestaurant();
    getAuth();
  }, []);

  React.useEffect(() => {
    if (restaurantData) onFetchSucess();
  }, [restaurantData]);

  let toggleClassCheck = btnState ? "-open" : "";

  const getRestaurant = async () => {
    const restaurant = await getRestaurantFetch(token);
    onFetchSucess(restaurant);
  };

  const getAuth = async () => {
    const auth = await getAuthFetch(token);
    setEmail(auth.email);
  };

  const updateData = async () => {};

  // função para setar os dados do restaurante de acordo com o retorno do GET
  const onFetchSucess = async (resData) => {
    setRestaurantData(resData);
    setResName(restaurantData.name);
    setResId(restaurantData.id);
    setCNPJ(restaurantData.cnpj);
    setHeadquarters(restaurantData.address.nickname);
    setPhone(restaurantData.phone);
    // setFoodType(resData.food_types[0].name);
    setCity(restaurantData.city);
    setNeighborhood(restaurantData.address.neighborhood);
    setNumber(restaurantData.address.number);
    setStreet(restaurantData.address.street);
    setUf(restaurantData.address.state);
    setCep(restaurantData.address.zipCode);
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
              onClick={() => window.location.assign("/plates-page")}
            />
            <p id="menutext" className="text">
              Menu
            </p>
          </div>
        </div>
      </div>
      <div className="resProfile">
        <h1>Olá {resName}</h1>
        <div className="separateBoxes">
          <div className="center-align">
            <div className="profile-data">
              <h2>Informações pessoais</h2>
              <div className="inputs1">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  defaultValue={email}
                  id="inputdata"
                  readOnly
                />
                <input
                  type="text"
                  name="cnpj"
                  placeholder="CNPJ"
                  defaultValue={cnpj}
                  id="inputdata"
                  readOnly
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Nome do Restaurante"
                  defaultValue={resName}
                  id="inputdata"
                  onChange={(e) => setResName(e.target.value)}
                />
                <input
                  type="text"
                  name="foodtypes"
                  placeholder="Tipos de comida"
                  defaultValue={foodType}
                  id="inputdata"
                  onChange={(e) => setFoodType(e.target.value)}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="(XX) XXXXX-XXXX"
                  defaultValue={phone}
                  id="inputdata"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <p
                  className="link"
                  onClick={() => window.location.assign("/forgotpassword")}
                  id="extralinks"
                >
                  <a>Alterar Senha</a>
                </p>
              </div>
              <h2>Endereço</h2>
              <input
                type="text"
                name="matriz"
                placeholder="Matriz"
                defaultValue={headquarters}
                id="inputmatriz"
                onChange={(e) => setHeadquarters(e.target.value)}
              />
              <div className="inputs2">
                <input
                  type="text"
                  name="street"
                  placeholder="Rua"
                  defaultValue={street}
                  id="inputdata"
                  onChange={(e) => setStreet(e.target.value)}
                />
                <input
                  type="text"
                  name="neighborhood"
                  placeholder="Bairro"
                  defaultValue={neighborhood}
                  id="inputdata"
                  onChange={(e) => setNeighborhood(e.target.value)}
                />
                <input
                  type="text"
                  name="number"
                  placeholder="N°"
                  defaultValue={number}
                  id="inputdata"
                  onChange={(e) => setNumber(e.target.value)}
                />
                <input
                  type="text"
                  name="cep"
                  placeholder="CEP"
                  defaultValue={cep}
                  id="inputdata"
                  onChange={(e) => setCep(e.target.value)}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="Cidade"
                  defaultValue={city}
                  id="inputdata"
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  type="text"
                  name="uf"
                  placeholder="UF"
                  defaultValue={uf}
                  id="inputdata"
                  onChange={(e) => setUf(e.target.value)}
                />
              </div>
              <button type="button" onClick={() => updateData()}>
                Salvar
              </button>
            </div>
          </div>
          <div className="right-align"></div>
        </div>
        <div className="bottom-align"></div>
      </div>
    </div>
  );
}

export default ProfilePage;
