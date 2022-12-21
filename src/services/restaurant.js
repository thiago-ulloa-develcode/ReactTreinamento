export async function getRestaurantFetch(token) {
  return fetch("https://develfood-3.herokuapp.com/restaurant/auth", {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf8",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => restaurantMock);
}

const restaurantMock = {
  id: 193,
  email: "emailfake@develcode.com.br",
  name: "Restaurante Fake",
};

export async function getRestaurantEvaluation(id, token) {
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
    return json;
  } catch (err) {
    return restaurantEvMock;
  }
}

const restaurantEvMock = {
  grade: 3,
};

export async function getRestaurantPromotions(id, token) {
  return fetch("https://develfood-3.herokuapp.com/restaurantPromotion/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf8",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => promotionsMock);
}

const promotionsMock = {
  message: "Nenhuma promoção disponível",
};

export async function getRestaurantFeedbacks() {
  return feedbacks;
}

const feedbacks = {
  feedback1: {
    message: "A comida desse lugar é ótima, uma pena que o pedido atrasou.",
    evaluation: 4,
    date: "15/11/2022",
  },
  feedback2: {
    message: "A comida estava ótima.",
    evaluation: 4.5,
    date: "12/11/2022",
  },
  feedback3: {
    message: "A comida desse lugar é ótima, mas esqueceram parte do pedido.",
    evaluation: 2,
    date: "10/11/2022",
  },
};
