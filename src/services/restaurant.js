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
  name: "Restaurante Fake",
  cnpj: "10293847561029",
  phone: "11970839813",
  address: {
    city: "São Paulo",
    neighborhood: "Jabaquara",
    number: "196",
    street: "Rua Domiciano Leite Ribeiro",
    state: "SP",
    zipCode: "09551310",
    nickname: "Salão 1",
  },
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

export async function getAuthFetch(token) {
  return fetch("https://develfood-3.herokuapp.com/auth", {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf8",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => authMock);
}

const authMock = {
  email: "emailfake@develcode.com.br",
};

// Ainda preciso configurar
export async function updateDataFetch(resId, token, street) {
  return fetch("https://develfood-3.herokuapp.com/restaurant/" + resId, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=utf8",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      address: {
        street: street,
      },
    }),
  })
    .then((response) => response.json())
    .catch((err) => console.log("Erro de solicitação", err));
}
