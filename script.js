// console.log({
//   nome:'Diego',
//   idade:29,
//   andar(){
//     console.log('Andar')
//   }
// })

// Array(Vetores)
console.log(["Leite","Ovos","Maçã"])

// 

let clima = true

clima = 'Frio'
console.log(typeof clima)

// var é global e também local
// hoisting

// const e let são locais  e só funcionam no escopo onde foi criada

let y = 3
{
  let x =2
  console.log(x)
}
console.log(y)