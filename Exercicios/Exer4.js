/*
###Sitemas de gastos familiares

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
  *receitas: []
  *despesas: []
Agora, crie uma função que irá calcular o total de receitas 
e despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo
*/

let family = {
  receitas: [1200.00, 800.00, 350.00],
  despesas: [139.90, 59.90, 47.90, 136, 90,2000],
}

// calculo receitas - despesas

function soma(array) {
  let total = 0
  for (let value of array) {
    total += value
  }
  return total
}

function calcBalance(family) {
  const calcReceitas = soma(family.receitas)
  const calcDespesas = soma(family.despesas)
  const total = calcReceitas - calcDespesas

  let msg = 'negativo'
  if (total >= 0) {
    msg = 'positivo'
  } 
  console.log(`Seu saldo é ${msg}: R$${total.toFixed(2)}`)
}
calcBalance(family)