import React from "react";
import LogoDevelcode from "./logodevelcode.png";
import {
  formatCep,
  isValidCep
} from "../../utils/formValidation";
import "./index.css";

function AddressPage() {
  const [cep, setCep] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [neighborhood, setNeighborhood] = React.useState("");
  const [canSubmit, setCanSubmit] = React.useState(false);

  React.useEffect(() => {
    setCanSubmit(cep.lenght === 9);
  }, [cep]);

  const handleSubmit = () => {
    const form = {
      cep
    };

    if (isValidCep(cep)) {
      console.log(form); // next step
    }
  };

  const disabledClass = !canSubmit ? "disabled-button" : "";

  return (
    <div className="container">
      <div className="img-container">
        <img alt="logodevelcode" src={LogoDevelcode} />
      </div>

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
        placeholder="CEP"
        value={cep}
        onChange={(e) => setCep(formatCep(e.target.value))}
      />

      <button
        type="button"
        className={disabledClass}
        onClick={() => {
          handleSubmit();
          window.location.assign("/foods-page");
        }}
        disabled={!canSubmit}

      >
        Próximo
      </button>
    </div>
  );
}

export default AddressPage;
