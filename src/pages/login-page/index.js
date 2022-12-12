import "./index.css";
import LogoDevelcode from "../../images/logodevelcode.png";
import { loginFunction } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const form = {};

  function handleLogin() {
    loginFunction(email, password).then((user) =>
      navigate("/home", { state: user })
    );
  }

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
      <button type="button" onClick={() => handleLogin()}>
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
}

export default LoginPage;
