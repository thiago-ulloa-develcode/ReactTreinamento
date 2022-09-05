// https://medium.com/reactbrasil/m%C3%A1scara-de-cnpj-com-react-regex-bafb58d2285e
// https://www.w3schools.com/jsref/jsref_obj_regexp.asp?channelFrom=bzy_client_Version%207.0.0.3162
export const formatCNPJ = (value) => {
  return value
    .replace(/\D+/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

// https://www.geradorcnpj.com/javascript-validar-cnpj.htm
// Não siga o padrão de código dessa função, mas deu preguiça de montar uma e essa funciona
export const isValidCnpj = (cnpj) => {
  const invalids = [
    "00000000000000",
    "11111111111111",
    "22222222222222",
    "44444444444444",
    "55555555555555",
    "66666666666666",
    "77777777777777",
    "88888888888888",
    "99999999999999",
  ];
  let tamanho, numeros, digitos, soma, pos, resultado;

  cnpj = cnpj.replace(/[^\d]+/g, "");

  if (cnpj === "") {
    alert("CPNJ vázio");
    return false;
  }
  console.log(cnpj, cnpj.length);
  if (cnpj.length !== 14) {
    alert("CPNJ incompleto");
    return false;
  }
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  if (invalids.includes(cnpj)) {
    alert("CPNJ inválido");
    return false;
  }

  tamanho = cnpj.length - 2;
  numeros = cnpj.substring(0, tamanho);
  digitos = cnpj.substring(tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  if (resultado !== digitos.charAt(0)) {
    alert("CPNJ inválido");
    return false;
  }

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  if (resultado !== digitos.charAt(1)) {
    alert("CPNJ inválido");
    return false;
  }

  return true;
};

// https://stackoverflow.com/questions/15393935/boolean-in-an-if-statement
export const isValidEmail = (email) => {
  if (email) return true;
  alert("Email Inválido");
};

export const isValidPassword = (password) => {
  if (password) return true;
  alert("Senha Inválida");
};
