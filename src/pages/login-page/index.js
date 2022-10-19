import "./index.css";
import LogoDevelcode from "./logodevelcode.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const form = {};

  return (
    <div className="container">
      <div className="img-container">
        <img alt="logodevelcode" src={LogoDevelcode} />
      </div>
      <input
        type="text"
        name="email"
        placeholder="Email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="Password"
        name="password"
        placeholder="Senha"
        id="senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={() => loginFunction()}>
        Login
      </button>
      <div className="extrabuttons">
        <p
          className="link"
          onClick={() => window.location.assign("/forgotpassword")}
        >
          <a>Esqueci minha senha</a>
        </p>
        <p
          className="link"
          onClick={() => window.location.assign("/register-page")}
        >
          <a>Criar nova conta</a>
        </p>
      </div>
    </div>
  );

  function loginFunction() {
    if (
      !document.getElementById("email").value ||
      !document.getElementById("senha").value
    ) {
      return console.log("Erro de solicitação");
    } else {
      fetch("https://develfood-3.herokuapp.com/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf8",
        },
        body: JSON.stringify({
          email: document.getElementById("email").value,
          password: document.getElementById("senha").value,
        }),
      })
        .then((response) => response.json())
        .then((json) => navigate("/home", { state: json }))
        .catch((err) => console.log("Erro de solicitação", err));
    }
  }
}

export default LoginPage;
