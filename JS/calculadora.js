const CalcularImc = () => {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const idade = parseInt(document.getElementById("idade").value);
  const genero = document.getElementById("genero").value;
  const imc = peso / (altura * altura);
};
