const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));


let operacao = prompt(
  "Escolha a operação:\n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"
);

let resultado;

switch (operacao) {
  case "1":
    resultado = num1 + num2;
    console.log(`A soma de ${num1} + ${num2} é ${resultado}`);
    break;
  case "2":
    resultado = num1 - num2;
    console.log(`A subtração de ${num1} - ${num2} é ${resultado}`);
    break;
  case "3":
    resultado = num1 * num2;
    console.log(`A multiplicação de ${num1} * ${num2} é ${resultado}`);
    break;
  case "4":
    if (num2 !== 0) {
      resultado = num1 / num2;
      console.log(`A divisão de ${num1} / ${num2} é ${resultado}`);
    } else {
      console.log("Erro: não é possível dividir por zero.");
    }
    break;
  default:
        console.log("Operação inválida.");
    }