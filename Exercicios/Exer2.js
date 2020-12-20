function calc(valor1, valor2, operacao) {
  switch (operacao) {
    case '+':
      return `O resultado da soma de ${valor1} + ${valor2} é ${valor1 + valor2}`
      break;
    case '-':
      if (valor1 < valor2) {
        return `O resultado da subtração de ${valor2} - ${valor1} é ${valor2 - valor1}`
      } else {
        return `O resultado da subtração de ${valor1} - ${valor2} é ${valor1 - valor2}`
      }
      break;

    case '*':
      return `O resultado da multiplicação de ${valor1} * ${valor2} é ${valor1 * valor2}`
      break

    case '/':
      return `O resultado da divisão de ${valor1} / ${valor2} é ${valor1 / valor2}`
      break
  }
}
console.log(calc(5, 5, '-'))