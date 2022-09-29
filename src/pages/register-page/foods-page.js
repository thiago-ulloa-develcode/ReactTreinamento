import "./index.css";
import LogoDevelcode from "./logodevelcode.png";
import React, { useState } from "react";
import Select from "react-select";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function FoodsPage() {
  let navigate = useNavigate();
  const [foodTypes, setFoodState] = useState([]);

  React.useEffect(() => {
    fetchFoods();
  }, []);

  const { state } = useLocation();
  const { email, password, cnpj } = state;
  console.log(state.email);

  const [resNumber, setPhoneNumber] = React.useState("");
  const [resName, setResName] = React.useState("");
  const [resFoodType, setResFoodType] = React.useState("");

  const form2 = {
    email,
    password,
    cnpj,
    resName,
    resNumber,
    resFoodType,
  };

  function handleChange(e) {
    setResFoodType(e.label);
  }

  function nextPage() {
    if (resName && resNumber && resFoodType) {
      navigate("/address-page", { state: form2 });
    }
  }

  const fetchFoods = () => {
    fetch("https://develfood-3.herokuapp.com/foodType", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf8",
      },
    })
      .then((response) => response.json())
      .then((response) => onFetchSucess(response))
      .catch((err) => console.log("Erro de solicitação", err));
  };

  const onFetchSucess = (foodTypes) => {
    const options = foodTypes.map((food) => ({
      value: food.id,
      label: food.name,
    }));

    setFoodState({ options, error: null });
  };

  return (
    <div className="container">
      <div className="img-container">
        <img alt="logodevelcode" src={LogoDevelcode} />
      </div>
      <input
        type="text"
        placeholder="Nome do Restaurente"
        value={resName}
        onChange={(e) => setResName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Número de Telefone"
        value={resNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        maxLength="12"
      />
      <div className="foodTypeContainer">
        <Select onChange={(e) => handleChange(e)} options={foodTypes.options} />
      </div>
      <button type="button" onClick={() => nextPage()}>
        Próximo
      </button>
      <p></p>
    </div>
  );
}

export default FoodsPage;
