const CalcularImc = () => {
  const pesoElement = document.getElementById("peso");
  const alturaElement = document.getElementById("altura");
  const idadeElement = document.querySelector('input[name="idade"]:checked');
  const generoElement = document.querySelector('input[name="genero"]:checked');

  if (!pesoElement || !alturaElement || !idadeElement || !generoElement) {
    alert("Alguns elementos não foram encontrados!");
    return;
  }

  const peso = parseFloat(pesoElement.value);
  const altura = parseFloat(alturaElement.value.replace(",", "."));
  const idade = idadeElement.value;
  const genero = generoElement.value;
  const imc = peso / (altura * altura);

  if (!idade || isNaN(altura) || isNaN(peso) || !genero) {
    alert("Há campos vazios!");
  } else {
    const { figura, mensagem } = RecomandacoesImc(idade, genero, imc);

    const saidasDiv = document.querySelector('.container-main-calculadora-principal-saidas');
    saidasDiv.innerHTML = `
      <img src="../IMG/${figura}" alt="Figura">
      <h3>Recomendações: </h3>
      <p>Mensagem: ${mensagem}</p>
    `;
  }
};

const RecomandacoesImc = (idade, genero, imc) => {
  let figura = "";
  let mensagem = "";

  if (idade >= 1 && idade < 10) {
    if (genero === "masculino") {
      if (imc < 16.1) {
        figura = "abaixo_do_peso_crianca.webp";
        mensagem = "Underweight for boys children";
      } else if (imc >= 16.1 && imc < 18.8) {
        figura = "peso_normal_crianca.webp";
        mensagem = "Normal weight for boys children";
      } else if (imc >= 18.8 && imc < 21.4) {
        figura = "sobrepeso_crianca.webp";
        mensagem = "Overweight for boys children";
      } else {
        figura = "obesidade_crianca.webp";
        mensagem = "Obese for boys children";
      }
    } else if (genero === "feminino") {
      if (imc < 16.3) {
        figura = "abaixo_do_peso_crianca.webp";
        mensagem = "Underweight for girls children";
      } else if (imc >= 16.3 && imc < 19.1) {
        figura = "peso_normal_crianca.webp";
        mensagem = "Normal weight for girls children";
      } else if (imc >= 19.2 && imc < 21.7) {
        figura = "sobrepeso_crianca.webp";
        mensagem = "Overweight for girls children";
      } else {
        figura = "obesidade_crianca.webp";
        mensagem = "Obese for girls children";
      }
    }
  } else if (idade >= 10 && idade < 15) {
    if (genero == "masculino") {
      if (imc < 18.5) {
        figura = "abaixo_do_peso_crianca.webp";
        mensagem = "Underweight for boys children";
      } else if (imc >= 18.5 && imc < 21.9) {
        figura = "peso_normal_crianca.webp";
        mensagem = "Normal weight for boys children";
      } else if (imc >= 21.9 && imc < 25.9) {
        figura = "sobrepeso_crianca.webp";
        mensagem = "Overweight for boys children";
      } else {
        figura = "obesidade_crianca.webp";
        mensagem = "Obese for boys children";
      }
    } else if (genero == "feminino") {
      if (imc < 18.9) {
        figura = "abaixo_do_peso_crianca.webp";
        mensagem = "Underweight for girls children";
      } else if (imc >= 18.9 && imc < 23) {
        figura = "peso_normal_crianca.webp";
        mensagem = "Normal weight for girls children";
      } else if (imc >= 23 && imc < 27.7) {
        figura = "sobrepeso_crianca.webp";
        mensagem = "Overweight for girls children";
      } else {
        figura = "obesidade_crianca.webp";
        mensagem = "Obese for girls children";
      }
    }
  } else if (idade >= 15 && adulto < 65) {
    if (genero === "masculino") {
      if (imc < 18.5) {
        figura = "abaixo_do_peso_masculino.webp";
        mensagem = "Underweight for men adults";
      } else if (imc >= 18.5 && imc < 24.9) {
        figura = "peso_normal_masculino.webp";
        mensagem = "Normal weight for men adults";
      } else if (imc >= 24.9 && imc < 29.9) {
        figura = "sobrepeso_masculino.webp";
        mensagem = "Overweight for men adults";
      } else if (imc >= 29.9 && imc < 34.9) {
        figura = "obesidade_grau_I_masculina.webp";
        mensagem = "Obesity Grade I for men adults";
      } else if (imc >= 34.9 && imc < 39.9) {
        figura = "obesidade_grau_II_masculina.webp";
        mensagem = "Obesity Grade II for men adults";
      } else {
        figura = "obesidade_grau_III_masculina.webp";
        mensagem = "Obesity Grade III for men adults";
      }
    } else if (genero === "feminino") {
      if (imc < 18.5) {
        figura = "abaixo_do_peso_feminino.webp";
        mensagem = "Underweight for women adults";
      } else if (imc >= 18.5 && imc < 24.9) {
        figura = "peso_normal_feminino.webp";
        mensagem = "Normal weight for women adults";
      } else if (imc >= 24.9 && imc < 29.9) {
        figura = "sobrepeso_feminino.webp";
        mensagem = "Overweight for women adults";
      } else if (imc >= 29.9 && imc < 34.9) {
        figura = "obesidade_grau_I_feminina.webp";
        mensagem = "Obesity Grade I for women adults";
      } else if (imc >= 34.9 && imc < 39.9) {
        figura = "obesidade_grau_II_feminina.webp";
        mensagem = "Obesity Grade II for women adults";
      } else {
        figura = "obesidade_grau_III_feminina.webp";
        mensagem = "Obesity Grade III for women adults";
      }
    }
  } else {
    if (genero === "masculino") {
      if (imc < 22) {
        figura = "abaixo_do_peso_masculino.webp";
        mensagem = "Underweight for elderly men";
      } else if (imc >= 22 && imc < 27) {
        figura = "peso_normal_masculino.webp";
        mensagem = "Normal weight for elderly men";
      } else if (imc >= 27 && imc < 30) {
        figura = "sobrepeso_masculino.webp";
        mensagem = "Overweight for elderly men";
      } else {
        figura = "obesidade_grau_I_masculino.webp";
        mensagem = "Obesity for elderly men";
      }
    } else if (genero === "feminino") {
      if (imc < 22) {
        figura = "abaixo_do_peso_feminino.webp";
        mensagem = "Underweight for elderly women";
      } else if (imc >= 22 && imc < 27) {
        figura = "peso_normal_feminino.webp";
        mensagem = "Normal weight for elderly women";
      } else if (imc >= 27 && imc < 30) {
        figura = "sobrepeso_feminino.webp";
        mensagem = "Overweight for elderly women";
      } else {
        figura = "obesidade_grau_I_feminina.webp";
        mensagem = "Obesity for elderly women";
      }
    }
  }
  return { figura, mensagem };
};

const formatarInputAltura = (input) => {
  let valor = input.value.replace(/[^\d,]/g, "");

  if (valor.includes(",")) {
    valor = valor.substring(0, 1) + valor.substring(1).replace(",", "");
    valor = valor.substring(0, 1) + "," + valor.substring(1);
  } else {
    if (valor.length > 1) {
      valor = valor.substring(0, 1) + "," + valor.substring(1);
    }
  }

  input.value = valor;
};
