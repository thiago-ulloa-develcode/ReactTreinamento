export async function loginFunction(email, password) {
  if (!email || !password) {
    return console.log("Erro de solicitação");
  } else {
    return fetch("https://develfood-3.herokuapp.com/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf8",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => user);
  }
}

const user = {
  id: 3333,
  email: "emailfalso@gmail.com",
  role: {
    id: 1,
    name: "Restaurante Fake",
    authority: "Resturante Fake",
  },
  restaurantDTO: {
    id: 3333,
    name: "Restaurante Fake",
    photo: "",
  },
  costumerDTO: null,
};
