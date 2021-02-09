/**Expressoes e Operadores
 * - Expressions
 * - Operators
 *  Binary
 *  Unary
 *  Ternario
 **/

let number = 1
console.log(number)

//  opererador binário
console.log(number + 1)

//  operador unário
console.log(++number)

// operador Ternário
console.log(true ? 'alo' : 'nada')

// new
// criar um objeto

let name = new String('Diego')
name.surName = "Vespa"

let data = new Date('2020-12-01')

let age = new Number('29')
console.log(name.surName, age, data.getDay())

/*
  Operadores unários
  typeof
  delete
*/

const pessoa = {
  name: 'Diego',
  age: 29,
}
delete pessoa.name
console.log(pessoa)

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã top
let pao = true
let queijo = true

const niceBreakFast = (pao && queijo) ? "Café Nice" : "Café BaD"
console.log(niceBreakFast)


// maior 18
let anos = 18

const canDrive = anos >= 18 ? "Can Drive" : "Can't Drive"
console.log(canDrive)

// Operador de String(String operator)

// comparison(comparação)
console.log('a' == 'a')

// concatenation (concatenação)
// Retorna a união de duas Strings

console.log('a' + 'a')

