// Estrutura de Repetição
// for
// breack - Para a execução do loop
// continue - pula a execução do momento

for (let i = 10; i >= 0; i--) {
  if (i === 5) {
    continue
  }
  console.log(`${i}`)
}
console.log('------WHILE------')
// While é usado quando não se sabe o momento da parada
let i = 0
while (i < 10) {
  console.log(i)
  i++
}

// for...of
console.log('------For...Of------')
let nome = 'Diego'
let name = ['Joao', 'Paulo', 'Pedro']

for(let char of nome){
  console.log(char)
}
for(let nomes of name){
  console.log(nomes)
}
// For...in
console.log('------For...In------')

let person = {
  name:'John',
  age:30,
  weight:88
}
for(let property in person){
  console.log(property)
  // console.log(person["name"])
  // console.log(person[property])
  // console.log(person.name)
}