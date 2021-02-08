// function expression
// função anonima \/
// const sum = function(number1,number2){ // passando parâmetros
//   let total = number1+number2
//   return total
// }

// passando argumentos
// let number1 = 34
// let number2 = 25

// console.log(`A soma de ${number1} + ${number2} é = ${sum(number1,number2)}`)
// console.log(`O número1 é ${number1}`)
// console.log(`O número2 é ${number2}`)

// Função é um liquidificador
function fazerSuco(fruta1, fruta2) {
  return 'suco de: ' + fruta1 + fruta2
}
const copo = fazerSuco('Banana', 'Maçã');

console.log(copo)

console.log("---------Function Scope---------")

let subject
function createThink() {
  subject = 'study'
  return subject
}
console.log(subject)
console.log(createThink())
console.log(subject)

console.log("---------Function Hoisting---------")

sayMyName()

function sayMyName() {
  console.log('Diego')
}

console.log("---------Arrow Function---------")
const sayName = (name) => {
  console.log(name)
}

sayName('Diego-Vespa')

console.log("---------Callback Function---------")
function sayMyNome(name) {
  console.log('Antes de executar a função CallBack')
  name()
  console.log('Depois de executar a função CallBack')
}
sayMyNome(
  () => {
    console.log('Estou em uma CallBack')
  }
)

console.log("---------Function Construtoras---------")
/*Function() constructor
  * expressão new
  * criar um novo objeto
  * this keyword
*/ 
// colocar em maiusculo não é obrigatório, mas é uma boa prática

function Person(name){
  this.name = name
  this.walk = function(){
    return this.name + ' está andando'
  }
}
const diego = new Person("Diego")
const joao = new Person("João")
console.log(diego.walk())
console.log(joao)

let nome = new String("Diego")
console.log(nome)

