import "./index.css";
import LogoDevelcode from "./logodevelcode.png";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  let navigate = useNavigate();

  return (
    <div className="container">
      <div className="img-container">
        <img alt="logodevelcode" src={LogoDevelcode} />
      </div>
      <input type="text" name="email" placeholder="Email" id="email" />
      <input type="Password" name="password" placeholder="Senha" id="senha" />
      <button type="button" onClick={() => loginFunction()}>
        Login
      </button>
      <div className="extrabuttons">
        <p className="link"
          onClick={() =>
            window.location.assign("/forgotpassword")
        }
        >
          <a>Esqueci minha senha</a>
        </p>
        <p
          className="link"
          onClick={() =>
            window.location.assign("/register-page")
          }
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
        .then((json) => navigate("/home"))
        .catch((err) => console.log("Erro de solicitação", err));
      navigate("/home");
    }
  }
}

export default LoginPage;

