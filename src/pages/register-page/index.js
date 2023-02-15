import React from "react";
import LogoDevelcode from "../../images/logodevelcode.png";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  formatCNPJ,
  isValidCnpj,
  isValidEmail,
  isValidPassword,
} from "../../utils/formValidation";
import "./index.css";

function RegisterPage() {
  let navigate = useNavigate();
  const notify = () => toast("Email já utilizado!");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cnpj, setCnpj] = React.useState("");
  const [canSubmit, setCanSubmit] = React.useState(false);

  React.useEffect(() => {
    setCanSubmit(password && email && cnpj.length === 18);
  }, [password, email, cnpj]);

  const handleSubmit = async () => {
    const form = {
      email,
      password,
      cnpj,
    };

    if (isValidEmail(email) && isValidPassword(password)) {
      const resp = await emailCheckFunction(form); // next step
      if (!resp) {
        navigate("/foods-page", { state: form });
      } else {
        notify(toast);
      }
    }
  };

  const disabledClass = !canSubmit ? "disabled-button" : "";

  async function emailCheckFunction(form) {
    try {
      const response = await fetch(
        "https://develfood-3.herokuapp.com/user/verify?email=" + email,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=utf8",
          },
        }
      );
      return response.status === 200 ? response.json : false;
    } catch (err) {
      console.log("Erro de solicitação", err);
    }
  }

  return (
    <div className="container">
      <div className="img-container">
        <img alt="logodevelcode" src={LogoDevelcode} />
      </div>

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        id="email"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="CNPJ"
        value={cnpj}
        onChange={(e) => setCnpj(formatCNPJ(e.target.value))}
      />

      <button
        type="button"
        className={disabledClass}
        onClick={() => {
          handleSubmit();
        }}
        disabled={!canSubmit}
      >
        Próximo
      </button>
      <ToastContainer />

      <div className="extrabuttons">
        <p className="link">
          <a>Já tem uma conta? Clique aqui para fazer login</a>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
