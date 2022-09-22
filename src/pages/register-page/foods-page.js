import './index.css'
import LogoDevelcode from './logodevelcode.png';
import React, { useState } from 'react';
import Select from 'react-select'

function FoodsPage() {
  const [foodTypes, setFoodState] = useState([]);

  React.useEffect(() => {
    fetchFoods()
  })

  const fetchFoods = () => {
    fetch("https://develfood-3.herokuapp.com/foodType", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf8",
      }
    })
    .then((response) => response.json())  
    .then((response) => onFetchSucess(response))
    .catch((err) => console.log("Erro de solicitação", err))
  }

  const onFetchSucess = (foodTypes) => {
    const options = foodTypes.map((food) => ({
      value: food.id,
      label: food.name,
    }))
    
    setFoodState({ options, error: null })
  }
  


  return (
    <div className="container">
      <div className="img-container">
        <img alt="logodevelcode" src={LogoDevelcode} />
      </div>
      <input type="text" name="name" placeholder="Nome do Restaurente" id="restaurantName" />
      <input type="tel" name="tel" placeholder="Número de Telefone" id="restaurantNumber" />
      <div className="foodTypeContainer">
        <Select options={foodTypes.options} />
      </div>
      <button type="button">Próximo</button>
      <p></p>

    </div>

  );
}

export default FoodsPage;