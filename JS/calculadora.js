const CalcularImc = () => {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(
    document.getElementById("altura").value.replace(",", ".")
  );
  const idade = document.querySelector('input[name="idade"]:checked').value;
  const genero = document.querySelector('input[name="genero"]:checked').value;
  const imc = peso / (altura * altura);

  let percentualGordura = 0;

  figura, (imagem = RecomandacoesImc(idade, genero, imc));
};

const RecomandacoesImc = (idade, genero, imc) => {
  let figura = "";
  let mensagem = "";

  if (idade >= 1 && idade < 10) {
    if (genero === "homem") {
      if (imc < 16.1) {
        figura = "abaixo_do_peso_crianca.webp";
        mensagem = "Abaixo do peso para homens crianças";
      } else if (imc >= 16.1 && imc < 18.8) {
        figura = "peso_normal_crianca.webp";
        mensagem = "Peso ideal para homens crianças";
      } else if (imc >= 18.8 && imc < 21.4) {
        figura = "sobrepeso_crianca.webp";
        mensagem = "Sobrepeso para homens crianças";
      } else {
        figura = "obesidade_crianca.webp";
        mensagem = "Sobrepeso para homens crianças";
      }

    } else if (genero === "mulher") {
      if (imc < 16.3) {
        figura = "abaixo_do_peso_crianca.webp";
        mensagem = "Abaixo do peso para mulheres crianças";
      } else if (imc >= 16.3 && imc < 19.1) {
        figura = "peso_normal_crianca.webp";
        mensagem = "Peso ideal para mulheres crianças";
      } else if (imc >= 19.2 && imc < 21.7) {
        figura = "sobrepeso_crianca.webp";
        mensagem = "Sobrepeso para mulheres crianças";
      } else {
        figura = "obesidade_crianca.webp";
        mensagem = "Sobrepeso para mulheres crianças";
      }
    }
  } 
  else if (idade >= 10 && idade < 15) {
    if (genero == "homem") {
      if (imc < 18.5) {
        figura = "abaixo_do_peso_crianca.webp";
        mensagem = "Abaixo do peso para homens crianças";
      } else if (imc >= 18.5 && imc < 21.9) {
        figura = "peso_normal_crianca.webp";
        mensagem = "Peso ideal para homens crianças";
      } else if (imc >= 21.9 && imc < 25.9) {
        figura = "sobrepeso_crianca.webp";
        mensagem = "Sobrepeso para homens crianças";
      } else {
        figura = "obesidade_crianca.webp";
        mensagem = "Sobrepeso para homens crianças";
      }
    } else if (genero == "mulheres") {
      if (imc < 18.9) {
        figura = "abaixo_do_peso_crianca.webp";
        mensagem = "Abaixo do peso para mulheres crianças";
      } else if (imc >= 18.9 && imc < 23) {
        figura = "peso_normal_crianca.webp";
        mensagem = "Peso ideal para mulheres crianças";
      } else if (imc >= 23 && imc < 27.7) {
        figura = "sobrepeso_crianca.webp";
        mensagem = "Sobrepeso para mulheres crianças";
      } else {
        figura = "obesidade_crianca.webp";
        mensagem = "Sobrepeso para mulheres crianças";
      }
    }

  } 
  else if (idade >= 15 && adulto < 65) {
    if (genero === "homem") {
      if (imc < 18.5) {
        figura = "abaixo_do_peso_masculino.webp";
        mensagem = "Abaixo do peso para homens adultos";
      } else if (imc >= 18.5 && imc < 24.9) {
        figura = "peso_normal_masculino.webp";
        mensagem = "Peso normal para homens adultos";
      } else if (imc >= 24.9 && imc < 29.9) {
        figura = "sobrepeso_masculino.webp";
        mensagem = "Sobrepeso para homens adultos";
      } else if (imc >= 29.9 && imc < 34.9) {
        figura = "obesidade_grau_I_masculina.webp";
        mensagem = "Obesidade Grau I para homens adultos";
      } else if (imc >= 34.9 && imc < 39.9) {
        figura = "obesidade_grau_II_masculina.webp";
        mensagem = "Obesidade Grau II para homens adultos";
      } else {
        figura = "obesidade_grau_III_masculina.webp";
        mensagem = "Obesidade Grau III para homens adultos";
      }
    } else if (genero === "mulher") {
      if (imc < 18.5) {
        figura = "abaixo_do_peso_feminino.webp";
        mensagem = "Abaixo do peso para mulheres adultas";
      } else if (imc >= 18.5 && imc < 24.9) {
        figura = "peso_normal_feminino.webp";
        mensagem = "Peso normal para mulheres adultas";
      } else if (imc >= 24.9 && imc < 29.9) {
        figura = "sobrepeso_feminino.webp";
        mensagem = "Sobrepeso para mulheres adultas";
      } else if (imc >= 29.9 && imc < 34.9) {
        figura = "obesidade_grau_I_feminina.webp";
        mensagem = "Obesidade Grau I para mulheres adultas";
      } else if (imc >= 34.9 && imc < 39.9) {
        figura = "obesidade_grau_II_feminina.webp";
        mensagem = "Obesidade Grau II para mulheres adultas";
      } else {
        figura = "obesidade_grau_III_feminina.webp";
        mensagem = "Obesidade Grau III para mulheres adultas";
      }
    }
  } else {
    if (genero === "homem") {
      if (imc < 22) {
        figura = "abaixo_do_peso_masculino.webp";
        mensagem = "Abaixo do peso para homens idosos";
      } else if (imc >= 22 && imc < 27) {
        figura = "peso_normal_masculino.webp";
        mensagem = "Peso normal para homens idosos";
      } else if (imc >= 27 && imc < 30) {
        figura = "sobrepeso_masculino.webp";
        mensagem = "Sobrepeso para homens idosos";
      } else {
        figura = "obesidade_masculina.webp";
        mensagem = "Obesidade para homens idosos";
      }
    } else if (genero === "mulher") {
      if (imc < 22) {
        figura = "abaixo_do_peso_feminino.webp";
        mensagem = "Abaixo do peso para mulheres idosas";
      } else if (imc >= 22 && imc < 27) {
        figura = "peso_normal_feminino.webp";
        mensagem = "Peso normal para mulheres idosas";
      } else if (imc >= 27 && imc < 30) {
        figura = "sobrepeso_feminino.webp";
        mensagem = "Sobrepeso para mulheres idosas";
      } else {
        figura = "obesidade_feminina.webp";
        mensagem = "Obesidade para mulheres idosas";
      }
    }
  }
  return figura, mensagem;
};

const formatarInputAltura = (input) => {
    let valor = input.value.replace(/[^\d,]/g, '')

    if (valor.includes(',')) {
        valor = valor.substring(0, 1) + valor.substring(1).replace(',', '');
        valor = valor.substring(0, 1) + ',' + valor.substring(1);
    } else {
        if (valor.length > 1) {
            valor = valor.substring(0, 1) + ',' + valor.substring(1);
        }
    }

    input.value = valor;
};
