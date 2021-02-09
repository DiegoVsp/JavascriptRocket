// if...else


let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37.0

if (highTemperature) {
  console.log("Está com febre alta")
}
else if (mediumTemperature) {
  console.log("Febre moderada")
} else {
  console.log("Saudável")
}

// Switch
let expression = ''
switch (expression) {
  case 'a':
    //código
    console.log('a')
    break
  case 'b':
    // código para expressão b
    console.log('b')
    break
  default:
    console.log('default')
    break
}

function calculate(number1, operator, number2) {
  let result = 0

  switch (operator) {
    case '+':
      result = number1+number2
      break
    case '-':
      result = number1-number2
      break
    case '*':
      result = number1*number2
      break
    case '/':
      result = number1/number2
      break
    default:
      console.log('não implementado')
      break
  }
  return result
}
console.log(calculate(3,'^',2))

// Throw

function sayMyName(name = ''){
  if(name === ''){
    throw "Nome é necessário"
  }
  console.log('depois do erro')
}

// Try...Catch
try {
  sayMyName('Diego')
}catch(e){
  console.log(e)
}
console.log('após o try/catch')