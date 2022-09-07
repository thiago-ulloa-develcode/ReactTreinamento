import './index.css'
import LogoDevelcode from './logodevelcode.png';
import React, { useState } from 'react';

function RegisterPage2() {
    const [foodState, setFoodState] = useState("");

    
          fetch("https://develfood-3.herokuapp.com/foodType", {
            method: "GET",
            headers: {
              "Content-Type": "application/json; charset=utf8",
            },
          })
            .then((response) => response.json())
            .catch((err) => console.log("Erro de solicitação", err));


    return (
      <div class="container">
            <div class="img-container">
                <img alt="logodevelcode" src={LogoDevelcode}/>
            </div>
                <input type="text" name="name" placeholder="Nome do Restaurente" id="restaurantName"/>
                <input type="tel" name="tel" placeholder="Número de Telefone" id="restaurantNumber"/>
                <input type="text" name="foodType" placeholder="Tipo de Comida" id="foodType"/>
                <div className="foodTypeContainer">
                <select className="custom-select" onChange={(e)=>{
                    const selectedFood=e.target.value;
                    setFoodState(selectedFood);
                }}>
                    <option value="type1">Tipo1</option>
                    <option value="type2">Tipo2</option>
                    <option value="type3">Tipo3</option>
                </select>
                </div>
                <button type="button">Próximo</button>
                <p></p>
                
        </div>
        
    );
}


export default RegisterPage2;