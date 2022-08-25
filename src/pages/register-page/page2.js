import './index.css'
import LogoDevelcode from './logodevelcode.png';
import React, { useState } from 'react';

function RegisterPage2() {
    const [cell, setCell] = useState('');

    return (
      <div class="container">
            <div class="img-container">
                <img alt="logodevelcode" src={LogoDevelcode}/>
            </div>
                <input type="text" name="name" placeholder="Nome do Restaurente" id="restaurantName"/>
                <input type="tel" name="tel" placeholder="Número de Telefone" id="restaurantNumber"/>
                <input type="text" name="foodType" placeholder="Tipo de Comida" id="foodType"/>
                <button type="button">Próximo</button>
                <p></p>
                
        </div>
        
    );
}


export default RegisterPage2;