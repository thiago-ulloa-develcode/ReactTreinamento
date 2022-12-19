import React, { useState } from "react";

const [resName, setResName] = React.useState(""); // Informações do restaurante
const [resId, setResId] = React.useState(""); // Informações do restaurante
const [resPromotions, setResPromotions] = React.useState("");
const [resEvaluation, setResEvaluation] = React.useState("");
const [promoMessage, setPromoMessage] = React.useState("");

export async function getRestaurant(token) {
  fetch("https://develfood-3.herokuapp.com/restaurant/auth", {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf8",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((response) => onFetchSucess(response))
    .catch((err) => onFetchSucess(restaurantMock));
}

const restaurantMock = {
  id: 193,
  email: "emailfake@develcode.com.br",
  name: "Restaurante Fake",
};

const onFetchSucess = async (resData) => {
  setResName(resData.name);
  setResId(resData.id);
  getRestaurantPromotions(resData.id);
  console.log(resData);

  const resp = await getRestaurantEvaluation(resData.id);
};

async function getRestaurantEvaluation(id, token) {
  try {
    const response = await fetch(
      "https://develfood-3.herokuapp.com/restaurantEvaluation/" + id + "/grade",
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
    setResEvaluation(restaurantEvMock.grade);
  }
}

const restaurantEvMock = {
  grade: 3,
};

const getRestaurantPromotions = (id = resId, token) => {
  fetch("https://develfood-3.herokuapp.com/restaurantPromotion/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf8",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((response) => setResPromotions(response))
    .catch((err) => setResPromotions(promotionsMock));
  if (!resPromotions.ok) {
    setPromoMessage("Nenhuma promoção foi encontrada");
  }
};

const promotionsMock = {};
