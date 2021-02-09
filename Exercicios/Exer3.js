// Transformar notas escolares

/*Crie um algoritimo que transforme as notas do sistema
numérico para o sistema de notas em caracteres tipo A B C
  * de 90 para cima - A
  * entre 80 - 90   - B
  * entre 70 - 79   - C
  * entre 60 - 69   - D
  * menor que 60    - E
*/

function transformarNota(score) {
  let scoreA = score >= 90 && score <= 100
  let scoreB = score >= 80 && score < 90
  let scoreC = score >= 70 && score < 80
  let scoreD = score >= 60 && score < 70
  let scoreE = score < 60 && score >= 0

  if (scoreA) {
    return 'A'
  } else if (scoreB) {
    return 'B'
  } else if (scoreC) {
    return 'C'
  } else if (scoreD) {
    return 'D'
  } else if (scoreE) {
    return 'E'
  } else {
    return 'Nota inválida'
  }
}
console.log(transformarNota(101))