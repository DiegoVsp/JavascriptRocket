// 1. declare uma variável de nome weight

let weight = 49.2
// 2. Que que tipo de dado é a variável acima?
console.log(typeof weight)

// 3. Declare uma variável e atribua valores para cada um dos dados:
let nome = "Diego"
let age = 29
let stars = 4.5
let isSubscribed = true

console.log(`Nome ${nome}, age ${age}, stars ${stars}, isSubscribed ${isSubscribed}`)

/**
 * 4. A variável student é de que tipo de dados? 
 * 4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.
 * 4.2 Mostre no console a seguinte mensagem
 * <name> de idade <age> pesa <weight> kilos.
 */
let student = {}

console.log(typeof student)

student = {
  nome1: 'Diego',
  idade: 29,
  peso: 83.5,
  stars: 4.5,
  isSubscribed:true
}
console.log(student)

let { nome1, idade, peso } = student
console.log(`${nome1} de idade ${idade} pesa ${peso} kilos.`)

/**
 * 5. Declare uma variável do tipo Array, de nome students e atribua a ela
 * nenhum valor, ou seja, somente um Array vazio
 */
let estudantes = []

// estudantes.push(student)
estudantes = [student]
console.log(estudantes)
console.log(estudantes[0])

const mario = {
  nome:"Mario",
  idade:26,
  peso:88.4,
  isSubscribed:false
}

estudantes[1] = mario
console.log(estudantes)

var a = 1
console.log(a)