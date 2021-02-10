/*
  ###Celsius em Fahrenheit

  Crie uma função que receba uma string em celsius
  ou fahrenheit e faça a transformação de uma unidade
   para outra

   C = (F-32)* 5/9
   F = C * 9/5 + 32
*/

/*function convertTo(temp, op) {
  switch (op) {
    case 'C':
    case 'c':
      return `${((temp - 32) * 5 / 9).toFixed(1).replace('.', ',')}ºC`
      break
    case 'F':
    case 'f':
      return `${(temp * 9 / 5 + 32).toFixed(1).replace('.', ',')}ºF`
      break
    default:
      return 'Inválido'
      break
  }
}
console.log(convertTo(50, 'C'))
*/


function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  //Fluxo de erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }
  // Fluxo ideal, F->C
  let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
  let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9
  let degreeSign = 'ºC'

  // Fluxo alternativo
  if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""))
    formula = celsius => celsius * 9 / 5 + 32
    degreeSign = 'ºF'
  }

  return formula(updatedDegree) + degreeSign
}

try {
  console.log(transformDegree('50C'))
  // transformDegree('50Z')
} catch (error) {
  console.log(error.message)
}