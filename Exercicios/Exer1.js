// Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function sacarDinheiro(valorSaque) {
  let cont100 = 0
  let cont50 = 0
  let cont10 = 0
  let cont5 = 0
  let cont1 = 0
  let verifValorNota = calcNota(valorSaque)

  while (valorSaque >= verifValorNota) {
    switch (verifValorNota) {
      case 100: {
        valorSaque -= 100
        cont100++
        break
      }
      case 50: {
        valorSaque -= 50
        cont50++
        break
      }
      case 10: {
        valorSaque -= 10
        cont10++
        break
      }
      case 5: {
        valorSaque -= 5
        cont5++
        break
      }
      case 1: {
        valorSaque -= 1
        cont1++
        break
      }
    }
    verifValorNota = calcNota(valorSaque)
  }
  return elaborarRes(cont100,cont50,cont10,cont5,cont1)
}

function calcNota(valorSaque){
  if(valorSaque>=100){
    return 100
  }else if(valorSaque>=50){
    return 50
  }else if(valorSaque>=10){
    return 10
  }else if(valorSaque>=5){
    return 5
  }else if(valorSaque>=1){
    return 1
  }
}

function elaborarRes(cont100,cont50,cont10,cont5,cont1){
  let resultado = ''
  if(cont100>0){
    resultado+= `${cont100} nota(s) de 100. `
  }
  if(cont50>0){
    resultado+= `${cont50} nota(s) de 50. `
  }
  if(cont10>0){
    resultado+= `${cont10} nota(s) de 10. `
  }
  if(cont5>0){
    resultado+= `${cont5} nota(s) de 5. `
  }
  if(cont1>0){
    resultado+= `${cont1} nota(s) de 1. `
  }
  return resultado
}
console.log(sacarDinheiro(213))