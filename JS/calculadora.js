const CalcularImc = () => {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const idade = parseInt(document.getElementById("idade").value);
  const genero = document.getElementById("genero").value;
  const imc = peso / (altura * altura);

  
  let percentualGordura = 0;

  RecomandacoesImc(idade, genero, imc)
};

const RecomandacoesImc = (idade, genero, imc) => {
  let figura = "";
  let mensagem = "";

  if (idade >= 1 && idade < 18) {
    // IMC para crianças
    if (genero === 'homem') {
      
    } else if (genero === 'mulher') {

    }
  } else if (idade >= 18 && adulto < 65) {
    // IMC para adulto
    if (genero === 'homem') {
      if (imc < 18.5) {
            figura = 'abaixo_do_peso_masculino.png';
            mensagem = 'Abaixo do peso para homens adultos';
        } else if (imc >= 18.5 && imc < 24.9) {
            figura = 'peso_normal_masculino.png';
            mensagem = 'Peso normal para homens adultos';
        } else if (imc >= 24.9 && imc < 29.9) {
            figura = 'sobrepeso_masculino.png';
            mensagem = 'Sobrepeso para homens adultos';
        } else if (imc >= 29.9 && imc < 34.9) {
            figura = 'obesidade_grau_I_masculina.png';
            mensagem = 'Obesidade Grau I para homens adultos';
        } else if (imc >= 34.9 && imc < 39.9) {
            figura = 'obesidade_grau_II_masculina.png';
            mensagem = 'Obesidade Grau II para homens adultos';
        } else {
            figura = 'obesidade_grau_III_masculina.png';
            mensagem = 'Obesidade Grau III para homens adultos';
        }
    } else if (genero === 'mulher') {
      if (imc < 18.5) {
            figura = 'abaixo_do_peso_feminino.png';
            mensagem = 'Abaixo do peso para mulheres adultas';
        } else if (imc >= 18.5 && imc < 24.9) {
            figura = 'peso_normal_feminino.png';
            mensagem = 'Peso normal para mulheres adultas';
        } else if (imc >= 24.9 && imc < 29.9) {
            figura = 'sobrepeso_feminino.png';
            mensagem = 'Sobrepeso para mulheres adultas';
        } else if (imc >= 29.9 && imc < 34.9) {
            figura = 'obesidade_grau_I_feminina.png';
            mensagem = 'Obesidade Grau I para mulheres adultas';
        } else if (imc >= 34.9 && imc < 39.9) {
            figura = 'obesidade_grau_II_feminina.png';
            mensagem = 'Obesidade Grau II para mulheres adultas';
        } else {
            figura = 'obesidade_grau_III_feminina.png';
            mensagem = 'Obesidade Grau III para mulheres adultas';
        }
    }
  } else {
    // IMC para idoso
    if (genero === 'homem') {
      if (imc < 22) {
        figura = 'abaixo_do_peso_masculino.png';
        mensagem = 'Abaixo do peso para homens idosos';
    } else if (imc >= 22 && imc < 27) {
        figura = 'peso_normal_masculino.png';
        mensagem = 'Peso normal para homens idosos';
    } else if (imc >= 27 && imc < 30) {
        figura = 'sobrepeso_masculino.png';
        mensagem = 'Sobrepeso para homens idosos';
    } else {
        figura = 'obesidade_masculina.png';
        mensagem = 'Obesidade para homens idosos';
    }
    } else if (genero === 'mulher') {
      if (imc < 22) {
        figura = 'abaixo_do_peso_feminino.png';
        mensagem = 'Abaixo do peso para mulheres idosas';
    } else if (imc >= 22 && imc < 27) {
        figura = 'peso_normal_feminino.png';
        mensagem = 'Peso normal para mulheres idosas';
    } else if (imc >= 27 && imc < 30) {
        figura = 'sobrepeso_feminino.png';
        mensagem = 'Sobrepeso para mulheres idosas';
    } else {
        figura = 'obesidade_feminina.png';
        mensagem = 'Obesidade para mulheres idosas';
    }
    }
  }
  return figura, mensagem
}