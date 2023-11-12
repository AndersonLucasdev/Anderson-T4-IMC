const CalcularImc = () => {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const idade = parseInt(document.getElementById("idade").value);
  const genero = document.getElementById("genero").value;
  const imc = peso / (altura * altura);

  let figura = "";
  let mensagem = "";
  let percentualGordura = 0;

  RecomandacoesImc(mensagem, figura, idade, genero, imc)
};

const RecomandacoesImc = (mensagem, figura, idade, genero, imc) => {
  if (idade < 18) {
    // IMC para crianças
    if (genero === 'homem') {

    } else if (genero === 'mulher') {

    }
  } else if (idade >= 18 && adulto < 65) {
    // IMC para adulto
    if (genero === 'homem') {

    } else if (genero === 'mulher') {
      
    }
  } else {
    // IMC para idoso
    if (genero === 'homem') {

    } else if (genero === 'mulher') {
      
    }
  }
}