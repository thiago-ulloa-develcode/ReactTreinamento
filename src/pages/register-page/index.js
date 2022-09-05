import React from "react";
import LogoDevelcode from "./logodevelcode.png";
import {
  formatCNPJ,
  isValidCnpj,
  isValidEmail,
  isValidPassword,
} from "../../utils/formValidation";
import "./index.css";

function RegisterPage() {
  // https://www.w3schools.com/react/react_forms.asp
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cnpj, setCnpj] = React.useState("");
  const [canSubmit, setCanSubmit] = React.useState(false);

  // https://www.w3schools.com/js/js_comparisons.asp
  // https://pt-br.reactjs.org/docs/hooks-effect.html
  // https://www.w3schools.com/react/react_useeffect.asp
  React.useEffect(() => {
    setCanSubmit(password && email && cnpj.length === 18);
  }, [password, email, cnpj]);

  const handleSubmit = () => {
    const form = {
      email,
      password,
      cnpj,
    };

    if (isValidCnpj(cnpj) && isValidEmail(email) && isValidPassword(password)) {
      console.log(form); // next step
    }
  };

  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  // https://stackoverflow.com/questions/6259982/how-do-you-use-the-conditional-operator-in-javascript
  // https://www.w3schools.com/react/react_es6_ternary.asp
  const disabledClass = !canSubmit ? "disabled-button" : "";

  // https://pt-br.reactjs.org/docs/forms.html
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
          window.location.assign("/register-page2");
        }}
        disabled={!canSubmit}

      >
        Próximo
      </button>

      <div className="extrabuttons">
        <p className="link">
          <a>Já tem uma conta? Clique aqui para fazer login</a>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
