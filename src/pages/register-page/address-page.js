import React from "react";
import LogoDevelcode from "./logodevelcode.png";
import { formatCep, isValidCep } from "../../utils/formValidation";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./index.css";
import moment from "moment/moment";

function AddressPage() {
  let navigate = useNavigate();

  const [cep, setCep] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [neighborhood, setNeighborhood] = React.useState("");
  const [city, setCity] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [resState, setresState] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [canSubmit, setCanSubmit] = React.useState(false);

  React.useEffect(() => {
    setCanSubmit(cep.lenght === 9);
  }, [cep]);

  const { state } = useLocation();
  const { email, password, cnpj, resName, resNumber, resFoodType } = state;
  console.log(state);

  const disabledClass = !canSubmit ? "disabled-button" : "";

  return (
    <div className="container">
      <div className="img-container">
        <img alt="logodevelcode" src={LogoDevelcode} />
      </div>

      <input
        type="text"
        placeholder="Apelido"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Rua"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bairro"
        value={neighborhood}
        onChange={(e) => setNeighborhood(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Estado"
        value={resState}
        onChange={(e) => setresState(e.target.value)}
      />
      <input
        type="number"
        placeholder="Número"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="CEP"
        value={cep}
        onChange={(e) => setCep(formatCep(e.target.value))}
      />

      <button
        type="button"
        className={disabledClass}
        onClick={() => crtAccFunction()}
      >
        Próximo
      </button>
    </div>
  );

  function crtAccFunction() {
    if (!cep || !number || !city || !neighborhood || !street) {
      return console.log("Erro de solicitação");
    } else {
      fetch("https://develfood-3.herokuapp.com/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf8",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          creationDate: moment().format("YYYY-MM-DD"),
          role: {
            id: 1,
          },
          restaurant: {
            name: resName,
            cnpj: cnpj,
            phone: resNumber,
            photo: {
              code: "imagemEmBase64",
            },
            foodTypes: [{ id: resFoodType }],
            address: {
              street: street,
              number: number,
              neighborhood: neighborhood,
              city: city,
              zipCode: cep,
              state: resState,
              nickname: nickname,
            },
          },
        }),
      })
        .then((response) => response.json())
        .then((json) => navigate("/home"))
        .catch((err) => console.log("Erro de solicitação", err));
      navigate("/home");
    }
  }
}

export default AddressPage;
