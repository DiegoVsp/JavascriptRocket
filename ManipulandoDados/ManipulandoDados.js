/*
  Prototype

  *prototype-based language
  *prototype chain
  *__proto__
*/

// Manipulando Strings e Números

// Transformar String em Número e Número em String
console.log('---------convertendo String pra número(Número para String)---------')
let string = "123"
Number(string)

let number = 321
String(number)

// Contando quantos caracteres tem uma palavra e quantos digitos tem um número
console.log('---------length---------')
let word = "Paralelepipedo"
console.log(word.length)

let number3 = 1234
console.log(String(number3).length)

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
console.log('---------toFixed/Replace---------')
let numero = 3213231231.3123

console.log(numero.toFixed(2).replace('.', ','))

// Transformar letras minúsculas em maiúsculas. Faça o contrário disso também
console.log('---------toLower/UpperCase---------')
let palavra = "Programar é muito bacana!"
console.log(palavra.toUpperCase())
console.log(palavra.toLowerCase())
console.log(palavra)

// Verificar se o texto contém a palavra Amor
console.log('---------Includes---------')
let phrase = "Eu quero viver o Amor"
console.log(phrase.includes("Amor"))

//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme 
//o array em um texto e onde eram espaços, coloque _ 

console.log('---------JOIN---------')
let text = "Eu quero viver o Amor!"
let myArray = text.split(" ")
let phraseWithunderscore = myArray.join("_")
console.log(phraseWithunderscore)

//Criar Array com constructor
console.log('---------Array com constructor---------')

// let myArray2 = ['a', 'b', 'c']
// console.log(myArray2)

let myArray2 = new Array('a', 'b', 'c');
console.log(myArray2)


// Contar Elementos de um Array
console.log('---------Contar elementos de um Array---------')
console.log(["a", "b", "c"].length)

//Transformar uma cadeia de caracteres em elementos de um array
console.log('---------Transformar cadeia de caracteres em elementos de um array---------')
let word2 = "manipulação"
console.log(Array.from(word2))

console.log('---------Manipulando Arrays---------')
let techs = ["html","css","js"]
// Adicionar um item no fim
console.log(techs.push("vue"))

// adicionar no começo
console.log(techs.unshift("sql"))

// remover do fim
// console.log(techs.pop())

// remover do começo
// console.log(techs.shift())

// pegar somente alguns elementos do array
// console.log(techs.slice(1,3))

// remover 1 ou mais items em qualquer posição do array
// console.log(techs.splice(1,1))

// encontrar a posição de um elemento no array
let position = techs.indexOf("css")
techs.splice(position,1)

console.log(techs)

